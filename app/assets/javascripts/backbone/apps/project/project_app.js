RB.module('ProjectApp', function(ProjectApp, App, Backbone, Marionete, $, _){
  var API;

  ProjectApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ''  : 'index'
    }
  })

  API = {
    index: function() {
      return new ProjectApp.Index.Controller();
    }
  }

  App.addInitializer(function() {
    return new ProjectApp.Router({
      controller: API
    })
  })
})

