(function () {
  var path = '%s';
  var name = '%s';

  if (name) {
    require.config({
      paths: {
        [name]: path
      }
    });
  } else {
    name = path;
  }

  require.undef(name);

  element.text('Loading...');

  require([name], function (lib) {
    element.html('Module loaded');
  }, function (error) {
    element.html('<span style="color:red;">ERROR! see console for details</span>');
    throw error;
  });
}());
