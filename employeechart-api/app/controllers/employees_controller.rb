class EmployeesController < ActionController::API
	def index
		@employees = Employee.all
		render json: @employees
	end
end
