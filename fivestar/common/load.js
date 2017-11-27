(function () {
  var path = '%s';

  require.undef(path);

  require([path], function (lib) {
    console.log('module loaded from path ' + path);
  }, function (error) {
    throw error;
  });
}());
