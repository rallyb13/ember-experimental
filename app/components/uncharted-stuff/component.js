import Ember from 'ember';
import ProgressBar from 'npm:progressbar.js';


export default Ember.Component.extend({
  // Properties
  data: {},
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

  didRender() {
    this.renderGraph();
  },

  // Methods
  renderGraph() {
    let data = this.get('data'),
      percentage = data.complete / data.total,
      graph = this.get('progCirc');

    $('#circVal').text(String(Math.round(percentage * 100)) + '% complete');
    graph.animate(percentage);
  }

});
