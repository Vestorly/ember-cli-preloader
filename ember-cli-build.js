/* global require, module */

var path = require('path');
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-preloader': {
      enableDuringTests: true,
      paths: {
        html: path.join('tests', 'dummy', 'app', 'preloader', 'preloader.html'),
        css: path.join('tests', 'dummy', 'app', 'preloader', 'preloader.css')
      }
    }
  });

  return app.toTree();
};
