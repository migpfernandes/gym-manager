class WorkgroupsController < ApplicationController
	def index
		respond_with Workgroup.all
	end

	def create
		respond_with Workgroup.create(workgroup_params)
	end

	def update
    @workgroup = Workgroup.find params[:id]
    if @workgroup.update(workgroup_params)
      respond_with @workgroup
    end
	end

	def show
		respond_with Workgroup.find(params[:id])
	end

	def destroy
    @workgroup = Workgroup.find params[:id]
    @workgroup.destroy
    respond_with {}
  end

	private
	def workgroup_params
		params.require(:trainer).permit(:name,:idDocument)
	end	

end
