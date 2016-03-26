import Ember from 'ember';

export default Ember.Controller.extend({

  direction: 'up',

  size: 200,

  strokeWidth: 10,

  rotate: 0,

  actions: {
    changeDirection() {
      let content = Ember.A(['up', 'down', 'left', 'right']);
      let selectedEl    = Ember.$('#direction')[0];
      let selectedIndex = selectedEl.selectedIndex;
      let selectedValue = content.objectAt(selectedIndex);
      this.set('direction', selectedValue);
    }
  }
});
