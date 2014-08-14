RB.module('Entities', function(Entities, App, Backbone, Marionette, $, _){

  Entities.TaskList = Entities.Model.extend({
  })

  Entities.TaskListCollection = Entities.Collection.extend({
    model: Entities.TaksList
  })

})
