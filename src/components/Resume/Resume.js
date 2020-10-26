import React from 'react';
import classes from './Resume.module.css';

export const Resume = () => (
	<div className={classes.Skills}>
		<section>
			<strong>Stack I've worked with:</strong> <br />JavaScript, HTML, CSS/SCSS, React.js, React
			Native, Node.js, Express.js, PostgreSQL
		</section>
		<br />
		<section>
			<strong>Education: </strong><br />
			<span>LaGuardia Community College - Queens, NY - Computer Science</span><br />
			<span>Fullstack Academy - New York, NY - completed 17 week course in full-stack web development</span>
		</section>
	</div>
);

export default Resume;
