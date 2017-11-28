require.undef('CandelaLineChart');

require.config({
  baseUrl: '/files'
});

define('CandelaLineChart', ['@jupyter-widgets/base', 'candela'], function (widgets, candela) {
  var options = JSON.parse('%s');

  var CandelaLineChart = widgets.DOMWidgetView.extend({
    initialize: function () {
      this.vis = new candela.components.LineChart(this.el, options);
    },

    render: function () {
      this.vis.render();
    }
  });

  return {
    CandelaLineChart: CandelaLineChart
  };
});
