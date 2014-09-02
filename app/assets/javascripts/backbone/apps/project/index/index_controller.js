RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var that = this;
      this.layout = this.getLayoutView();
      var promiseProjects = App.request('project:entities');
      this.listenTo(this.layout, 'show', function() {
        $.when(promiseProjects).done(function(projects) {
          that.projectListRegion(projects);
        })
      })
      this.show(this.layout);
    },

    projectListRegion: function(projects) {
      var projectsList = this.getProjectsListView(projects);
      projectsList.on('itemview:see:more', function(child, args) {
        App.vent.trigger('project:show', child.model);
      });
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

