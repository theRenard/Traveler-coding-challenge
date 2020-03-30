import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const view = new View({
  center: [0, 0],
  zoom: 5,
});

const map = ({ target }) => new Map({
  view,
  target,
  controls: [],
  layers: [
    new TileLayer({
      source: new OSM(),
      preload: 4,
    }),
  ],
});

export {
  map,
  view,
};
