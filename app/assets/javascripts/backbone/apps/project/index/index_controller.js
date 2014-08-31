RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var that = this;
      this.layout = this.getLayoutView();
      var promiseProjects = App.request('project:entities');
      $.when(promiseProjects).done(function(projects) {
        that.listenTo(that.layout, 'show', function() {
          that.projectListRegion(projects);
        })
        that.show(that.layout);
      })
    },

    projectListRegion: function(projects) {
      var projectsList = this.getProjectsListView(projects);
      this.show(projectsList, {region: this.layout.projectsListRegion});
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

