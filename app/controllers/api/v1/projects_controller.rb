class Api::V1::ProjectsController < Api::BaseApiController

  def index
    render json: RedboothWrapper::Projects.all, status: 200
  end

  def destroy
    RedboothWrapper::Projects.destroy(params[:id])
    render json: {}, status: 204
  end

end
