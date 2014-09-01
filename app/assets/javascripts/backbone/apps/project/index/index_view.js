RB.module('ProjectApp.Index', function(Index, App, Backbone, Marionette, $, _) {
  Index.Layout = App.Views.Layout.extend({
    template: 'project/index/layout',
    regions: {
      projectsListRegion: '#projects-list'
    }
  });

  Index.Project = App.Views.ItemView.extend({
    template: 'project/index/project',
    className: 'panel panel-default',
    ui: {
      'btnSeeMore'  : 'button.btn.see-more',
      'panelTitle' : '.panel-title'
    },
    events: {
      'click @ui.panelTitle' : 'progressBars'
    },
    triggers: {
      'click @ui.btnSeeMore'  : 'see:more'
    },
    templateHelpers: {
    },
    getPercentOfTotal: function(value) {
      if (this.total_tasks === 0) {
        return 0
      } else {
        return ((value/this.model.get('total_tasks')) * 100).toFixed(1)
      }
    },
    onRender: function() {
      this.fillProgressBars('.panel-title .progress .progress-bar');
    },
    progressBars: function() {
      this.fillProgressBars('.panel-body .progress .progress-bar');
    },
    fillProgressBars: function(selector) {
      var that = this;
      this.$el.find(selector).progressbar({
        display_text: 'fill',
        amount_format: function(p, t) {
          return p + ' ' + '(' + that.getPercentOfTotal(p)+ '%)';
        },
        use_percentage: false
      })
    }
  });

  Index.ProjectsList = App.Views.CollectionView.extend({
    className: 'panel-group',
    itemView: Index.Project,
    attributes: {
      'id': 'projects-accordion'
    }
  })
})
