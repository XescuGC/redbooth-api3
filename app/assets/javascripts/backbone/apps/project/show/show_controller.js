RB.module('ProjectApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function(options) {
      options || (options = {})
      var that = this;
      this.projectView = this.getProjectView(options.project);
      this.projectView.on('project:delete', function(args) {
        options.project.destroy();
        that.projectView.closeModal();
        that.region.close();
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
