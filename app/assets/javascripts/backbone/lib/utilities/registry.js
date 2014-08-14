RB.module('Utilities', function(Utilities, App, Backbone, Marionette, $, _) {
  var API ={
    register: function(instance, id){
      if (App._registry == null) {
        App._registry = {};
      }
      return App._registry[id] = instance;
    },

    unregister: function(instance, id){
      return delete App._registry[id]
    },

    resetRegistry: function() {
      var oldCount = this.getRegistrySize();
      console.log(oldCount)
      for(var key in App._registry){
        var value = App._registry[key]
        console.log('key', key, 'value', value, 'App._registry', App._registry)
        value.region.close()
      }

      var ret ={
        count: this.getRegistrySize(),
        previous: oldCount,
        msg: 'There were ' + oldCount + ' controllers in the registry, there are now ' + this.getRegistrySize()
      }

      console.info(ret);
      return ret
    },

    getRegistrySize: function() {
      return _.size(App._registry)
    },
  }

  App.commands.setHandler('register:instance', function(instance, id){
    if (window.location.hostname === '127.0.0.1'){
      return API.register(instance, id );
    };
  });

  App.commands.setHandler('unregister:instance', function(instance, id) {
    if (window.location.hostname === '127.0.0.1'){
      return API.unregister(instance, id);
    }
  });

  App.reqres.setHandler('reset:registry', function() {
    return API.resetRegistry();
  });
});
