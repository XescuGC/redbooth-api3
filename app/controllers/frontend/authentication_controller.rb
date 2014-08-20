class Frontend::AuthenticationController < Frontend::ApplicationController

  def auth_code
    authentication = Redbooth::Rest::Authentication.get_access_token(code: params[:code])
    cookies.signed[:rb_t] = {value: authentication.access_token, expires: authentication.expires_in.to_i.seconds.from_now}
    redirect_to :root
  end

end
