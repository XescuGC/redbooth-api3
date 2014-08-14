RB.module('Controllers', function(Controllers, App, Backbone, Marionette, $, _) {
  Controllers.Application = Marionette.Controller.extend({

      constructor: function (options) {
        if (options == null) {
          options = {};
        }
        this.region = options.region || App.request('default:region');
        Marionette.Controller.prototype.constructor.call(this, options);
        this._instance_id = _.uniqueId('controller');
        return App.execute('register:instance', this, this._instance_id);
      },

      close: function() {
        console.log('closing', this);
        App.execute('unregister:instance', this, this._instance_id);
        return Marionette.Controller.prototype.close.apply(this, arguments);
      },

      show: function(view, options) {
        var _ref;
        if (options == null) {
          options = {};
        }
        _.defaults(options, {
          loading: false,
          region: this.region
        });
        view = view.getMainView ? view.getMainView() : view;
        if (!view) {
          throw new Error('getMainView() did not return a view instance or is not a view instance');
        }
        this.setMainView(view);
        return this._manageView(view, options);
      },

      getMainView: function() {
        return this._mainView;
      },

      setMainView: function(view) {
        if (this._mainView) {
          return;
        }
        this._mainView = view;
        return this.listenTo(view, 'close', this.close);
      },

      _manageView: function(view, options) {
        // if (options.loading) {
        //   return App.execute('show:loading', view, options);
        // } else if (options.preventClose){
        //   return options.region.show(view, {preventClose: true});
        // } else{
        return options.region.show(view);
        // }
      },
  });
});
