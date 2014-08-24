module Redbooth
  module Rest
    class Project
      attr_accessor :type, :created_at, :updated_at, :id, :permalink, :organization_id, :archived, :name, :description, :start_date, :end_date, :tracks_time, :public, :publish_pages, :settings, :deleted
      DATES = [:created_at, :updated_at, :start_date, :end_date]

      def initialize(options={})
        options.each do |k,v| 
          if DATES.include?(k)
            date = Time.at(v) if v
            send("#{k}=", date)
          else 
            send("#{k}=",v)
          end
        end
        self
      end

      def tasks
        return Tasks.all(query: {project_id: self.id})
      end
    end
  end
end
