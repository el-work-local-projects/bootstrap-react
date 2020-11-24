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
		return opts.map((opt) => (<option>{opt}</option>));
	}
	
	function changeView(event) {
		history.push('/' + event.target.value);
		props.updateMode(event.target.value);
	}
	
	return <form id="selector" class="form-inline mt-1 pb-1 border-bottom border-secondary">
		<label class="mr-2">Feature:</label>				
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
						<Switch>
							<Route path="/text">
								<Alerts/>
							</Route>
							<Route path="/labels">
								<Alerts/>
							</Route>
							<Route path="/buttons">
								<Alerts/>
							</Route>
							<Route path="/tables">
								<Alerts/>
							</Route>
							<Route path="/component-tables">
								<Alerts/>
							</Route>
							<Route path="/forms">
								<Alerts/>
							</Route>
							<Route path="/component-forms">
								<Alerts/>
							</Route>
							<Route path="/navigation">
								<Alerts/>
							</Route>
							<Route path="/alerts">
								<Alerts/>
							</Route>
							<Route path="/time-selection">
								<Alerts/>
							</Route>
							<Route path="/progress">
								<Alerts/>
							</Route>
							<Route path="/list-groups">
								<Alerts/>
							</Route>
							<Route path="/dialogs">
								<Alerts/>
							</Route>
							<Route path="/containers">
								<Alerts/>
							</Route>
							<Route exact path="/">
								<Redirect to="/text"/>
							</Route>
						</Switch>
					</div>
					<FrameFooter></FrameFooter>
				</div>
			</Router>
		  );
	}
}

export default App;
