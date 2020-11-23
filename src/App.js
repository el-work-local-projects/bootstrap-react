import logo from './logo.svg';

import 'bootstrap';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './components/frame/NavBar';
import FrameFooter from './components/frame/FrameFooter';

function App() {
  return (
    <div id="app">
		<NavBar></NavBar>
		<div className="container-fluid app-content">
		{/*
			<form id="selector" class="form-inline mt-1 pb-1 border-bottom border-secondary">
				<label class="mr-2">Feature:</label>
				
				<b-form-select v-model="mode" :options="modeOptions"></b-form-select>
			</form>
			<router-view id="selection"></router-view>
		*/}
		</div>
		<FrameFooter></FrameFooter>
	</div>
  );
}

export default App;
