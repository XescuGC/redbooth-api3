RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var that = this;
      var indexView = this.getIndexView();
      var promiseProjects = App.request('project:entities');
      $.when(promiseProjects).done(function(projects) {
        console.log(projects);
        that.show(indexView);
      })
    },

    getIndexView: function() {
      return new Index.Project
    }
  })
})

