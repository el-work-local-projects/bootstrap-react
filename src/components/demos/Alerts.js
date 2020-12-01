import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Toast from 'react-bootstrap/Toast';

class Alerts extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			types: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
			dismissID: 2,
			dismissAlerts: [{id: 1}],
			dismissalAlert: {id: 1, show: true, variant: 'danger', text: 'Alert without auto dismissal'},
			showStatic: false,
			toastCount: 0,
			toasts: []
		};
		this.addDismissableAlert = this.addDismissableAlert.bind(this);
		this.showDismissalAlert = this.showDismissalAlert.bind(this);
		this.dismissAlert = this.dismissAlert.bind(this);
		this.addToast = this.addToast.bind(this);
	}
	
	addDismissableAlert() {
		let tempAlerts = this.state.dismissAlerts;
		tempAlerts.push({id: this.state.dismissID});
		this.setState({
			dismissID: this.state.dismissID + 1,
			dismissAlerts: tempAlerts
		});
	}
	
	showDismissalAlert() {
		let alert = this.state.dismissalAlert;
		alert.show = true;
		this.setState({dismissalAlert: alert});
	}
	
	dismissAlert() {
		let alert = this.state.dismissalAlert;
		alert.show = false;
		this.setState({dismissalAlert: alert});
	}
	
	addToast(sticky) {
		let id = this.state.toastCount;
		let tempToasts = this.state.toasts;
		tempToasts.push({id: id++, sticky: sticky});
		this.setState({
			toastCount: id,
			toasts: tempToasts
		});
	}
	
	dismissToast(id) {
		let tempToasts = this.state.toasts;
		let rem = -1;
		for (var i = 0; i < tempToasts.length; i++) {
			if (tempToasts[i].id === id) {
				rem = i;
				break;
			}
		}
		if (rem > -1) {
			tempToasts.splice(rem, 1);
			this.setState({toasts: tempToasts});
		}
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<h5>Styles</h5>
					{this.state.types.map(type => (
						<div key={type} className={`alert ${'alert-' + type}`} role="alert">
							Alert of type {type} with a <a className="alert-link" href="#">link</a>
						</div>
					))}
				</div>
				<div className="col">
					<h5>Dismissable</h5>
					<button type="button" className="btn btn-secondary" onClick={this.addDismissableAlert}>Summon Another</button>
					{this.state.dismissAlerts.map(alert => (
						<div key={alert.id} className="alert alert-primary alert-dismissible fade show" role="alert">
							Button to dismiss
							<button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
						</div>
					))}
					
					<h5>Component Alerts</h5>
					<h6>Normal</h6>
					<Alert variant="primary">Normal Alert</Alert>
					<Alert variant="success">Normal Alert</Alert>
					
					<h6>Dismissible</h6>
					<button type="button" className="btn btn-secondary" onClick={this.showDismissalAlert}>Show Dismissal Alert</button>
					{this.state.dismissalAlert.show &&
						(<Alert variant={this.state.dismissalAlert.variant} dismissible onClose={this.dismissAlert}>
							{this.state.dismissalAlert.text}
						</Alert>)
					}
				</div>
				<div className="col">
					<h5>Toasts</h5>
					<div className="toast fade show" role="alert">
						<div className="toast-header">
							<strong>Toast</strong>
							<button type="button" className="close" data-dismiss="toast">
								<span>&times;</span>
							</button>
						</div>
						<div className="toast-body">
							This is a toast.
						</div>
					</div>
					
					<h5>Component Toasts</h5>
					{/* Disappointed that I need to build my own toaster */}
					{/* Also lacking variants */}
					<button type="button" className="btn btn-secondary mr-2" onClick={(e)=>this.addToast(false)}>Add Toast</button>
					<button type="button" className="btn btn-secondary mr-2" onClick={(e)=>this.addToast(true)}>Add Toast (Sticky)</button>
					<div style={{position: 'fixed', bottom: 0, left: 0, zIndex: 9999}}>
					{this.state.toasts.map(toast => (
						<Toast key={toast.id} autohide={!toast.sticky} onClose={(e)=>this.dismissToast(toast.id)}>
							<Toast.Header>
								Component Toast
							</Toast.Header>
						  <Toast.Body>This is a placed toast.</Toast.Body>
						</Toast>
					))}
					</div>
				</div>
			</div>
		);
	}
}

export default Alerts;
