import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';

class Navigation extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			breadcrumbs2: ['Home', 'Active'],
			breadcrumbs3: ['Home', 'Library', 'Active'],
			activeCrumb: 'Active',
			compBreadcrumbs: [
				{
					text: 'Home',
					href: '#'
				},
				{
					text: 'Library',
					to: { name: 'Navigation' }
				},
				{
					text: 'Active',
					href: '#',
					active: true
				}
			],
			pages: [1, 2, 3],
			activePage: 2
		};
	}
	
	render() {
		return (
			<div class="row">
				<div class="col">
					<h5>Navs</h5>
					<ul class="nav">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
							</div>
						</li>
					</ul>
					<ul class="nav justify-content-center">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<ul class="nav flex-column">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					
					<h5>Tabs</h5>
					<ul class="nav nav-tabs mb-2">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<Nav variant="tabs" defaultActiveKey="#/home">
						<Nav.Item>
							<Nav.Link href="#/home">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">Other</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
						</Nav.Item>
					</Nav>
					<h5>Pills</h5>
					<ul class="nav nav-pills mb-2">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<ul class="nav nav-pills nav-fill">
						<li class="nav-item">
							<a class="nav-link active" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
				</div>
				<div class="col">
					<h5>Breadcrumb</h5>
					<nav>
						<ol class="breadcrumb">
						{this.state.breadcrumbs2.map(crumb => (
							<li key={crumb} class={`breadcrumb-item ${this.state.activeCrumb === crumb ? 'active' : ''}`}>
								{this.state.activeCrumb !== crumb ?
									<a href='#'>{crumb}</a> :
									<div>{crumb}</div>
								}
							</li>
						))}
						</ol>
					</nav>
					<nav>
						<ol class="breadcrumb">
						{this.state.breadcrumbs3.map(crumb => (
							<li key={crumb} class={`breadcrumb-item ${this.state.activeCrumb === crumb ? 'active' : ''}`}>
								{this.state.activeCrumb !== crumb ?
									<a href='#'>{crumb}</a> :
									<div>{crumb}</div>
								}
							</li>
						))}
						</ol>
					</nav>
					<Breadcrumb>
					{this.state.compBreadcrumbs.map(item => (
						<Breadcrumb.Item key={item.text} href={item.href} active={item.active}>{item.text}</Breadcrumb.Item>
					))}
					</Breadcrumb>
					
					<h5>Pagination</h5>
					<nav>
						<ul class="pagination pagination-sm">
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-left"></span>
							</a></li>
							{this.state.pages.map(ind => (
								<li key={ind} class={`page-item ${this.state.activePage === ind ? 'active' : ''}`}>
									<a class="page-link" href="#">{ind}</a>
								</li>
							))}
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-right"></span>
							</a></li>
						</ul>
					</nav>
					<nav>
						<ul class="pagination">
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-left"></span>
							</a></li>
							{this.state.pages.map(ind => (
								<li key={ind} class={`page-item ${this.state.activePage === ind ? 'active' : ''}`}>
									<a class="page-link" href="#">{ind}</a>
								</li>
							))}
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-right"></span>
							</a></li>
						</ul>
					</nav>
					<nav>
						<ul class="pagination pagination-lg">
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-left"></span>
							</a></li>
							{this.state.pages.map(ind => (
								<li key={ind} class={`page-item ${this.state.activePage === ind ? 'active' : ''}`}>
									<a class="page-link" href="#">{ind}</a>
								</li>
							))}
							<li class="page-item"><a class="page-link" href="#">
								<span class="mdi mdi-arrow-right"></span>
							</a></li>
						</ul>
					</nav>
					{/* I know this is a lazy attempt but the component really should do this for me */}
					<Pagination>
						<Pagination.First onClick={() => this.setState({activePage: 1})}/>
						<Pagination.Prev onClick={() => this.setState({activePage: this.state.activePage -1})}/>
						{this.state.pages.map(ind => (
							<Pagination.Item key={ind} active={this.state.activePage === ind}
									 onClick={() => this.setState({activePage: ind})}>{ind}</Pagination.Item>
						))}
						<Pagination.Next onClick={() => this.setState({activePage: this.state.activePage +1})}/>
						<Pagination.Last onClick={() => this.setState({activePage: this.state.pages.length})}/>
					</Pagination>
				</div>
			</div>
		);
	}
}

export default Navigation;
