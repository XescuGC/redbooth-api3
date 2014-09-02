this.RB = (function(Backbone, Marionette) {
  App = new Marionette.Application();

  App.addRegions({
    headerRegion: '#header-region',
    mainRegion:   '#main-region',
    footerRegion: '#footer-region'
  });

  App.addInitializer(function () {
    App.module('HeaderApp').start();
    App.module('FooterApp').start();
  });

  App.reqres.setHandler('default:region', function() {
    return App.mainRegion;
  });

  App.rootRoute = '';

  App.origin = (function() {
    return window.location.origin + '/api/v1';
  })();

  App.on('initialize:after', function() {
    this.addRegions({
      dialogRegion: {
        selector:   '#dialog-region',
        regionType: App.Regions.Dialog
      }
    })
    this.startHistory();
    var route = App.rootRoute;
    if (!this.getCurrentRoute()) {
      this.navigate(route, {trigger: true})
    }
  });

  return App;
})(Backbone, Marionette);
