import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img className="logo" src={require('./rhabit_logo.png')} alt="rhabit logo" />
				<h1 className="title">Organizational Chart</h1>
			</div>
		)
	}
}

export default Header
