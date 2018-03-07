import React from 'react'

const Employee = ({employee}) =>
	<div className="chart" key={employee.id}>
		<h3>{employee.first_name} {employee.last_name}</h3>
		<h4 className="positionTitle">{employee.title}</h4>
	</div>

export default Employee