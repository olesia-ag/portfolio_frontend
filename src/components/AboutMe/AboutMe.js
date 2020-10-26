import React from 'react';
import classes from './AboutMe.module.css';

function AboutMe() {
	return (
		<div className={classes.AboutMe}>
			<p>
				Hi there! I am a fullstack web developer with a background in React,
				Node.js and PostreSQL.<br className={classes.brMajor} />
				When I'm not coding, I can be found in the gym or
				a nonfiction section of a bookstore.
			</p>
			</div>

	);
}

export default AboutMe;
