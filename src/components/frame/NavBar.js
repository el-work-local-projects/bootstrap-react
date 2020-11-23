import React from 'react';
import styles from './FrameHeader.module.css';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import FrameMessageViewer from './FrameMessageViewer';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'dummy'
			},
			apps: [
				'ACE Viewer',
				'PCC Operating Report',
				'OASIS Administrator',
				'Shift Log'
			],
			messages: [
				{
					type: 'info',
					message: 'Test message 1',
					applications: [
						'EOS Viewer',
						'Shift Log'
					]
				},
				{
					type: 'success',
					message: 'Test message 2',
					applications: [
						'CAFE'
					]
				}
			],
			samewindow: false,
			showMessages: false
		};
		this.closeMessages = this.closeMessages.bind(this);
	}
	
	closeMessages() {
		this.setState({showMessages: false});
	}
	
	render() {
		const appLinks = this.state.apps.map((app) =>
			<a className="dropdown-item" href="#" key={app}>{app}</a>
		);
		
		return (
			<nav className={`${styles.header} navbar navbar-expand-sm navbar-dark bg-primary`}>
				<a className="navbar-brand" href="#"><span className="mdi mdi-coffee"></span> EMS CAFE</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item dropdown">
							<a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Application
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								{appLinks}
							</div>
						</li>
						<li className={`${styles.centered} nav-item`}>
							<Form inline className="text-light">
								<OverlayTrigger placement="bottom" overlay={
									<Tooltip>New Tab</Tooltip>
								}>
									<span className="mdi mdi-tab-plus" style={{marginRight: '4px'}}></span>
								</OverlayTrigger>
								<Form.Check type="switch" id="custom-switch" className="custom-control-input-warning"/>
								<OverlayTrigger placement="bottom" overlay={
									<Tooltip>Same Tab</Tooltip>
								}>
									<span className="mdi mdi-tab-unselected"></span>
								</OverlayTrigger>
							</Form>		
						</li>
					</ul>
					<ul className="navbar-nav">
						<OverlayTrigger placement="bottom" overlay={
							<Tooltip>Messages</Tooltip>
						}>
							<li className="nav-item active">
								<a className="nav-link pr-0" role="button" onClick={() => this.setState({showMessages: true})}>
									<span className="mdi mdi-message" style={{'fontSize': '18px'}}></span>
									<span style={{position: 'relative', left: '-6px', top: '6px'}} 
											className={`badge ${this.state.messages.length === 0 ? '' : 'badge-' + this.state.messages[0].type}`}>{this.state.messages.length}</span>
								</a>
							</li>						
						</OverlayTrigger>
						<FrameMessageViewer show={this.state.showMessages} handleClose={this.closeMessages}/>
						<li className="nav-item active dropdown">
							<OverlayTrigger placement="bottom" overlay={
								<Tooltip>Help</Tooltip>
							}>
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="mdi mdi-help-circle"></span>
								</a>
							</OverlayTrigger>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">CAFE User Guide</a>
								<a className="dropdown-item" href="#">Application User Guide</a>
								<a className="dropdown-item" href="#">CAFE Administration Guide</a>
								<a className="dropdown-item" href="#">Application Administration Guide</a>
							</div>
						</li>
						<li className="nav-item active dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span className="mdi mdi-account"></span> {this.state.user.name}
							</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">Log out</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;