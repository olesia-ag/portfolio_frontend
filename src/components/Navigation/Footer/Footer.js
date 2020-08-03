import React from 'react';
import classes from './Footer.module.css';
import Pdf from '../../../assets/resume.pdf';

const Footer = (props) => {
	return (
		<div className={classes.Footer}>
			<div className={classes.ContactsContainer}>
				<ul className={classes.Contacts}>
					<li className={classes.Contacts}>
						<a href='https://www.linkedin.com/in/olesia-guidi/' className={classes.Links}>linkedIn</a>
					</li>
					<li className={classes.Contacts}>
						<a href='https://github.com/olesia-ag' className={classes.Links}>gitHub</a>
					</li>
					<li className={classes.Contacts}>
						<a href={Pdf} target='_blank' rel="noopener noreferrer" className={classes.Links}>
							resume
						</a>
					</li>
					<li className={classes.Contacts}>olesiaguidi@gmail.com</li>
				</ul>
			</div>

		</div>
	);
};

export default Footer;
