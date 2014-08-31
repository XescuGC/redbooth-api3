RB.module('Regions', function(Regions, App, Backbone, Marioneter, $, _){
  Regions.Dialog = Marionette.Region.extend({
    onShow: function(view) {
      this.setupBindings(view);

      this.current_view = view;

      return this.openDialog();
    },

    setupBindings: function(view) {
      return this.listenTo(view, 'hide.bs.modal', this.close);
    },

    openDialog: function(options){
      options || (options = {});
      var that = this;

      this.$el.on('show.bs.modal',            function(){ console.log('open')  });
      this.$el.on('hide.bs.modal',            function(){ console.log('close') });

      console.log(this);
      this.current_view.openModal()

      this.$el.on('hide.bs.modal', function(){
        that.close();
      });
    },

    getTitle: function(options){
      _.result(options, 'title');
    },

    onClose: function(){
      this.$el.off();

      this.stopListening();
    },
  });
});
