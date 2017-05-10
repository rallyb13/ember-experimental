import Ember from 'ember';

export default Ember.Component.extend({
  // Properties
  list: [],
  todoItem: '',

  // Actions
  actions: {
    recordTask() {
      let list = this.get('list'),
        nextTask = this.get('todoItem');

      list.pushObject(nextTask);
      nextTask = this.set('todoItem', '');
    }
  }
});
