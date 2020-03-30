import { TILES_PRELOAD, INITIAL_ZOOM_LVL } from '@/config.json';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const view = new View({
  center: [0, 0],
  zoom: INITIAL_ZOOM_LVL,
});

const map = new Map({
  view,
  controls: [],
  layers: [
    new TileLayer({
      source: new OSM(),
      preload: TILES_PRELOAD,
    }),
  ],
});

export {
  map,
  view,
};
