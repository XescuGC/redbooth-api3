module Redbooth
  module Rest
    class Tasks < Util::RestObject
      PATH = '/tasks'

      class << self
        def all(options={})
          result = get(PATH, options)
          return _list_of_tasks(result)
        end

        def _list_of_tasks(tasks)
          return tasks.map{ |t| Task.new(t) }
        end
      end
    end
  end
end
