module Redbooth
  module Rest
    class Authentication
      # Utils

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
          result = RestClient.post('https://redbooth.com/oauth2/token', arguments) do |response, request, result, &block|
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

      def refresh!
        #curl -X POST https://redbooth.com/oauth2/token -d 'client_id=APPLICATION_ID&client_secret=SECRET&refresh_token=REFRESH_TOKEN&grant_type=refresh_token&redirect_uri=http%3A%2F%2Fmysite.com%2Faut
      end

    end
  end
end
