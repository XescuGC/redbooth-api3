require 'redbooth/lib/util/to_hash'
require 'redbooth/lib/credentials'
require 'redbooth/lib/rest/util/rest_object'
require 'redbooth/lib/rest/auth/authentication'
require 'redbooth/lib/rest/projects/projects'
require 'redbooth/lib/rest/projects/project'
require 'redbooth/lib/rest/tasks/tasks'
require 'redbooth/lib/rest/tasks/task'

module Redbooth
  class << self
    attr_accessor :credentials

    def configure
      self.credentials ||= Credentials.new
      yield(credentials)
    end
  end
end
