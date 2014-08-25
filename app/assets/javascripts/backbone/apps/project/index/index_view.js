RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Project = App.Views.ItemView.extend({
    template: 'project/index/project'
  })
})
