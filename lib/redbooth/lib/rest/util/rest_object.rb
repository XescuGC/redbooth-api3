module Redbooth
  module Rest
    module Util
      class RestObject
        DEFAULTS = {
          origin: 'https://redbooth.com/api/3',
          auth:   nil
        }
        class << self
          [:get, :delete].each do |method|
            define_method method do |path, options|
              resource = RestClient::Resource.new(_full_url(path, options[:query]))
              result = resource.send(method, _headers) do |response, request, result, &block|
                response
              end
              return JSON.parse(result, symbolize_names: true) rescue true
            end
          end

          def _full_url(path, query)
            url = DEFAULTS[:origin] + path
            url = url + '?' + query.to_query if query
            return url
          end

          def _headers
            return {
              Authorization:      "Bearer #{DEFAULTS[:auth]}",
              "Content-type" =>   'application/x-www-form-urlencoded',
              Accept:             'application/json'
            }
          end
        end
      end
    end
  end
end
