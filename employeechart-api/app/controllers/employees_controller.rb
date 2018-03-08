class EmployeesController < ActionController::API
	def index
		@employees = Employee.all
		render json: @employees
	end

	def create
		@employee = Employee.create(employee_params)
		render json: @employee
	end

	def update
		@employee = Employee.find(params[:id])
		@employee.update_attributes(employee_params)
		render json: @employee
	end

	private

	def employee_params
		params.require(:employee).permit(:first_name, :last_name, :title, :manager_id)
	end
end
