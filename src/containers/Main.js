import React from 'react';
import classes from './Main.module.css';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from '../components/AboutMe/AboutMe';
import { Resume as Skills } from '../components/Resume/Resume';
import Connect from '../components/Connect/Connect';


function Main() {
	return (
		<div className={classes.Main}>
			{/* id is used for scrolling to an item, do not remove */}
			<div className={classes.AboutMe} id='about-me'>
				<AboutMe />
				<Skills />
			</div>

			<div id='contact-me' className={classes.ContactMe}>
				<Connect />
				<ContactMe />
			</div>
		</div>
	);
}

export default Main;
