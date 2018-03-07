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

	render() {
		return (
			<div>
				{this.state.employees.map((employee) => {
					return (<Employee employee={employee} key={employee.id} />)
				})}
			</div>
		);
	}
}

export default HierarchyMap