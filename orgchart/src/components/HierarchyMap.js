import React, { Component } from 'react'
import axios from 'axios'
import Employee from './Employee'
import update from 'immutability-helper'
import EmployeeForm from './EmployeeForm'

class HierarchyMap extends Component {

	constructor(props) {
		super(props)
		this.state = {
			employees: [],
			editingEmployeeId: null,
			notification: ''
		}
	}

componentDidMount() {
  axios.get(`http://localhost:3001/employees.json`)
  .then(response => {
    console.log(response)
    this.setState({employees: response.data})
  })
  .catch(error => console.log(error))
}

hireNewEmployee = () => {
	axios.post(
		`http://localhost:3001/employees`,
		{ employee:
			{
				first_name: '',
				last_name: '',
				title: '',
				manager_id: ''
			}
		}
	)
	.then(response => {
		const employees = update(this.state.employees, {
			$splice: [[this.state.employees.length, 0, response.data]]
		})
	this.setState({employees: employees, editingEmployeeId: response.data.id})
	})
	.catch(error => console.log(error))
}

updateEmployee = (employee) => {
	const employeeIndex = this.state.employees.findIndex(x => x.id === employee.id)
	const employees = update(this.state.employees, {
		[employeeIndex]: { $set: employee }
	})
	this.setState({employees: employees, notification: 'Employee Added!'})
}

resetConfirmation = () => {
	this.setState({notification: ''})
}

	render() {
		return (
			<div>
				{this.state.employees.map((employee) => {
					if(this.state.editingEmployeeId === employee.id) {
						return(<EmployeeForm employee={employee} key={employee.id} updateEmployee={this.updateEmployee} resetConfirmation={this.resetConfirmation}/>)
					} else {
						return (<Employee employee={employee} key={employee.id} />)
					}		
				})}
				<button className="hireEmployee" onClick={this.hireNewEmployee}>
					Hire Employee
				</button>
				<span className="confirmation">
					{this.state.notification}
				</span>
			</div>
		);
	}
}

export default HierarchyMap