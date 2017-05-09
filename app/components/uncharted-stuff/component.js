import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ProgressBar from "npm:progressbar.js";

export default Ember.Component.extend({

  didInsertElement() {
    const data = { complete: 7, total: 15 };
    const percentage =  data.complete / data.total;
    const progCirc = new ProgressBar.Circle(progBarCont, {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });

    $('#circVal').text(String(Math.round(percentage * 100)) + '% complete');
    progCirc.animate(percentage);
  }
});
