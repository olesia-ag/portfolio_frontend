import React from 'react';
import classes from './Resume.module.css';

export const Resume = () => (
	<div className={classes.Skills}>
		<section>
			<strong>I've worked with:</strong>
			<ul className={classes.SkillsList}>
				<li>JavaScript</li>
				<li>HTML</li>
				<li>CSS/SCSS </li>
				<li>React.js</li>
				<li>React Native</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>PostgreSQL</li>
			</ul>
		</section>
		<br />
		<section>
			<strong>Education: </strong>
			<br />
			<ul className={classes.EducationList}>
				<li>
					Fullstack Academy - New York, NY <br /> completed 17 week course in
					full-stack web development
				</li>
				<li>
					LaGuardia Community College <br /> Queens, NY - coursework in Computer
					Science
				</li>
				<li>Udemy <br />
				 React - The Complete Guide (incl Hooks, React Router, Redux) <br/> completed 40.5 total hours of training</li>
			</ul>
		</section>
	</div>
);

export default Resume;
