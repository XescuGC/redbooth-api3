RB.module('ProjectApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function(options) {
      options || (options = {})
      this.projectView = this.getProjectView(options.project);
      this.projectView.on('project:delete', function(args) {
        options.project.destroy();
      })
      this.show(this.projectView);
    },

    getProjectView: function(project) {
      return new Show.Project({
        model: project
      });
    }
  })
})
