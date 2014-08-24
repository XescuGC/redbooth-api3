require 'redbooth/lib/credentials'
require 'redbooth/lib/rest/util/rest_object'
require 'redbooth/lib/rest/auth/authentication'

module Redbooth
  class << self
    attr_accessor :credentials

    def configure
      self.credentials ||= Credentials.new
      yield(credentials)
    end
  end
end
