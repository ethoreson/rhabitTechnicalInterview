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
			editingEmployeeId: null
		}
	}

componentDidMount() {
  axios.get('http://localhost:3001/employees.json')
  .then(response => {
    console.log(response)
    this.setState({employees: response.data})
  })
  .catch( (error) => {
  	const response = error.response
	})
}

hireNewEmployee = () => {
	axios.post(
		'http://localhost:3001/employees',
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

	render() {
		return (
			<div>
				{this.state.employees.map((employee) => {
					if(this.state.editingEmployeeId === employee.id) {
						return(<EmployeeForm employee={employee} key={employee.id} />)
					} else {
						return (<Employee employee={employee} key={employee.id} />)
					}		
				})}
				<button className="hireEmployee" onClick={this.hireNewEmployee}>
					Hire Employee
				</button>
			</div>
		);
	}
}

export default HierarchyMap