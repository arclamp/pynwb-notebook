require.undef('messager');

define('messager', ['@jupyter-widgets/base'], function (widgets) {
  var Messager = widgets.DOMWidgetView.extend({
    render: function () {
      this.messageChanged();
      this.model.on('changed:message', this.messageChanged, this);
    },

    messageChanged: function () {
      this.el.textContent = this.model.get('message');
    }
  });

  return {
    Messager: Messager
  }
});
