import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

class Dialogs extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			show: {
				modal1: false,
				modal2: false,
				closelimit: false,
				small: false,
				large: false,
				scroll: false
			},
			name: '',
			nameState: false,
			placements: ['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']
		};
		this.showModal = this.showModal.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	
	showModal(id) {
		let show = this.state.show;
		show[id] = true;
		this.setState({show: show, name: ''});
	}
	
	submitForm() {
		let valid = this.state.name.length > 0;
		this.setState({nameState: valid});
		if (valid) {
			this.closeModal('closelimit');
		}
	}
	
	closeModal(id) {
		let show = this.state.show;
		show[id] = false;
		this.setState({show: show});
	}
	
	render() {
		let nums = [];
		for (var i = 0; i < 30; i++) {
			nums.push(i);
		}
		let repeatContent = nums.map(n=>(
			<p>Text goes here</p>
		));
		
		return (
			<div class="row">
				<div class="col">
					<h5>Modals</h5>
					<div class="row">
						<div class="col-3">
							<h6>Native</h6>
							<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open Modal</button>
							<div id="exampleModal" class="modal fade" role="dialog" tabindex="-1">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Title</h5>
											<button type="button" class="close" data-dismiss="modal">
												<span>&times;</span>
											</button>
										</div>
										<div class="modal-body">
											<p>Body</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-primary">Okay</button>
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-9">
							<h6>Component</h6>
							<button class="btn btn-secondary" onClick={(e)=>(this.showModal('modal1'))}>Open Modal</button>
							<Modal show={this.state.show.modal1} onHide={e=>this.closeModal('modal1')}>
								<Modal.Header closeButton>
									<Modal.Title>Component Modal First Layer</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<p>First layer modal</p>
									<button className="btn btn-secondary" onClick={(e)=>(this.showModal('modal2'))}>Open Modal</button>
								</Modal.Body>
							</Modal>
							<Modal show={this.state.show.modal2} onHide={e=>this.closeModal('modal2')}>
								<Modal.Header closeButton>
									<Modal.Title>Component Modal Second Layer</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<p>Second layer modal</p>
								</Modal.Body>
							</Modal>
														
							<button class="btn btn-secondary ml-1" onClick={(e)=>(this.showModal('closelimit'))}>Limited Close</button>
							<Modal show={this.state.show.closelimit} onHide={e=>this.closeModal('closelimit')} backdrop="static" keyboard={false}>
								<Modal.Header closeButton>
									<Modal.Title>Validated Closure</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form ref="validatedForm" noValidate validated={this.state.nameState} onSubmit={this.submitForm}>
										<Form.Group controlId="formBasicEmail">
											<Form.Control type="text" placeholder="Name required" value={this.state.name} onChange={(e) => this.setState({name: e.currentTarget.value})} required/>
											<Form.Control.Feedback type="invalid">
												Name required
											</Form.Control.Feedback>
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="primary" onClick={e=>this.submitForm()}>
										Submit
									</Button>
									<Button variant="secondary" onClick={e=>this.closeModal('closelimit')}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
							
							<button class="btn btn-secondary ml-1" onClick={(e)=>(this.showModal('large'))}>LG</button>
							<Modal show={this.state.show.large} onHide={e=>this.closeModal('large')}>
								<Modal.Header closeButton>
									<Modal.Title>Large</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<p>Content</p>
								</Modal.Body>
							</Modal>
							
							<button class="btn btn-secondary ml-1" onClick={(e)=>(this.showModal('small'))}>SM</button>
							<Modal show={this.state.show.small} onHide={e=>this.closeModal('small')}>
								<Modal.Header closeButton>
									<Modal.Title>Small</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<p>Content</p>
								</Modal.Body>
							</Modal>
							
							<button class="btn btn-secondary ml-1" onClick={(e)=>(this.showModal('scroll'))}>Scrollable</button>
							<Modal show={this.state.show.scroll} onHide={e=>this.closeModal('scroll')}>
								<Modal.Header closeButton>
									<Modal.Title>Scrollable</Modal.Title>
								</Modal.Header>
								<Modal.Body>
								{repeatContent}
								</Modal.Body>
							</Modal>
						</div>
					</div>
					<h5>Tooltips</h5>
					<div class="row">
						<div class="col">
							<h6>Component</h6>
							<div class="row mb-1">
								<div class="col">
								{this.state.placements.map(placement => (
									<OverlayTrigger
									  key={placement}
									  placement={placement}
									  overlay={
										<Tooltip id={`tooltip-${placement}`}>
										  Tooltip
										</Tooltip>
									  }
									>
									  <button class="btn btn-sm btn-secondary">Tip: {placement}</button>
									</OverlayTrigger>
								))}
								</div>
							</div>
						</div>
					</div>
					<h5>Popovers</h5>
					<div class="row">
						<div class="col">
							<h6>Component</h6>
							<div class="row mb-1">
								<div class="col">
								{this.state.placements.map(placement => (
									<OverlayTrigger
									  key={placement}
									  placement={placement}
									  trigger="click"
									  overlay={
										<Popover id={`popover-positioned-${placement}`}>
											<Popover.Title as="h3">Title</Popover.Title>
											<Popover.Content>
												Content
											</Popover.Content>
										</Popover>
									  }
									>
									  <button class="btn btn-sm btn-secondary">Popover: {placement}</button>
									</OverlayTrigger>
								))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dialogs;
