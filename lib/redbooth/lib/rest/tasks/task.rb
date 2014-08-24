module Redbooth
  module Rest
    class Task
      include Redbooth::Util::ToHash
      attr_accessor :type, :created_at, :updated_at, :id, :name, :task_list_id, :comments_count, :assigned_id, :is_private, :project_id, :urgent, :user_id, :position, :last_activity_id, :record_conversion_type, :record_conversion_id, :metadata, :subtasks_count, :resolved_subtasks_count, :watcher_ids, :description, :description_html, :description_updated_by_user_id, :updated_by_id, :deleted, :status, :due_on
      DATES = [:created_at, :updated_at]

      def initialize(options={})
        options.each do |k,v| 
          if DATES.include?(k)
            date = Time.at(v) if v
            send("#{k}=", date)
          else 
            send("#{k}=",v)
          end
        end
        return self
      end
    end
  end
end
