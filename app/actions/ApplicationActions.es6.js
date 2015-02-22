var Reflux = require('reflux');
module.exports = Reflux.createActions([
  'saveToLocalStorage',

  // lyrics
  'changeVideo',
  'saveLyrics',

  // timing
  'startTiming',
  'stopTiming',

  'lyricTimingTriggered',
  'crunchLyricDurations',

  // calibration
  'startCalibration',
  'stopCalibration',

  // rap
  'startRap',
  'stopRap'
]);