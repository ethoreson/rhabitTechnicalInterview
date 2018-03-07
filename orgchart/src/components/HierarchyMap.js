import React, { Component } from 'react'
import axios from 'axios'
import Employee from './Employee'

class HierarchyMap extends Component {

	constructor(props) {
		super(props)
		this.state = {
			employees: []
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
		console.log(response)
	})
	.catch(error => console.log(error))
}

	render() {
		return (
			<div>
				{this.state.employees.map((employee) => {
					return (<Employee employee={employee} key={employee.id} />)
				})}
				<button className="hireEmployee" onClick={this.hireNewEmployee}>
					Hire Employee
				</button>
			</div>
		);
	}
}

export default HierarchyMap