class ClasstypesController < ApplicationController
	def index
		respond_with Classtype.all
	end
end
