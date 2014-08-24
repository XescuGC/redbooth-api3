require 'redbooth/lib/credentials'
require 'redbooth/lib/rest/util/rest_object'
require 'redbooth/lib/rest/auth/authentication'
require 'redbooth/lib/rest/projects/projects'
require 'redbooth/lib/rest/projects/project'

module Redbooth
  class << self
    attr_accessor :credentials

    def configure
      self.credentials ||= Credentials.new
      yield(credentials)
    end
  end
end
