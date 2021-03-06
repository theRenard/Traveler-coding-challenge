import { FLY_TO_TIME_INTERVAL, INITIAL_ZOOM_LVL } from '@/config.json';

export default ({ location, done, view }) => {
  const duration = FLY_TO_TIME_INTERVAL;
  const zoom = view.getZoom();
  let parts = 2;
  let called = false;
  function callback(complete) {
    // eslint-disable-next-line no-plusplus
    --parts;
    if (called) {
      return;
    }
    if (parts === 0 || !complete) {
      called = true;
      if (typeof done === 'function') done(complete);
    }
  }
  view.animate({
    center: location,
    duration,
  }, callback);
  view.animate({
    zoom: zoom - 1,
    duration: duration / 2,
  }, {
    zoom: INITIAL_ZOOM_LVL,
    duration: duration / 2,
  }, callback);
};
