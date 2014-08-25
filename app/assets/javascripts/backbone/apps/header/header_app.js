RB.module('HeaderApp', function(HeaderApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;
  var API;

  API = {
    show: function() {
      return new HeaderApp.Show.Controller({
        region: App.headerRegion
      });
    }
  };

  HeaderApp.on('start', function() {
    return API.show();
  });
});
