RB.module('HeaderApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var showView = this.getShowView();
      this.show(showView);
    },

    getShowView: function() {
      console.log(Show.Header);
      return new Show.Header;
    }
  });
});
