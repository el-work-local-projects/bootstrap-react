import React from 'react';
import Table from 'react-bootstrap/Table';

class ComponentTables extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			fields: [
				{
					key: 'user',
					label: 'User ID',
					variant: 'success',
					sortable: true
				},
				{
					key: 'firstName',
					label: 'Given Name',
					sortable: true
				},
				{
					key: 'last_name',
					label: 'Surname'
				}
			],
			content: [
				{
					id: 1,
					firstName: 'No',
					'last_name': 'Body',
					user: '@nb'
				},
				{
					id: 2,
					firstName: 'Some',
					'last_name': 'Body',
					user: '@sb'
				},
				{
					id: 3,
					firstName: 'John',
					'last_name': 'Smith',
					user: '@jsmith'
				}
			],
			loading: false
		};
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<h5>Component</h5>
					<Table striped bordered hover size="sm" responsive>
						<thead>
							<tr>
							{this.state.fields.map((field) => (
								<th key={field.key}>{field.label}</th>
							))}
							</tr>
						</thead>
						<tbody>
						{this.state.content.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.firstName}</td>
								<td>{item.last_name}</td>
								<td>{item.user}</td>
							</tr>
						))}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default ComponentTables;
