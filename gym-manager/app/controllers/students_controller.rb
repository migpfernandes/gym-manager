class StudentsController < ApplicationController
	def index
		respond_with Student.all
	end

	def create
		respond_with Student.create(student_params)
	end

	def update
    @student = Student.find params[:id]
    if @student.update(student_params)
      respond_with @student
    end
	end

	def show
		respond_with Student.find(params[:id])
	end

	def destroy
    @student = Student.find params[:id]
    @student.destroy
    respond_with {}
  end

	private
	def student_params
		params.require(:student).permit(:name,:idDocument,:birthDate,:height,:weight)
	end
end
