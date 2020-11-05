import React from 'react';
import classes from './Main.module.css';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Connect from '../components/Connect/Connect';



function Main() {
	return (
		<div className={classes.Main}>
			<header className={classes.MainHeader}>
				<div className={classes.aboutMeContainer}>
					<div className={classes.first}>Hello World, I am Olesia</div>

					<div className={classes.second}>a fullstack developer</div>

					<div className={classes.third}>living in NYC</div>
				</div>
			</header>
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
