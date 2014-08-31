module RedboothWrapper
  class Projects
    class << self
      def all
        projects = Redbooth::Rest::Projects.all
        return projects.map{ |pr| _create_project(pr) }
      end

      def destroy(id)
        return Redbooth::Rest::Projects.delete(id);
      end

      def _create_project(project)
        tasks = project.tasks
        
        params = project.to_hash
        params.merge!({
          total_tasks:    tasks.count,
          private_tasks:  _count_attribute_for_tasks(:is_private, true, tasks),
          urgent_tasks:   _count_attribute_for_tasks(:urgent, true, tasks),
          deleted_tasks:  _count_attribute_for_tasks(:deleted, true, tasks),
          resolved_tasks: _count_attribute_for_tasks(:status, 'resolved', tasks),
          open_tasks:     _count_attribute_for_tasks(:status, 'open', tasks),
          new_tasks:      _count_attribute_for_tasks(:status, 'new', tasks),
          rejected_tasks: _count_attribute_for_tasks(:status, 'rejected', tasks),
          hold_tasks:     _count_attribute_for_tasks(:status, 'hold', tasks)
        })

        return Project.new(params)
      end

      def _count_attribute_for_tasks(attribute, expected, tasks)
        return tasks.find_all{|t| t.send(attribute) == expected}.count
      end
    end
  end
end
