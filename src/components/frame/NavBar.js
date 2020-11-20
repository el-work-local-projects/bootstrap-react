import React from 'react';
import styles from './FrameHeader.module.css';
import Form from 'react-bootstrap/Form';

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
			samewindow: false
		};
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
								<span className="mdi mdi-tab-plus" style={{marginRight: '4px'}}></span>
								<Form.Check type="switch" id="custom-switch" className="custom-control-input-warning"/>
								<span className="mdi mdi-tab-unselected"></span>
							</Form>		
						</li>
					</ul>
					<ul className="navbar-nav">
							{/*
						<frame-message-viewer></frame-message-viewer>
						*/}
						<li className="nav-item active dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
									>
								<span className="mdi mdi-help-circle"></span>
							</a>
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