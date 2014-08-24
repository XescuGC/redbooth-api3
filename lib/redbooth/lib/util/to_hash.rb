module Redbooth
  module Util
    module ToHash
      def to_hash
        return instance_variables.inject({}) { |hash, var| hash[var.to_s.delete('@')] = instance_variable_get(var); hash }
      end
    end
  end
end
