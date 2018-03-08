import React, { Component } from 'react'

class Employee extends Component {

	handleClick = () => {
		this.props.onClick(this.props.employee.id)
	}

	render () {
		return(
			<div className="chart">
				<h3 className="fullName" onClick={this.handleClick}>{this.props.employee.first_name}</h3>
				<h3 className="fullName" onClick={this.handleClick}>{this.props.employee.last_name}</h3>
				<h4 className="positionTitle" onClick={this.handleClick}>{this.props.employee.title}</h4>
			</div>
		)
	}
}

export default Employee