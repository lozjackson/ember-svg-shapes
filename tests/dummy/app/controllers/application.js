import Ember from 'ember';

export default Ember.Controller.extend({

    rotateStar: 0,

    _rotateStar: Ember.computed('rotateStar', function() {
        return (this.get('rotateStar') * 3.6).toFixed(1);
    }),
});
