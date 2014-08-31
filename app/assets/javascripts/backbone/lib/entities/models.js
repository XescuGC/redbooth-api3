RB.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  Backbone.Model.prototype.urlPath = Backbone.Model.prototype.url;

  Entities.Model = Backbone.Model.extend({
    urlRoot: function() {
      return App.origin + this.urlPath;
    },
    save: function(data, options) {
      options || (options = {});
      var isNew = this.isNew()

      _.defaults(options,{
        wait: true,
        success: _.bind(this.saveSuccess, this, isNew, options.collection, options.callback),
        error:   _.bind(this.saveError, this),
      });

      this.unset("_errors")
      Backbone.Model.prototype.save.call(this, data, options) 
    },

    saveSuccess: function(isNew, collection, callback) {
      if (isNew){
        if (typeof collection !== "undefined" && collection !== null) {
          collection.add(this)
          collection.trigger("model:created", this)
        }
        this.trigger("created", this)
      }
      else{
        if (!(typeof collection !== "undefined" && collection !== null)) {
          collection = this.collection
        }
        if (typeof collection !== "undefined" && collection !== null) {
          collection.trigger("model:updated", this)
        }
        this.trigger("updated", this)
      }

      if (typeof callback !== "undefined" && callback !== null) {
        callback()
      }
    },

    saveError: function(model, xhr, options){
      if (xhr.status !== 500){
        this.set({_errors: $.parseJSON(xhr.responseText).errors})
      }
    }
  });
})

