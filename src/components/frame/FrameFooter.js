import React from 'react';
import moment from 'moment';
import styles from './FrameFooter.module.css';

class FrameFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			now: moment()
		};
	}
	
	render() {
		return (
			<div id="footer">
				<nav className={`${styles.footer} navbar fixed-bottom navbar-light bg-light border-top`}>
					<ul className="navbar-nav">
						<li>
							<p className={styles.footertext}>Report problems to the EMS Support Center (<span className="mdi mdi-phone" aria-hidden="false"></span> 555-555-5555)</p>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li v-once>
							<p className={styles.footertext}>Copyright <span className="mdi mdi-copyright" aria-hidden="false"></span> 
							{this.state.now.format('YYYY')} Southern Company <span className="mdi mdi-billiards-rack"></span></p>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default FrameFooter;