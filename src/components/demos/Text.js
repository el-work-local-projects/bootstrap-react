import React from 'react';
import Form from 'react-bootstrap/Form';

class Text extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			content: ''
		};
		this.onTextChange = this.onTextChange.bind(this);
	}
	
	onTextChange(event) {
		this.setState({content: event.target.value});
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col">
							<h1>Heading 1</h1>
							<h2>Heading 2</h2>
							<h3>Heading 3</h3>
							<h4>Heading 4</h4>
							<h5>Heading 5</h5>
							<h6>Heading 6</h6>
							<p className="lead">Leading paragraph</p>
							<p>Citation by <cite title="Nowhere Important">Nowhere Important</cite></p>
						</div>
						<div className="col">
							<h2>Example body text</h2>
							<p>Text goes here. A link looks like <a href="#">this</a>.</p>
							<p><small>This is the fine print.</small></p>
							<p>The following is <strong>bold text</strong>.</p>
							<p>The following is <em>italicized text</em>.</p>
							<p>Abbreviations look like <abbr title="abbreviation">abbr</abbr>.</p>
							<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890</p>
						</div>
						<div className="col">
							<h2>Emphasis classes</h2>
							<div className="row">
								<div className="col">
									<p className="text-primary">Primary text</p>
									<p className="text-secondary">Secondary text</p>
									<p className="text-success">Success text</p>
									<p className="text-info">Info text</p>
									<p className="text-warning">Warning text</p>
									<p className="text-danger">Danger text</p>						
								</div>
								<div className="col">
									<p className="text-muted">Muted text</p>
									<p className="text-light bg-dark">Light text</p>
									<p className="text-dark">Dark text</p>
									<p className="text-body">Body text</p>
									<p className="text-white bg-dark">White text</p>
									<p className="text-black-50">Black 50 text</p>
									<p className="text-white-50 bg-dark">White 50 text</p>						
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<Form.Control as="textarea" value={this.state.content} onChange={this.onTextChange}
									placeholder="Type text here to see it in the various styles..." rows={3} maxRows={6} />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h1>{this.state.content}</h1>
							<h2>{this.state.content}</h2>
							<h3>{this.state.content}</h3>
							<h4>{this.state.content}</h4>
							<h5>{this.state.content}</h5>
							<h6>{this.state.content}</h6>
							<p className="lead">{this.state.content}</p>
						</div>
						<div className="col">
							<p>{this.state.content}</p>
							<p><a href="#">{this.state.content}</a></p>
							<p><small>{this.state.content}</small></p>
							<p><strong>{this.state.content}</strong></p>
							<p><em>{this.state.content}</em></p>
							<p><abbr title={this.state.content}>{this.state.content}</abbr></p>
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<p className="text-primary">{this.state.content}</p>
									<p className="text-secondary">{this.state.content}</p>
									<p className="text-success">{this.state.content}</p>
									<p className="text-info">{this.state.content}</p>
									<p className="text-warning">{this.state.content}</p>
									<p className="text-danger">{this.state.content}</p>						
								</div>
								<div className="col">
									<p className="text-muted">{this.state.content}</p>
									<p className="text-light bg-dark">{this.state.content}</p>
									<p className="text-dark">{this.state.content}</p>
									<p className="text-body">{this.state.content}</p>
									<p className="text-white bg-dark">{this.state.content}</p>
									<p className="text-black-50">{this.state.content}</p>
									<p className="text-white-50 bg-dark">{this.state.content}</p>						
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Text;
