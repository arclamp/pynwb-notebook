require.undef('CandelaLineChart');

require.config({
  baseUrl: '/files'
});

define('CandelaLineChart', ['@jupyter-widgets/base', 'candela'], function (widgets, candela) {
  console.log('candela', candela);

  var CandelaLineChart = widgets.DOMWidgetView.extend({
    initialize: function () {
      var data = [];
      for (var i = -5; i < 5; i += 0.1) {
        data.push({
          x: i,
          y: i * i - 2
        });
      }

      this.vis = new candela.components.LineChart(this.el, {
        data: data,
        x: 'x',
        y: 'y'
      });
    },

    render: function () {
      this.vis.render();
    }
  });

  return {
    CandelaLineChart: CandelaLineChart
  };
});
