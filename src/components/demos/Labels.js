import React from 'react';

class Labels extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			types: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
		};
	}
	
	render() {
		const badgeHeaders = this.state.types.map((type) => (
			<th key={type}>{type}</th>
		));
		
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col">
							<h4>Badges</h4>
							<div className="table-responsive">
								<table className="table table-bordered table-striped">
									<thead className="thead-dark">
									<tr>
										<th></th>
										{badgeHeaders}
									</tr>
									</thead>
									<tbody>
									<tr>
										<th>h1</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h1><span className={`badge ${'badge-' + type}`}>Text</span></h1>
											</td>
										))}
									</tr>
									<tr>
										<th>h2</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h2><span className={`badge ${'badge-' + type}`}>Text</span></h2>
											</td>
										))}
									</tr>
									<tr>
										<th>h3</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h3><span className={`badge ${'badge-' + type}`}>Text</span></h3>
											</td>
										))}
									</tr>
									<tr>
										<th>h4</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h4><span className={`badge ${'badge-' + type}`}>Text</span></h4>
											</td>
										))}
									</tr>
									<tr>
										<th>h5</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h5><span className={`badge ${'badge-' + type}`}>Text</span></h5>
											</td>
										))}
									</tr>
									<tr>
										<th>h6</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<h6><span className={`badge ${'badge-' + type}`}>Text</span></h6>
											</td>
										))}
									</tr>
									<tr>
										<th>p</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<p><span className={`badge ${'badge-' + type}`}>Text</span></p>
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
							<h4>Badge Types</h4>
							<div className="table-responsive">
								<table className="table table-bordered table-striped">
									<thead className="thead-dark">
									<tr>
										<th></th>
										{badgeHeaders}
									</tr>
									</thead>
									<tbody>
									<tr>
										<th>Plain</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<span className={`badge ${'badge-' + type}`}>Text</span>
											</td>
										))}
									</tr>
									<tr>
										<th>Pill</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<span className={`badge badge-pill ${'badge-' + type}`}>Text</span>
											</td>
										))}
									</tr>
									<tr>
										<th>Link</th>
										{this.state.types.map((type) => (
											<td key={type}>
												<a href="#" className={`badge ${'badge-' + type}`}>Text</a>
											</td>
										))}
									</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Labels;
