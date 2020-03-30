export default ({ location, done, view }) => {
  const duration = 3000;
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
    zoom,
    duration: duration / 2,
  }, callback);
};
