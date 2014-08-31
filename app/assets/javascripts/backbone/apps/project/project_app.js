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
    },

    show: function(project) {
      return new ProjectApp.Show.Controller({
        project: project,
        region: App.dialogRegion
      })
    }
  }

  App.vent.on('project:show', function(project) {
    API.show(project);
  });
  App.addInitializer(function() {
    return new ProjectApp.Router({
      controller: API
    })
  })
})

