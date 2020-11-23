import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class FrameMessageViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
			]
		};
	}
	
	groupMessages() {
		let grouped = {};
		for (let msg of this.state.messages) {
			for (let app of msg.applications) {
				if (!grouped[app]) {
					grouped[app] = [];
				}
				grouped[app].push(msg);
			}
		}
		return grouped;
	}
	
	deleteMessage(msg) {
		let messages = this.state.messages;
		messages.splice(messages.indexOf(msg), 1);
		this.setState({messages: messages});
	}
	
	undoDismissals() {
		this.setState({
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
			]
		});
	}
	
	buildAlertContent(msg) {
		return (
			<Alert key={msg.message} variant={msg.type} dismissible onClose={(e) => this.deleteMessage(msg, e)}>
				{msg.message}
			</Alert>
		);
	}
	
	render() {
		const apps = Object.entries(this.groupMessages()).map(([app, msgs]) => (
			<div key={app}>
				<h5>{app}</h5>
				<hr/>
				{
					msgs.map((msg) => this.buildAlertContent(msg))
				}
			</div>
		));
		
		return (
			<Modal show={this.props.show} onHide={this.props.handleClose}>
				<Modal.Header closeButton>
				  <Modal.Title>CAFE Messages</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{apps}
				</Modal.Body>
				<Modal.Footer>
				  <Button variant="secondary" block onClick={() => this.undoDismissals()}>
					  Undo Dismissals
				  </Button>
				</Modal.Footer>
			</Modal>
		  );
	}
}

export default FrameMessageViewer;