export const clusterLayer = {
  id: 'clusters',
  source: 'covid19sg', // this should be the id of source
  type: 'circle',
  paint: {
    'circle-opacity': 0.75,
    'circle-stroke-width': [
      'interpolate',
      ['linear'],
      ['get', 'numCases'],
      1,
      1,
      100,
      1.75,
    ],
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['get', 'numCases'],
      1,
      4,
      10,
      8,
      50,
      10,
      100,
      14,
      200,
      18,
      500,
      40,
    ],
    'circle-color': [
      'interpolate',
      ['linear'],
      ['get', 'numCases'],
      1,
      '#ffffb2',
      10,
      '#fed976',
      20,
      '#feb24c',
      50,
      '#fd8d3c',
      100,
      '#fc4e2a',
      200,
      '#e31a1c',
      500,
      '#b10026',
    ],
  },
};

export const casesLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'cases',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#51bbd6',
      100,
      '#f1f075',
      200,
      '#f28cb1',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};

export const casesCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'cases',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
  additional: 'cluster',
};

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'cases',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
};
