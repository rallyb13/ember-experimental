import Ember from 'ember';

export default Ember.Component.extend({
  // Properties
  complete: 0,
  total: 0,

  // Actions
  actions: {
    addTask() {
      this.incrementProperty('total', 1);
    },

    removeTask(isChecked) {
      this.decrementProperty('total', 1);
      if (isChecked === true) {
        this.decrementProperty('complete', 1);
      }
    },

    trackProgress(isChecked) {
      let count = this.get('complete');
      count = isChecked === true ? ++count : --count;
      this.set('complete', count);
      this.notifyPropertyChange('complete');
    }
  }
});
