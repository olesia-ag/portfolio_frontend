import React from 'react';
import classes from './Main.module.css';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Connect from '../components/Connect/Connect';
import SmallEllipse from '../assets/vectors/small_ellipse.png';
import LargeEllipse from '../assets/vectors/large_ellipse.png';
import Vector from '../assets/vectors/vector.png';

function Main() {
	return (
		<div className={classes.Main}>
			<header className={classes.MainHeader}>
				<div className={classes.Overlay}> </div>
			</header>
			<div className={classes.ImageContainer}>
				<img
					src={SmallEllipse}
					style={{ position: 'absolute', top: '-5.5rem', left: '-6rem' }}
					id='small-ellipse'
					alt=''
				/>
				<img src={Vector} style={{ position: 'absolute', left: "-.4rem", top: "-.4rem" }} alt='' />
				<img src={LargeEllipse} style={{ position: 'absolute', top: "45rem", left: "8.5rem" }} alt='' />
			</div>
			<div className={classes.AboutMeContainer}>
				<p>Hello World,</p>
				<h1>I am Olesia.</h1>
				<p>
					a fullstack developer
					<br />
					living in NYC
				</p>
			</div>

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
