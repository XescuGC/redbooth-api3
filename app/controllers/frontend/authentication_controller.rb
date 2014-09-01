class Frontend::AuthenticationController < Frontend::ApplicationController

  def auth_code
    if params[:error]
      flash[:danger] = 'You cancelled the Login, if you want to access you should accept, we won\'t save your information'
      redirect_to :user_login
    else
      authentication = Redbooth::Rest::Authentication.get_access_token(code: params[:code])
      cookies.signed[:rb_t] = {value: authentication.access_token, expires: authentication.expires_in.to_i.seconds.from_now}
      cookies.signed[:rb_r] = {value: authentication.refresh_token, expires: authentication.expires_in.to_i.seconds.from_now}
      redirect_to :root
    end
  end

end
