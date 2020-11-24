import logo from './logo.svg';

import 'bootstrap';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import './App.scss';

import React from 'react';
import Form from 'react-bootstrap/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

import NavBar from './components/frame/NavBar';
import FrameFooter from './components/frame/FrameFooter';

import Alerts from './components/demos/Alerts';
import Buttons from './components/demos/Buttons';
import ComponentForms from './components/demos/ComponentForms';
import ComponentTables from './components/demos/ComponentTables';
import Containers from './components/demos/Containers';
import Dialogs from './components/demos/Dialogs';
import Forms from './components/demos/Forms';
import Labels from './components/demos/Labels';
import ListGroups from './components/demos/ListGroups';
import Navigation from './components/demos/Navigation';
import Progress from './components/demos/Progress';
import Tables from './components/demos/Tables';
import Text from './components/demos/Text';
import TimeSelection from './components/demos/TimeSelection';

function ViewSelector(props) {
	let history = useHistory();
	
	function buildOptions(opts) {
		return opts.map((opt) => (<option key={opt}>{opt}</option>));
	}
	
	function changeView(event) {
		history.push('/' + event.target.value);
		props.updateMode(event.target.value);
	}
	
	return <form id="selector" className="form-inline mt-1 pb-1 border-bottom border-secondary">
				<label className="mr-2">Feature:</label>				
				<Form.Control as="select" value={props.mode} onChange={changeView}>
					{buildOptions(props.modeOptions)}
				</Form.Control>
			</form>
}

class App extends React.Component {	
	constructor(props) {
		super(props);		
		this.state = {
			mode: 'text',
			modeOptions: [
				'text',
				'labels',
				'buttons',
				'tables',
				'component-tables',
				'forms',
				'component-forms',
				'navigation',
				'alerts',
				'time-selection',
				'progress',
				'list-groups',
				'dialogs',
				'containers'
			]
		};
	}
	
	render() {
		return (
			<Router>
				<div id="app">
					<NavBar></NavBar>
					<div className="container-fluid app-content">
						<ViewSelector mode={this.state.mode} modeOptions={this.state.modeOptions}
									  updateMode={(mode) => this.setState({mode: mode})}/>
						<div className="row" id="selection">
							<div className="col">
								<Switch>
									<Route path="/text">
										<Text/>
									</Route>
									<Route path="/labels">
										<Labels/>
									</Route>
									<Route path="/buttons">
										<Buttons/>
									</Route>
									<Route path="/tables">
										<Tables/>
									</Route>
									<Route path="/component-tables">
										<ComponentTables/>
									</Route>
									<Route path="/forms">
										<Forms/>
									</Route>
									<Route path="/component-forms">
										<ComponentForms/>
									</Route>
									<Route path="/navigation">
										<Navigation/>
									</Route>
									<Route path="/alerts">
										<Alerts/>
									</Route>
									<Route path="/time-selection">
										<TimeSelection/>
									</Route>
									<Route path="/progress">
										<Progress/>
									</Route>
									<Route path="/list-groups">
										<ListGroups/>
									</Route>
									<Route path="/dialogs">
										<Dialogs/>
									</Route>
									<Route path="/containers">
										<Containers/>
									</Route>
									<Route exact path="/">
										<Redirect to="/text"/>
									</Route>
								</Switch>
							</div>
						</div>
					</div>
					<FrameFooter></FrameFooter>
				</div>
			</Router>
		  );
	}
}

export default App;
