import Ember from 'ember';
import config from 'dummy/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('docs');
  this.route('example');
});

export default Router;
