config_yml = YAML.load_file("#{Rails.root}/config/redbooth.yml")[Rails.env]
Redbooth.configure do |config|
  config.client_id      = config_yml['client_id']
  config.client_secret  = config_yml['client_secret']
  config.redirect_uri   = config_yml['redirect_uri']
end
