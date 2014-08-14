RB.module('TaskListApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var indexView = this.getIndexView();
      this.show(indexView);
    },

    getIndexView: function() {
      return new Index.TaskList
    }
  })
})
