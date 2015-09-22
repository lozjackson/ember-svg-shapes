import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('svg-circle');
    this.route('svg-triangle');
    this.route('svg-star');
});

export default Router;
