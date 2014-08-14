RB.module("Utilities", function(Utilities, App, Backbone, Marionette, $, _) {

  include = function() {
    var args = Array.prototype.slice.call (arguments, include.length);
    var klass = this;
    
    args.forEach(function(element) {
      var concern = App.request("concern", element);
      Cocktail.mixin(klass, concern);
    });

    return klass;
  }

  modules = [
    { Marionette: ["ItemView", "Layout", "CollectionView", "CompositeView"] }, 
    { Entities:   ["Model", "Collection"] }
  ];

  var key, klass, klasses, module, obj, _i, _j, _len, _len1;

  for (_i = 0, _len = modules.length; _i < _len; _i++) {
    module = modules[_i];
    for (key in module) {
      klasses = module[key];
      for (_j = 0, _len1 = klasses.length; _j < _len1; _j++) {
        klass = klasses[_j];
        obj = window[key] || App[key];
        obj[klass].include = include;
      }
    }
  }

})
