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

  require([name], function (lib) {
    console.log('module loaded from path ' + path);
  }, function (error) {
    throw error;
  });
}());
