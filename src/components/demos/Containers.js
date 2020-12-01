import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Figure from 'react-bootstrap/Figure';

import logo from 'assets/logo.png';
import fritz from 'assets/fritz_daffodils.jpg';
import cats from 'assets/cats.jpg';
import taff from 'assets/taff-blep.jpg';

class Containers extends React.Component {
	constructor(props) {
		super(props);		
	}
	
	render() {
		const cardItems = [];
		for (var i = 0; i < 3; i++) {
			cardItems.push(
				<li key={i} className="list-group-item">Item {i}</li>
			);
		}
		
		return (
			<div className="row">
				<div className="col">
					<h5>Card</h5>
					<div className="row">
						<div className="col-3">
							<h6>Native</h6>
							<div className="card">
								<img src={logo} className="card-img-top"/>
								<div className="card-body">
									<h5 className="card-title">Card Title</h5>
									<h6 className="card-subtitle text-muted">Card subtitle</h6>
									<p className="card-text">Card text goes here</p>
									<button type="button" className="btn btn-primary">Hey look a button</button>
								</div>
							</div>
						</div>
						<div className="col-2">
							<h6>Native List</h6>
							<div className="card">
								<div className="card-header">List</div>
								<ul className="list-group list-group-flush">
									{cardItems}
								</ul>
								<div className="card-footer">Footer</div>
							</div>
						</div>
						<div className="col-4">
							<h6>Native Styles</h6>
							<div className="row">
								<div className="col">
									<div className="card text-white bg-primary">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card text-white bg-secondary">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="card text-white bg-success">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card text-white bg-danger">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="card text-white bg-warning">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card text-white bg-info">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="card bg-light">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card text-white bg-dark">
										<div className="card-header">Header</div>
										<div className="card-body">
											<p className="card-text">Style</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<h6>Component</h6>
							<Card>
								<Card.Img variant="top" src={logo}/>
								<Card.Body>
									<Card.Title>Title</Card.Title>
									<Card.Subtitle>Card subtitle</Card.Subtitle>
									<Card.Text>
										Card text goes here
										<button className="btn btn-primary">Another button</button>
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					<h5>Carousel</h5>
					<div className="row">
						<div className="col">
							<h6>Native</h6>
							<div id="native-carousel-controls" className="carousel slide" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={logo} className="d-block w-100" style={{height: '330px'}}/>
									</div>
									<div className="carousel-item">
										<img src={cats} className="d-block w-100"/>
									</div>
									<div className="carousel-item">
										<img src={fritz} className="d-block w-100"/>
									</div>
								</div>
								<a className="carousel-control-prev" href="#native-carousel-controls" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#native-carousel-controls" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						<div className="col">
							<h6>Component</h6>
							<Carousel>
								<Carousel.Item>
									<img className="d-block w-100" src={logo}/>
									<Carousel.Caption>
										<p>Vue logo</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src={cats}/>
									<Carousel.Caption>
										<p>Small furry demons</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src={fritz}/>
									<Carousel.Caption>
										<p>Best boy</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
					<h5>Jumbotron</h5>
					<div className="row">
						<div className="col">
							<h6>Native</h6>
							<div className="jumbotron">
								<h1 className="display-4">Main content</h1>
								<p className="lead">Descriptive content</p>
								<hr className="my-4"/>
								<p>Buy this product now for way too much money</p>
								<a className="btn btn-primary" href="#" role="button">Buy now</a>
							</div>
						</div>
						<div className="col">
							<h6>Component</h6>
							<Jumbotron>
								<h1>Main content</h1>
								<h4>Descriptive content</h4>
								<p>Buy this product now for way too much money</p>
								<button className="btn btn-primary">Buy now</button>
							</Jumbotron>
						</div>
					</div>
					<h5>Media Object</h5>
					<div className="row">
						<div className="col">
							<h6>Native</h6>
							<div className="media">
								<img src={taff} className="mr-3"/>
								<div className="media-body">
									<h5 className="mt-0">Header</h5>
									Body text goes here and can go on for a while maybe long enough for a text wrap imagine this 
									is a social media post or a stack overflow answer or something.
									
									
									<div className="media">
										<img src={taff} className="mr-3"/>
										<div className="media-body">
											<h5 className="mt-0">Header</h5>
											Nested post criticizing earlier post.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<h6>Component</h6>
							<p>N/A</p>
						</div>
					</div>
					<h5>Figure</h5>
					<div className="row">
						<div className="col">
							<Figure>
							  <Figure.Image
								width={171}
								height={180}
								alt="171x180"
								src={logo}
							  />
							  <Figure.Caption>
								Caption text goes here
							  </Figure.Caption>
							</Figure>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Containers;
