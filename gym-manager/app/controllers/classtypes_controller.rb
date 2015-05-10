class ClasstypesController < ApplicationController
	def index
		respond_with ClassType.all
	end
end
