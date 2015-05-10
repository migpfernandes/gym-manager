class TrainersController < ApplicationController
	def index
		respond_with Trainer.all
	end

	def create
		respond_with Trainer.create(trainer_params)
	end

	def update
    @trainer = Trainer.find params[:id]
    if @trainer.update(trainer_params)
      respond_with @trainer
    end
	end

	def show
		respond_with Trainer.find(params[:id])
	end

	def destroy
    @trainer = Trainer.find params[:id]
    @trainer.destroy
    respond_with {}
  end

	private
	def trainer_params
		params.require(:trainer).permit(:name,:idDocument)
	end	
end
