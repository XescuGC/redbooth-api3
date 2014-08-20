class Frontend::HomeController < Frontend::ApplicationController

  def show
    redirect_to :login_user unless cookies.signed[:rb_t]
  end

end
