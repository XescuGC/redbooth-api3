class Api::V1::ProjectsController < Api::BaseApiController

  def index
    render json: RedboothWrapper::Projects.all, status: 200
  end

end
