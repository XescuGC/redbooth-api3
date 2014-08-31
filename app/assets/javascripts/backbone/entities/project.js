RB.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
  var API;

  Entities.Project = Entities.Model.extend({
  });

  Entities.ProjectsCollection = Entities.Collection.extend({
    urlPath: '/projects',
    model: Entities.Project
  });

  API = {
    getProjects: function() {
      var defer = $.Deferred();
      var projects = new Entities.ProjectsCollection();

      projects.fetch({
        success: function(data) {
          defer.resolve(data);
        }
      });

      return defer.promise();
    }
  };

  App.reqres.setHandler('project:entities', function() {
    return API.getProjects();
  });

})
