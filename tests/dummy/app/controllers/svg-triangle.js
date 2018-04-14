import Controller from '@ember/controller';
import { A } from '@ember/array';
import $ from 'jquery';

export default Controller.extend({

  direction: 'up',

  size: 200,

  strokeWidth: 0,

  rotate: 0,

  actions: {
    changeDirection() {
      let content = A(['up', 'down', 'left', 'right']);
      let selectedEl    = $('#direction')[0];
      let selectedIndex = selectedEl.selectedIndex;
      let selectedValue = content.objectAt(selectedIndex);
      this.set('direction', selectedValue);
    }
  }
});
