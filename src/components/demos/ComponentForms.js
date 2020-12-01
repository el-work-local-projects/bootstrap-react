import React from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class ComponentForms extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
				inputTypes: [
					'text',
					'number',
					'email',
					'password',
					'search',
					'url',
					'tel',
					'date',
					'time',
					'range',
					'color'
				],
				datalist: ['Cat', 'Dog', 'Bear', 'Bird'],
				options: ['Opt A', 'Opt B', 'Opt C'],
				textarea: '',
				radio: {
					single: '',
					multi: ''
				},
				checked: {
					single: 'not_accpet',
					multi: []
				},
				select: {
					single: '',
					grouped: '',
					multi: []
				},
				file: null,
				rating: null,
				spin: 50,
				date: '',
				dateSettings: {
					min: new Date(),
					max: new Date()
				},
				time: ''
		};
		this.updateValidationField = this.updateValidationField.bind(this);
		this.updateSingleRadio = this.updateSingleRadio.bind(this);
		this.updateMultiRadio = this.updateMultiRadio.bind(this);
		this.updateSingleCheck = this.updateSingleCheck.bind(this);
		this.updateMultiCheck = this.updateMultiCheck.bind(this);
	}
	
	updateValidationField(e) {
		this.setState({username: e.currentTarget.value});
	}
	
	updateSingleRadio(e) {
		let radios = this.state.radio;
		radios.single = e.currentTarget.value;
		this.setState({radio: radios});
	}
	
	updateMultiRadio(e) {
		let radios = this.state.radio;
		radios.multi = e.currentTarget.value;
		this.setState({radio: radios});
	}
	
	updateSingleCheck(e) {
		let checked = this.state.checked;
		let val = e.currentTarget.value;
		checked.single = checked.single === val ? null : val;
		this.setState({checked: checked});
	}
	
	updateMultiCheck(e) {
		let checked = this.state.checked;
		let val = e.currentTarget.value;
		if (checked.multi.indexOf(val) > -1) {
			checked.multi.splice(checked.multi.indexOf(val), 1);
		} else {
			checked.multi.push(val);
		}
		this.setState({checked: checked});
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<Form className="col">
						{this.state.inputTypes.map(type => (
							<Form.Group key={type}>
								<Form.Label>{type}</Form.Label>
								<Form.Control type={type} id={`input-type-${type}`} value="Value"/>
							</Form.Group>
						))}
						</Form>
						<Form className="col">
							<Form.Group>
								<Form.Label>File</Form.Label>
								<Form.File label="Choose a file or drop it here" value={this.state.file} custom/>
								{/* Would take complex logic checking the field to properly validate*/}
								<Form.File label=".js only" value={this.state.file} custom isInvalid/>
								<Form.File value={this.state.file}/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Sizes</Form.Label>
								<Form.Control type="text" size="sm" placeholder="Small"/>
								<Form.Control type="text" placeholder="Default"/>
								<Form.Control type="text" size="lg" placeholder="Large"/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Form text help</Form.Label>
								<Form.Control type="text"/>
								<Form.Text muted>Help text goes here</Form.Text>
							</Form.Group>
							<Form.Group>
								<Form.Label>Form field validation</Form.Label>
								<Form.Control type="text" value={this.state.username} onChange={this.updateValidationField} 
										isValid={this.state.username.length > 4 && this.state.username.length < 13}
										isInvalid={!(this.state.username.length > 4 && this.state.username.length < 13)}>
								</Form.Control>
								<Form.Control.Feedback>Username valid!</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid">Username must be 5-12 characters long.</Form.Control.Feedback>
							</Form.Group>
						</Form>
					</div>

					<hr/>

					<div className="row">
						<div className="col">
							<h6>Radios</h6>
							<label>Single</label>
							<Form>
								<div className="mb-3">
									<Form.Check custom type="radio" id="singleRadioA" label="Radio A" value="A" checked={this.state.radio.single === 'A'} onChange={this.updateSingleRadio}/>
									<Form.Check custom type="radio" id="singleRadioB" label="Disabled" value="B" disabled checked={this.state.radio.single === 'B'} onChange={this.updateSingleRadio}/>
								</div>
							</Form>
							<label>Multiple</label>
							<Form>
								<div className="mb-3">
									<Form.Check custom type="radio" id="multiRadioA" label="Opt A" value="A" checked={this.state.radio.multi === 'A'} onChange={this.updateMultiRadio}/>
									<Form.Check custom type="radio" id="multiRadioB" label="Opt B" value="B" checked={this.state.radio.multi === 'B'} onChange={this.updateMultiRadio}/>
									<Form.Check custom type="radio" id="multiRadioC" label="Opt C" value="C" checked={this.state.radio.multi === 'C'} onChange={this.updateMultiRadio}/>
								</div>
							</Form>
							<Form className="row">
								<Form.Group className="col">
									<Form.Label>Button</Form.Label>							
									<ButtonGroup toggle>
										<ToggleButton type="radio" variant="secondary" name="radio" value="A" checked={this.state.radio.multi === "A"} onChange={this.updateMultiRadio}>
											A
										</ToggleButton>
										<ToggleButton type="radio" variant="secondary" name="radio" value="B" checked={this.state.radio.multi === "B"} onChange={this.updateMultiRadio}>
											B
										</ToggleButton>
										<ToggleButton type="radio" variant="secondary" name="radio" value="C" checked={this.state.radio.multi === "C"} onChange={this.updateMultiRadio}>
											C
										</ToggleButton>
									</ButtonGroup>								
								</Form.Group>
							</Form>
						</div>
						<div className="col">
							<h6>Checkboxes</h6>
							<label>Single</label>
							<Form>
								<div className="mb-3">
									<Form.Check custom type="checkbox" id="singleCheckA" label="CB A" value="A" checked={this.state.checked.single === 'A'} onChange={this.updateSingleCheck}/>
									<Form.Check custom type="checkbox" id="singleCheckB" label="Disabled" value="B" disabled checked={this.state.checked.single === 'B'} onChange={this.updateSingleCheck}/>
								</div>
							</Form>
							<label>Multiple</label>
							<Form>
								<div className="mb-3">
									<Form.Check custom type="checkbox" id="multiCheckA" label="Opt A" value="A" checked={this.state.checked.multi.indexOf('A') > -1} onChange={this.updateMultiCheck}/>
									<Form.Check custom type="checkbox" id="multiCheckB" label="Opt B" value="B" checked={this.state.checked.multi.indexOf('B') > -1} onChange={this.updateMultiCheck}/>
									<Form.Check custom type="checkbox" id="multiCheckC" label="Opt C" value="C" checked={this.state.checked.multi.indexOf('C') > -1} onChange={this.updateMultiCheck}/>
								</div>
							</Form>
							<Form className="row">
								<Form.Group className="col">
									<Form.Label>Button</Form.Label>							
									<ButtonGroup toggle>
										<ToggleButton type="checkbox" variant="secondary" name="checked" value="A" checked={this.state.checked.multi.indexOf("A") > -1} onChange={this.updateMultiCheck}>
											A
										</ToggleButton>
										<ToggleButton type="checkbox" variant="secondary" name="checked" value="B" checked={this.state.checked.multi.indexOf("B") > -1} onChange={this.updateMultiCheck}>
											B
										</ToggleButton>
										<ToggleButton type="checkbox" variant="secondary" name="checked" value="C" checked={this.state.checked.multi.indexOf("C") > -1} onChange={this.updateMultiCheck}>
											C
										</ToggleButton>
									</ButtonGroup>								
								</Form.Group>
							</Form>
							<label>Switch</label>
							<Form>
								<Form.Check 
									type="switch"
									id="custom-switch"
									label="Enabled"
								  />
								  <Form.Check 
									disabled
									type="switch"
									label="Disabled"
									id="disabled-custom-switch"
								  />
							</Form>
						</div>
						<div className="col">
							<h6>Select</h6>
							<Form>
								<Form.Group>
									<Form.Label>Single</Form.Label>
									<Form.Control as="select">
									{this.state.options.map(opt=>(
										<option key={opt}>{opt}</option>
									))}
									</Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.Label>Multiple</Form.Label>
									<Form.Control as="select" multiple>
									{this.state.options.map(opt=>(
										<option key={opt}>{opt}</option>
									))}
									</Form.Control>
								</Form.Group>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ComponentForms;
