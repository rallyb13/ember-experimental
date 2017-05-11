import Ember from 'ember';

export default Ember.Component.extend({
  // Properties
  list: [],
  todoItem: '',

  // Actions
  actions: {
    removeItem(item) {
      const list = this.get('list');
      const newList = list.filter(obj => obj.name !== item.name);

      this.set('list', newList);
      this.removeTask(item.isComplete);
    },

    recordTask() {
      let list = this.get('list'),
        nextTask = this.get('todoItem');

      list.pushObject({isComplete: false, name: nextTask});
      nextTask = this.set('todoItem', '');
      this.addTask();
    }
  }
});
