RB.module('Utilities', function(Utilities, App, Backbone, Marionette, $, _) {
  return _.extend(Marionette.Renderer, {
    lookups: ['backbone/apps/','backbone/lib/components/'],
    render: function(template, data) {
      var path;
      if (template === false) {
        return;
      }
      path = this.getTemplate(template);
      if (!path) {
        throw 'Template ' + template + ' not found!';
      }
      return path(data);
    },
    getTemplate: function(template) {
      var lookup, path, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.lookups;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        lookup = _ref[_i];
        _ref1 = [template, this.withTemplate(template)];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          path = _ref1[_j];
          if (JST[lookup + path]) {
            return JST[lookup + path];
          }
        }
      }
    },
    withTemplate: function(string) {
      var array;
      array = string.split('/');
      array.splice(-1, 0, 'templates');
      return array.join('/');
    },
  });
});
