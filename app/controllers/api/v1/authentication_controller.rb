class Api::V1::AuthenticationController < Api::BaseApiController

  def refresh
    authentication = Redbooth::Rest::Authentication.refresh
    cookies.signed[:rb_t] = {value: authentication.access_token, expires: authentication.expires_in.to_i.seconds.from_now}
    cookies.signed[:rb_r] = {value: authentication.refresh_token, expires: authentication.expires_in.to_i.seconds.from_now}
    render json: authentication, status: 200
  end

end
