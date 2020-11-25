import React from 'react';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Buttons extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			btnsDisabled: false,
			buttonTypes: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
			buttonSizes: ['-sm', '', '-lg'],
			btnToggle: false,
			btnRadio: '',
			btnCbSelected: [],
			options: [
				{text: 'Left', value: 'left'},
				{text: 'Middle', value: 'middle'},
				{text: 'Right', value: 'right'}
			]
		};
		this.updateButtonStatus = this.updateButtonStatus.bind(this);
	}
	
	updateButtonStatus(e) {
		this.setState({btnsDisabled: e.currentTarget.checked});
	}
	
	render() {
		const headers = this.state.buttonTypes.map((type) => (
			<th key={type}>{type}</th>
		));
		
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col">
							<Form.Check type="switch" id="disableSwitch" label="Disable buttons" checked={this.state.btnsDisabled}
										onChange={this.updateButtonStatus}/>
							<div className="table-responsive">
								<table className="table table-bordered table-striped">
									<thead className="thead-dark">
									<tr>
										<th></th>
										{headers}
									</tr>
									</thead>
									<tbody>
									{this.state.buttonSizes.map((size) => (
										<tr key={size}>
											<th>{size}</th>
											{this.state.buttonTypes.map((type) => (
												<td key={type}>
													<button type="button" className={`btn ${'btn-' + type} ${'btn' + size} ${this.state.btnsDisabled ? 'disabled' : ''}`}>Button</button>
												</td>
											))}
										</tr>
									))}
									</tbody>
								</table>
							</div>
							<div className="table-responsive">
								<table className="table table-bordered">
									<thead className="thead-dark">
									<tr>
										<th></th>
										{headers}
									</tr>
									</thead>
									<tbody>
									<tr>
										<th>outline</th>
										{this.state.buttonTypes.map((type) => (
											<td key={type}>
												<button type="button" className={`btn ${'btn-outline-' + type} ${this.state.btnsDisabled ? 'disabled' : ''}`}>Button</button>
											</td>
										))}
									</tr>
									<tr>
										<th>dropdown</th>
										{this.state.buttonTypes.map((type) => (
											<td key={type}>
												<div className="btn-group">
													<button className={`btn dropdown-toggle ${'btn-' + type} ${this.state.btnsDisabled ? 'disabled' : ''}`} data-toggle="dropdown">Button</button>
													<div className="dropdown-menu">
														<a className="dropdown-item">Action</a>
														<a className="dropdown-item">Action 2</a>
														<a className="dropdown-item">Action 3</a>
														<div className="dropdown-divider"></div>
														<a className="dropdown-item">Separated</a>
													</div>
												</div>
											</td>
										))}
									</tr>
									<tr>
										<th>combo</th>
										{this.state.buttonTypes.map((type) => (
											<td key={type}>
												<div className="btn-group">
													<button type="button" className={`btn ${'btn-' + type} ${this.state.btnsDisabled ? 'disabled' : ''}`}>Button</button>
													<button className={`btn dropdown-toggle dropdown-toggle-split ${'btn-' + type} ${this.state.btnsDisabled ? 'disabled' : ''}`} data-toggle="dropdown"></button>
													<div className="dropdown-menu">
														<a className="dropdown-item">Action</a>
														<a className="dropdown-item">Action 2</a>
														<a className="dropdown-item">Action 3</a>
														<div className="dropdown-divider"></div>
														<a className="dropdown-item">Separated</a>
													</div>
												</div>
											</td>
										))}
									</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h4>Block Button</h4>
							<button className="btn btn-secondary btn-block">Button</button>
							
							<h4>Button Groups</h4>
							<div className="btn-toolbar">
								<div className="btn-group mr-2">
									<a className="btn btn-secondary">1</a>
									<a className="btn btn-secondary">2</a>
									<a className="btn btn-secondary">3</a>
									<a className="btn btn-secondary">4</a>
								</div>
								<div className="btn-group mr-2">
									<a className="btn btn-secondary">5</a>
									<a className="btn btn-secondary">6</a>
									<a className="btn btn-secondary">7</a>
								</div>
								<div className="btn-group">
									<a className="btn btn-secondary">8</a>
									<div className="btn-group">
										<a className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
										<div className="dropdown-menu">
												<a className="dropdown-item">Action</a>
												<a className="dropdown-item">Action 2</a>
												<a className="dropdown-item">Action 3</a>
												<div className="dropdown-divider"></div>
												<a className="dropdown-item">Separated</a>
											</div>
									</div>
								</div>
							</div>
							
							<h4>Justified Group (Manual Setup)</h4>
							<div className="btn-group d-flex">
								<a className="btn btn-secondary">Left</a>
								<a className="btn btn-secondary">Middle</a>
								<a className="btn btn-secondary">Right</a>
							</div>
							
							<h4>Vertical Group</h4>
							<div className="btn-group-vertical">
								<a className="btn btn-secondary">1</a>
								<a className="btn btn-secondary">2</a>
								<a className="btn btn-secondary">3</a>
								<a className="btn btn-secondary">4</a>
							</div>
						</div>
						<div className="col">
							<h4>Toggle Button</h4>
							<ButtonGroup toggle>
								<ToggleButton type="checkbox" variant="secondary" checked={this.state.btnToggle} 
											onChange={(e) => this.setState({btnToggle: e.currentTarget.checked})}>Toggle</ToggleButton>
							</ButtonGroup>
										
							<h4>Radio Buttons</h4>
							<ButtonGroup toggle>
								{this.state.options.map((opt) => (
									<ToggleButton key={opt.value} type="radio" variant="secondary" name="radio" value={opt.value} checked={this.state.btnRadio === opt.value}
											onChange={(e) => this.setState({btnRadio: e.currentTarget.value})}>
												{opt.text}
									</ToggleButton>
								))}
							</ButtonGroup>
							
							<h4>Checkbox Buttons</h4>
							<ToggleButtonGroup type="checkbox" value={this.state.btnCbSelected} onChange={(val, e) => this.setState({btnCbSelected: val})}>
								{this.state.options.map((opt) => (
									<ToggleButton key={opt.value} variant="secondary" value={opt.value}>{opt.text}</ToggleButton>
								))}
							</ToggleButtonGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Buttons;
