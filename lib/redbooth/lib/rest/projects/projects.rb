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
          result = []
          projects.each do |project|
            result << Project.new(project)
          end
          return result
        end
      end

    end
  end
end
