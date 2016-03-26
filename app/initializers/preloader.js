import Ember from 'ember';
import Preloader from 'ember-cli-preloader/services/preloader';

const { inject, run } = Ember;

export default {
  name: 'preloader',

  initialize: function(app) {
    let options = app.preloader || {};
    let service = Preloader.create({
      options: options
    });

    app.register('service:preloader', service, { instantiate: false });
  }
}
