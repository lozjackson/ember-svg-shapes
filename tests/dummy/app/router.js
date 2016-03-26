import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('svg-circle');
  this.route('svg-square');
  this.route('svg-rectangle');
  this.route('svg-triangle');
  this.route('svg-star');
});

export default Router;
