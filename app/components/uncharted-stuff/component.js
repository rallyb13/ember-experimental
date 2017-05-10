import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ProgressBar from 'npm:progressbar.js';


export default Ember.Component.extend({
  // Properties
  data: { complete: 9, total: 15 },
  progCirc: null,

  // Hooks
  didInsertElement() {
    this.set('progCirc',
      new ProgressBar.SemiCircle(progBarCont, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FF8100',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
      })
    );
    this.renderGraph();
  },

  // Methods
  renderGraph() {
    let data = this.get('data'),
      percentage = data.complete / data.total,
      graph = this.get('progCirc');

    $('#circVal').text(String(Math.round(percentage * 100)) + '% complete');
    graph.animate(percentage);
  },

  // Actions
  actions: {
    addOne() {
      let count = this.get('data.complete');
      if (count < 15) {
        ++count;
        this.set('data.complete', count);
        this.renderGraph();
      }
    },
    subOne() {
      let count = this.get('data.complete');
      if (count > 0) {
        --count;
        this.set('data.complete', count);
        this.renderGraph();
      }

    }
  }


});
