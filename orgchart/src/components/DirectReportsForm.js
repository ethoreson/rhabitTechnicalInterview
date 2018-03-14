// import React, { Component } from 'react'
// import axios from 'axios'

// class DirectReportsFrom extends Component {

// 	constructor(props) {
// 		super(props)
// 	}

// 	handleSubmit = () => {
// 		axios.get(`http://localhost:3001/employees/${this.props.employee.id}`)
// 		.then(response => {
// 			console.log(response)
// 		})
// 		.catch(error => console.log(error))
// 	}

// 	createManagerOptions() {
// 		const employeeNames = []
// 		console.log(this.props)
// 		for (let i = this.props.employees.length - 1; i >= this.props.employees.length; i--) {
// 			employeeNames.push(<option key={i} value={this.props.employee.i}>{this.props.employee.first_name} {this.props.employee.last_name}</option>)
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className="findDirectReportsForm">
// 				<h2>Select an employee to see who directly reports to them:</h2>
// 				<form onSubmit={this.handleSubmit}>
// 					<formControl componentClass="select">
// 						<option value=''>Select an Employee:</option>
// 						{this.createManagerOptions()}
// 					</formControl>
// 					<button>Find</button>
// 				</form>
// 			</div>
// 		)
// 	}

// }

// export default DirectReportsFrom