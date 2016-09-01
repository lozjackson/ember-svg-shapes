import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('svg-circle');
  this.route('svg-square');
  this.route('svg-rectangle');
  this.route('svg-triangle');
  this.route('svg-star');
  this.route('svg-filters');
  this.route('filter-drop-shadow');
});

export default Router;
