/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',

    APP: {
      preloader: {
        removeDelay: false,
        loadedClass: false
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com https://assets-cdn.github.com",
      'script-src': "'self' https://cdnjs.cloudflare.com https://gist.github.com",
      'font-src': "'self' https://fonts.gstatic.com data:", // Allow fonts to be loaded from http://fonts.gstatic.com
      // 'img-src': "'self'",
      // 'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      // 'media-src': "'self'"
    }
  };

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
