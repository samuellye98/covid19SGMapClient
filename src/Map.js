import React, { useRef, useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from './Loader';
import { Table } from './Table';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss';
import { clusterLayer } from './layers';

// codesandbox.io/s/mapbox-covid19-8sni6?file=/src/App.js:3187-3226

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const api = process.env.REACT_APP_GEOJSON_API;

function Map() {
  const mapboxElRef = useRef(null);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch(api)
        .then((res) => res.json())
        .then((res) => {
          setMapData(res);
        })
        .catch(console.log)
    );
  }, []);

  useEffect(() => {
    if (mapData.length !== 0) {
      const map = new mapboxgl.Map({
        container: mapboxElRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [103.8198, 1.3521], // initial geo location
        zoom: 10.5, // initial zoom
      });

      map.scrollZoom.disable();

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl());

      // Add geolocation
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      // Call this method when the map is loaded
      // Add source
      map.once('load', function () {
        map.addSource('covid19sg', {
          type: 'geojson',
          data: mapData,
        });

        // Add layers
        map.addLayer(clusterLayer);
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });
      // Add popup
      map.on('mousemove', 'clusters', (e) => {
        const { numCases, location } = e.features[0].properties;

        // Change the pointer type on mouseenter
        map.getCanvas().style.cursor = 'pointer';

        const HTML = `<p>Cluster: <b>${location}</b></p>
              <p>Cases: <b>${numCases}</b></p>
              `;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        const coordinates = e.features[0].geometry.coordinates.slice();
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
      });

      map.on('mouseleave', 'clusters', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    }
  }, [mapData]);

  return (
    <div className="indexContainer">
      <LoadingIndicator />
      <div className="mapContainer">
        <div className="mapHeader">
          <h1>Singapore COVID-19 Clusters</h1>
        </div>
        <div className="mapBox" ref={mapboxElRef} />
        <Table mapData={mapData}></Table>
      </div>
    </div>
  );
}

export default Map;
