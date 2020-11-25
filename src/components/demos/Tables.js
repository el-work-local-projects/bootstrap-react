import React from 'react';

class Tables extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			colors: ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
			content: [
				{
					id: 1,
					fn: 'No',
					ln: 'Body',
					user: '@nb'
				},
				{
					id: 2,
					fn: 'Some',
					ln: 'Body',
					user: '@sb'
				}
			]
		};
	}
	
	render() {
		const tblRows = this.state.content.map((user) => (
			<tr key={user.id}>
				<th scope="row">{ user.id }</th>
				<td>{ user.fn }</td>
				<td>{ user.ln }</td>
				<td>{ user.user }</td>
			</tr>
		));
		
		return (
			<div className="row">
				<div className="col">
					<h4>Sizes</h4>
					<div className="row">
						<div className="col">
							<h5>Plain</h5>
							<table className="table">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									{tblRows}
								</tbody>
							</table>
						</div>				
						<div className="col">
							<h5>Small</h5>
							<table className="table table-sm">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									{tblRows}
								</tbody>
							</table>
						</div>
					</div>
					<h4>Styles</h4>
					<div className="row">
						<div className="col">
							<div className="row">
								<div className="col">
									<h5>Plain</h5>
									<table className="table table-sm">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Light Header</h5>
									<table className="table table-sm">
										<thead className="thead-light">
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h5>Striped</h5>
									<table className="table table-sm table-striped">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Bordered</h5>
									<table className="table table-sm table-bordered">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h5>Borderless</h5>
									<table className="table table-sm table-borderless">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Hoverable</h5>
									<table className="table table-sm table-hover">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<h5>Dark</h5>
									<table className="table table-sm table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Dark Header</h5>
									<table className="table table-sm">
										<thead className="thead-dark">
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h5>Dark Striped</h5>
									<table className="table table-sm table-striped table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Dark Bordered</h5>
									<table className="table table-sm table-bordered table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h5>Dark Borderless</h5>
									<table className="table table-sm table-borderless table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>						
								<div className="col">
									<h5>Dark Hoverable</h5>
									<table className="table table-sm table-hover table-dark">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First Name</th>
												<th scope="col">Last Name</th>
												<th scope="col">Username</th>
											</tr>
										</thead>
										<tbody>
											{tblRows}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<h4>Colors</h4>
					<div className="row">
						<div className="col">
							<table className="table">
								<tbody>
								{this.state.colors.map((color) => (
									<tr key={color} className={'table-' + color}>
										<th scope="row">{ color }</th>
										<td>Text</td>
										<td>Text</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
						<div className="col">
							<table className="table table-dark">
								<tbody>
								{this.state.colors.map((color) => (
									<tr key={color} className={'bg-' + color}>
										<th scope="row">{ color }</th>
										<td>Text</td>
										<td>Text</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
					<h4>Responsive</h4>
					<div className="row">
						<div className="col">
							<div className="table-responsive">
								<table className="table">
									<tbody>
										<tr>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
											<td>aaaaa</td>
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

export default Tables;
