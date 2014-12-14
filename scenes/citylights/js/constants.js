goog.provide('app.Constants');


/**
 * Scene constants
 * @const
*/
app.Constants = {
  START_DELAY_MS: 500,

  ROTATE_INTERVAL: 1000 / 60, // ms between frames
  ROTATE_DISTANCE: 0.2, //degrees per frame

  STATIC_DOMAIN: 'https://maps.googleapis.com/maps/api/streetview',
  STATIC_QS: '?size=620x400&fov=90&heading=350&pitch=-2&pano=[ID]&sensor=false',

  POSITION_OFFSET: {
    'left': 0,
    'middle': 1,
    'right': 2
  },

  EASE_IN_QUINT: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
  EASE_IN_OUT_CIRC: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',

  PANORAMA_OPTIONS: {
    disableDefaultUI: false,
    addressControl: false,
    panControl: false,
    linksControl: false,
    imageDateControl: false,
    zoomControl: false
  }

};
