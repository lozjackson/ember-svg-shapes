import Ember from 'ember';

export default Ember.Controller.extend({

    direction: 'up',

    size: 200,

    strokeWidth: 10,

    rotate: 0,

    actions: {
        changeDirection() {
            var content = Ember.A(['up', 'down', 'left', 'right']);
            const selectedEl    = Ember.$('#direction')[0];
            const selectedIndex = selectedEl.selectedIndex;
            const selectedValue = content.objectAt(selectedIndex);
            this.set('direction', selectedValue);
        }
    }
});
