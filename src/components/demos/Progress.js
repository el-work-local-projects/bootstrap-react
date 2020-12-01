import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';

class Progress extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			styles: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
			breakpoints: [0, 25, 50, 75, 100],
			value: 25
		};
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<h5>Base Progress</h5>
					<div className="row">
						<div className="col">
							<h6>Basic</h6>
							{this.state.breakpoints.map(val => (
								<div key={val} className="progress mt-1">
									<div className="progress-bar" role="progressbar" style={{width: val + '%'}}>{val}%</div>
								</div>
							))}
						</div>
						<div className="col">
							<h6>Styles</h6>
							{this.state.styles.map(style => (
								<div key={style} className="progress mt-1">
									<div className={`progress-bar w-100 ${'bg-' + style}`} role="progressbar"></div>
								</div>
							))}
						</div>
						<div className="col">
							<h6>Nested</h6>
							<div className="progress mt-1">
								<div className="progress-bar bg-primary" style={{width: '10%'}} role="progressbar"></div>
								<div className="progress-bar bg-success" style={{width: '25%'}} role="progressbar"></div>
								<div className="progress-bar bg-warning" style={{width: '40%'}} role="progressbar"></div>
							</div>
							<h6>Striped</h6>
							<div className="progress mt-1">
								<div className="progress-bar progress-bar-striped bg-primary w-100" role="progressbar"></div>
							</div>
							<h6>Animated</h6>
							<div className="progress mt-1">
								<div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-100" role="progressbar"></div>
							</div>
						</div>
					</div>
					<h5>Component Progress</h5>
					{/* No max support */}
					<div className="row">
						<div className="col">
							<b-input type="number" v-model="value"></b-input>
							<input className="form-control" id="numInput" type="number" value={this.state.value} onChange={(e)=>this.setState({value: e.currentTarget.value})}/>
							<ProgressBar now={this.state.value} label={`${this.state.value}%`}/>
							<ProgressBar>
								<ProgressBar now={this.state.value * .6} variant="success" label={`${this.state.value * .6}%`}/>
								<ProgressBar now={this.state.value * .25} variant="warning" label={`${this.state.value * .25}%`}/>
								<ProgressBar now={this.state.value * .15} variant="danger" label={`${this.state.value * .15}%`}/>
							</ProgressBar>
						</div>
						<div className="col">
							<ProgressBar now={this.state.value} variant="info" className="mb-1" label={`${this.state.value}%`}/>
							<ProgressBar now={this.state.value} variant="info" className="mb-1" striped label={`${this.state.value}%`}/>
							<ProgressBar now={this.state.value} variant="info" animated label={`${this.state.value}%`}/>
						</div>
					</div>
					<h5>Base Spinner</h5>
					<div className="row">
						<div className="col">
							<h6>Border</h6>
							<div className="row">
								<div className="col">
									<div className="spinner-border" role="status">
										<span className="sr-only">Loading...</span>
									</div>
									{this.state.styles.map(style => (
										<div key={style} className={`spinner-border ${'text-' + style}`} role="status">
											<span className="sr-only">Loading...</span>
										</div>
									))}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="spinner-border spinner-border-sm" role="status">
										<span className="sr-only">Loading...</span>
									</div>
									{this.state.styles.map(style => (
										<div key={style} className={`spinner-border spinner-border-sm ${'text-' + style}`} role="status">
											<span className="sr-only">Loading...</span>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col">
							<h6>Growing</h6>
							<div className="row">
								<div className="col">
									<div className="spinner-grow" role="status">
										<span className="sr-only">Loading...</span>
									</div>
									{this.state.styles.map(style => (
										<div key={style} className={`spinner-grow ${'text-' + style}`} role="status">
											<span className="sr-only">Loading...</span>
										</div>
									))}					
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="spinner-grow spinner-grow-sm" role="status">
										<span className="sr-only">Loading...</span>
									</div>
									{this.state.styles.map(style => (
										<div key={style} className={`spinner-grow spinner-grow-sm ${'text-' + style}`} role="status">
											<span className="sr-only">Loading...</span>
										</div>
									))}						
								</div>
							</div>
						</div>
						<div className="col">
							<h6>Buttons</h6>
							<div className="row">
								<div className="col">
									<button className="btn btn-primary mr-1" type="button" disabled>
										<span className="spinner-border spinner-border-sm" role="status"></span>
										<span className="sr-only">Loading...</span>
									</button>
									<button className="btn btn-primary" type="button" disabled>
										<span className="spinner-border spinner-border-sm" role="status"></span> Loading...
									</button>						
								</div>
							</div>
							<div className="row mt-1">
								<div className="col">
									<button className="btn btn-primary mr-1" type="button" disabled>
										<span className="spinner-grow spinner-grow-sm" role="status"></span>
										<span className="sr-only">Loading...</span>
									</button>
									<button className="btn btn-primary" type="button" disabled>
										<span className="spinner-grow spinner-grow-sm" role="status"></span> Loading...
									</button>						
								</div>
							</div>
							<br/>
						</div>
					</div>
					<h5>Component Spinner</h5>
					<div className="row">
						<div className="col">
							<div className="row">
								<div className="col">
									<Spinner animation="border" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									{this.state.styles.map(style => (
										<Spinner key={style} animation="border" role="status" variant={style}>
											<span className="sr-only">Loading...</span>
										</Spinner>
									))}						
								</div>
							</div>
							<div className="row">
								<div className="col">
									<Spinner animation="border" role="status" size="sm">
										<span className="sr-only">Loading...</span>
									</Spinner>
									{this.state.styles.map(style => (
										<Spinner key={style} animation="border" role="status" variant={style} size="sm">
											<span className="sr-only">Loading...</span>
										</Spinner>
									))}	
								</div>
							</div>
							<br/>
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<Spinner animation="border" role="status" animation="grow">
										<span className="sr-only">Loading...</span>
									</Spinner>
									{this.state.styles.map(style => (
										<Spinner key={style} animation="border" role="status" variant={style} animation="grow">
											<span className="sr-only">Loading...</span>
										</Spinner>
									))}	
								</div>
							</div>
							<div className="row">
								<div className="col">
									<Spinner animation="border" role="status" size="sm" animation="grow">
										<span className="sr-only">Loading...</span>
									</Spinner>
									{this.state.styles.map(style => (
										<Spinner key={style} animation="border" role="status" variant={style} size="sm" animation="grow">
											<span className="sr-only">Loading...</span>
										</Spinner>
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

export default Progress;
