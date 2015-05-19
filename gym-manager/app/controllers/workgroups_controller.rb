class WorkgroupsController < ApplicationController
	def index
		respond_with Workgroup.all
	end

	def create
		@workgroup = Workgroup.new workgroup_params
		setTrainers()
		setStudents()
    @workgroup.save
		respond_with @workgroup
	end

	def update
    @workgroup = Workgroup.find params[:id]
    setTrainers()
    setStudents()
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
		params.require(:workgroup).permit(:name, :classtype_id)
	end	

	def setTrainers()
    @workgroup.trainers.clear()
    if (params[:trainers])
    	params[:trainers].each do |item|
  			@workgroup.trainers << Trainer.find(item["id"])
			end
    end
	end

	def setStudents()
    @workgroup.students.clear()
    if (params[:students])
    	params[:students].each do |item|
  			@workgroup.students << Student.find(item["id"])
			end
    end
	end	
end
