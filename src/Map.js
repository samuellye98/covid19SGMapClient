import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px',
};

function Map() {
  const mapboxElRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://covid19sgmap.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    console.log(data, 'data');
    if (data) {
      const map = new mapboxgl.Map({
        container: mapboxElRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        // latitude: 1.3521,
        // longitude: 103.8198,
        //   zoom: 10.5,
        center: [103.8198, 1.3521], // initial geo location
        zoom: 10.5, // initial zoom
      });

      map.addControl(new mapboxgl.NavigationControl());

      // Call this method when the map is loaded
      map.once('load', function () {
        // Add our SOURCE
        // with id "points"
        map.addSource('cases', {
          type: 'geojson',
          data: data,
          cluster: true,
          clusterRadius: 50,
        });

        // Add our layer
        map.addLayer(clusterLayer);
        map.addLayer(clusterCountLayer);
        map.addLayer(unclusteredPointLayer);
      });

      // const popup = new mapboxgl.Popup({
      //   closeButton: false,
      //   closeOnClick: false,
      // });

      // const clusters = [];
      // data['features'].forEach((e) => {
      //   if (!clusters.includes(e.cluster)) {
      //     clusters.push(e.cluster);
      //   }
      // });
      // console.log(clusters);

      // let lastId;

      // map.on('mousemove', 'clusters', (e) => {
      //   // console.log(e);
      //   const caseNo = e.features[0].properties.caseNo;
      //   const clusterCount = e.features[0].properties.point_count;
      //   console.log(clusterCount, e.features[0]);

      //   // if (id !== lastId) {
      //   //   lastId = id;
      //   //   const { cases, deaths, country, province } = e.features[0].properties;

      //   //   // Change the pointer type on mouseenter
      //   //   map.getCanvas().style.cursor = 'pointer';

      //   //   const coordinates = e.features[0].geometry.coordinates.slice();

      //   //   const countryISO =
      //   //     lookup.byCountry(country)?.iso2 || lookup.byInternet(country)?.iso2;
      //   //   const provinceHTML =
      //   //     province !== 'null' ? `<p>Province: <b>${province}</b></p>` : '';
      //   //   const mortalityRate = ((deaths / cases) * 100).toFixed(2);
      //   //   const countryFlagHTML = Boolean(countryISO)
      //   //     ? `<img src="https://www.countryflags.io/${countryISO}/flat/64.png"></img>`
      //   //     : '';

      //   //   const HTML = `<p>Country: <b>${country}</b></p>
      //   //       ${provinceHTML}
      //   //       <p>Cases: <b>${cases}</b></p>
      //   //       <p>Deaths: <b>${deaths}</b></p>
      //   //       <p>Mortality Rate: <b>${mortalityRate}%</b></p>
      //   //       ${countryFlagHTML}`;

      //   //   // Ensure that if the map is zoomed out such that multiple
      //   //   // copies of the feature are visible, the popup appears
      //   //   // over the copy being pointed to.
      //   //   while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      //   //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      //   //   }

      //   //   popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
      //   // }
      // });

      // map.on('mouseleave', 'circles', function () {
      //   lastId = undefined;
      //   map.getCanvas().style.cursor = '';
      //   popup.remove();
      // });
    }
  }, [data]);

  return (
    <div className="App">
      <div className="mapContainer">
        <div className="mapBox" ref={mapboxElRef} />
      </div>
    </div>
  );
}

export default Map;
