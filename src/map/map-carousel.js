import { CAROUSEL_TIME_INTERVAL } from '@/config.json';
import { fromLonLat } from 'ol/proj';
import flyTo from '@/map/fly-to';
import { view } from '@/map';

const london = fromLonLat([-0.12755, 51.507222]);
const moscow = fromLonLat([37.6178, 55.7517]);
const istanbul = fromLonLat([28.9744, 41.0128]);
const rome = fromLonLat([12.5, 41.9]);
const bern = fromLonLat([7.4458, 46.95]);

const locations = [
  london,
  moscow,
  istanbul,
  rome,
  bern,
];

const pickRandomLocation = () => locations[Math.floor(Math.random() * locations.length)];

let animationInterval = null;

const startCarousel = () => {
  flyTo({ location: pickRandomLocation(), view });
  animationInterval = setInterval(() => {
    flyTo({ location: pickRandomLocation(), view });
  }, CAROUSEL_TIME_INTERVAL);
};

const stopCarousel = () => {
  clearInterval(animationInterval);
};

export {
  startCarousel,
  stopCarousel,
};
