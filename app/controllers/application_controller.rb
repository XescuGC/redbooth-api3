class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_auth

  def set_auth
    Rails.logger.warn("COOKIE: #{cookies.signed[:rb_t]}")
    Redbooth::Rest::Util::RestObject::DEFAULTS[:auth] = cookies.signed[:rb_t]
    Redbooth::Rest::Authentication::DEFAULTS[:refresh] = cookies.signed[:rb_r]
  end
end
