import React, { Component } from 'react'
import axios from 'axios'

class EmployeeForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: this.props.employee.first_name,
			last_name: this.props.employee.last_name,
			title: this.props.employee.title,
			manager_id: this.props.employee.manager_id
		}
	}

	handleInput = (e) => {
		this.props.resetConfirmation()
		this.setState({[e.target.name]: e.target.value})
	}

	handleBlur = () => {
		const employee = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			title: this.state.title,
			manager_id: this.state.manager_id
		}
		axios.put(
			`http://localhost:3001/employees/${this.props.employee.id}`,
			{employee: employee}
		)
		.then(response => {
			console.log(response)
			this.props.updateEmployee(response.data)
		})
		.catch(error => console.log(error))
	}

	// handleSave = () => {
	// 	const employee = {
	// 		first_name: this.state.first_name,
	// 		last_name: this.state.last_name,
	// 		title: this.state.title,
	// 		manager_id: this.state.manager_id
	// 	}
	// 	axios.put('http://localhost:3001/employees/${this.props.employee.id}',
	// 	{employee: employee}
	// 	)
	// 	.then(response => {
	// 		console.log(response)
	// 		this.props.updateemployee(response.data)
	// 	})
	// 	.catch(error => console.log(error))
	// }

	render() {
		return (
			<div className="chart">
				<form onBlur={this.handleBlur}>
					<input className='input' type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleInput} ref={this.props.titleRef}/>
					<input className='input' type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleInput} />
					<input className='input' type='text' name='title' placeholder='Position Title' value={this.state.title} onChange={this.handleInput} />
					<input className='input' type='number' name='manager_id' placeholder='Manager' value={this.state.manager_id || ''} onChange={this.handleInput} />
				</form>
			</div>
		);
	}
}

export default EmployeeForm