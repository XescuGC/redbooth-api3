RB.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  Entities.Collection = Backbone.Collection.extend({
    url: function() {
      return App.origin + this.urlPath;
    },
  });
})

