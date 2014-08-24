module RedboothWrapper
  class Project
    attr_accessor :type, :created_at, :updated_at, :id, :permalink, :organization_id, :archived, :name, :description, :start_date, :end_date, :tracks_time, :public, :publish_pages, :settings, :deleted,
      :total_tasks, :private_tasks, :urgent_tasks, :deleted_tasks, :resolved_tasks, :open_tasks, :new_tasks, :rejected_tasks, :hold_tasks

    def initialize(options={})
      options.each do |k,v| 
        if v.class == Time
          send("#{k}=",v.iso8601)
        else
          send("#{k}=",v)
        end
      end
      return self
    end
  end
end
