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
    templateHelpers: {
      getPercentOfTotal: function(value) {
        if (this.total_tasks === 0) {
          return 0
        } else {
          return ((value/this.total_tasks) * 100).toFixed(1)
        }
      }
    },
    onRender: function() {
      var that = this;
      that.$el.find('.panel-title .progress .progress-bar').progressbar({
        display_text: 'fill',
        percent_format: function(p) {
          return p;
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
