RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var that = this;
      this.layout = this.getLayoutView();
      var promiseProjects = App.request('project:entities');
      $.when(promiseProjects).done(function(projects) {
        var projectsList = that.getProjectsListView(projects);
        that.listenTo(that.layout, 'show', function() {
          that.show(projectsList, {region: that.layout.projectsListRegion});
        })
        that.show(that.layout);
      })
    },

    getLayoutView: function() {
      return new Index.Layout
    },

    getProjectsListView: function(projects) {
      return new Index.ProjectsList({
        collection: projects
      })
    }
  })
})

