import React from 'react';

class ListGroups extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			styles: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
		};
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col">
							<h6>Basic</h6>
							<ul className="list-group">
								<li className="list-group-item">Normal</li>
								<li className="list-group-item active">Active</li>
								<li className="list-group-item disabled">Disabled</li>
								<li className="list-group-item list-group-item-action">Action</li>
								<li className="list-group-item d-flex justify-content-between align-items-center">
									Badge
									<span className="badge badge-primary badge-pill">#</span>
								</li>
							</ul>
						</div>
						<div className="col">
							<h6>Action</h6>
							<div className="list-group">
								<a href="#" className="list-group-item list-group-item-action">Action Link</a>
								<button type="button" className="list-group-item list-group-item-action">Action Button</button>
								<button type="button" className="list-group-item list-group-item-action" disabled>Disabled Button</button>
							</div>
						</div>
						<div className="col">
							<h6>Flush</h6>
							<div className="list-group list-group-flush">
								<a href="#" className="list-group-item list-group-item-action">Action Link</a>
								<button type="button" className="list-group-item list-group-item-action">Action Button</button>
								<button type="button" className="list-group-item list-group-item-action" disabled>Disabled Button</button>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h6>Styled</h6>
							<ul className="list-group">
							{this.state.styles.map(style => (
								<li key={style} className={`list-group-item ${'list-group-item-' + style}`}>{style}</li>
							))}
							</ul>
						</div>
						<div className="col">
							<h6>Styled Action</h6>
							<ul className="list-group">
							{this.state.styles.map(style => (
								<li key={style} className={`list-group-item list-group-item-action ${'list-group-item-' + style}`}>{style}</li>
							))}
							</ul>
						</div>
						<div className="col">
							<h6>Horizontal</h6>
							<ul className="list-group list-group-horizontal">
								<li className="list-group-item">Normal</li>
								<li className="list-group-item active">Active</li>
								<li className="list-group-item disabled">Disabled</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ListGroups;
