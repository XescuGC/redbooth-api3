RB.module('FooterApp', function(FooterApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;
  var API;

  API = {
    show: function() {
      return new FooterApp.Show.Controller({
        region: App.footerRegion
      });
    }
  };

  FooterApp.on('start', function() {
    return API.show();
  });
});

