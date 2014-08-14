RB.module('TaskListApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.TaskList = App.Views.ItemView.extend({
    template: 'task_list/index/templates/task_list'
  })
})
