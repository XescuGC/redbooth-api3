module Redbooth
  module Rest
    class Projects < Util::RestObject
      PATH = '/projects'

      class << self
        def all(options={})
          result = get(PATH, options)
          return _list_of_projects(result)
        end

        def _list_of_projects(projects)
          return projects.map{ |pr| Project.new(pr) }
        end

        def delete(id, options={})
          path = PATH + '/' + id
          result = super(path, options)
        end
      end

    end
  end
end
