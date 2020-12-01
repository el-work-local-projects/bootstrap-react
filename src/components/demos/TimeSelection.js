import React from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';

import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/src/stylesheets/datepicker.scss";
import 'rc-time-picker/assets/index.css';

class TimeSelection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			time: new moment().hour(0).minute(0)
		};
	}
	
	render() {
		return (
			<div className="row">
				<div className="col">
					<h5>Calendar</h5>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								isClearable placeholderText="Select date"
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								isClearable placeholderText="Select date"
								todayButton="Today"
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								isClearable placeholderText="Select date"
								showTimeSelect dateFormat="MM/dd/yyyy HH:mm:ss"
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								isClearable placeholderText="Select date"
								showTimeInput timeInputLabel="Time:" dateFormat="MM/dd/yyyy HH:mm:ss"
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								inline/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								readOnly
								popperPlacement="bottom-start"/>
					<DatePicker selected={this.state.date} onChange={date => this.setState({date: date})}
								inline readOnly
								popperPlacement="bottom-start"/>
				</div>
				<div className="col">
					<h5>Time</h5>
					<TimePicker
						showSecond={false}
						defaultValue={this.state.time}
						onChange={(val) => this.setState({time: val})}
						format="HH:mm"
						use24Hours
						inputReadOnly
					/>
					<TimePicker
						showSecond={true}
						defaultValue={this.state.time}
						onChange={(val) => this.setState({time: val})}
						format="HH:mm:ss"
						use24Hours
						inputReadOnly
					/>
					<TimePicker
						showSecond={true}
						defaultValue={this.state.time}
						onChange={(val) => this.setState({time: val})}
						format="HH:mm:ss"
						use24Hours
						inputReadOnly
						disabled
					/>
					<TimePicker
						showSecond={true}
						defaultValue={this.state.time}
						onChange={(val) => this.setState({time: val})}
						format="HH:mm:ss"
						use24Hours
					/>
				</div>
			</div>
		);
	}
}

export default TimeSelection;
