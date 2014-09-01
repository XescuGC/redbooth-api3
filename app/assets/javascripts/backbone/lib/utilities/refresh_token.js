RB.module('Utilities', function(Utilities, App, Backbone, Marionette, $, _) {
  var startRefresh = function() {
    var time = 18000000
    setInterval(function() {
      $.ajax({
        url: App.origin + '/authentication/refresh',
        type: 'PUT'
      });
    }, time)
  }
  App.addInitializer(function() {
    return startRefresh();
  })
})
