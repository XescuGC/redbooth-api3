require 'redbooth/lib/credentials'

module Redbooth
  class << self
    attr_accessor :credentials

    def configure
      self.credentials ||= Credentials.new
      yield(credentials)
    end
  end
end
