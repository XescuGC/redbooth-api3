module Redbooth
  module Rest
    class Authentication
      DEFAULTS = {
        url: 'https://redbooth.com/oauth2/token',
        refresh: nil
      }
      URL = 

      attr_accessor :access_token, :token_type, :expires_in, :scope, :refresh_token

      class << self
        def get_access_token(options={})
          arguments = {
            client_id:      Redbooth.credentials.client_id,
            client_secret:  Redbooth.credentials.client_secret,
            code:           options[:code],
            grant_type:     'authorization_code',
            redirect_uri:   Redbooth.credentials.redirect_uri
          }
          result = RestClient.post(DEFAULTS[:url], arguments) do |response, request, result, &block|
            Rails.logger.warn("***** AUTH => #{response.code}: #{response}")
            response
          end
          result = JSON.parse(result)
          return Authentication.new(result)
        end
        def refresh
          arguments = {
            client_id:      Redbooth.credentials.client_id,
            client_secret:  Redbooth.credentials.client_secret,
            redirect_uri:   Redbooth.credentials.redirect_uri,
            grant_type:     'refresh_token',
            refresh_token:  DEFAULTS[:refresh]
 
          }
          result = RestClient.post(DEFAULTS[:url], arguments) do |response, request, result, &block|
            Rails.logger.warn("***** AUTH => #{response.code}: #{response}")
            response
          end
          result = JSON.parse(result)
          return Authentication.new(result)
        end
      end

      def initialize(options={})
        options.each {|k,v| send("#{k}=",v)}
        self
      end


    end
  end
end
