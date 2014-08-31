RB.module('ProjectApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Project = App.Views.ItemView.extend({
    template: 'project/show/project',
    ui: {
      'modal'     : '.fade.modal',
      'btnDelete' : 'button#project-delete'
    },
    events: {
      'click @ui.btnDelete' : 'tryDelete'
    },
    timesClicked: 0,
    tryDelete: function() {
      this.timesClicked += 1;
      if (this.timesClicked === 2) {
        this.triggerMethod('project:delete');
      } else {
        this.$el.find('#delete-information').append("<i class='fa fa-info-circle'></i> To delete you have to click 2 times");
      }
    },
    openModal: function() {
      this.ui.modal.modal();
    },
    closeModal: function() {
      this.ui.modal.modal('hide');
    }
  })
})

