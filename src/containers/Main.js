import React from 'react';
import classes from './Main.module.css';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from '../components/AboutMe/AboutMe';
import {Resume as Skills} from '../components/Resume/Resume'

function Main() {

	return (
		<div className={classes.Main}>
      {/* id is used for scrolling to an item, do not remove */}
			<div className={classes.AboutMe} id='about-me'>
				<AboutMe />
			</div>
			<div id='skills' className={classes.ContactMe}>
				<Skills />
			</div>
			<div id='contact-me' className={classes.ContactMe}>
				<ContactMe />
			</div>


		</div>
	);
}

export default Main;
