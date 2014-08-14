RB.module('TaskListApp', function(TaskListApp, App, Backbone, Marionete, $, _){
  var API;

  TaskListApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      ''  : 'index'
    }
  })

  API = {
    index: function() {
      return new TaskListApp.Index.Controller();
    }
  }

  App.addInitializer(function() {
    return new TaskListApp.Router({
      controller: API
    })
  })
})
