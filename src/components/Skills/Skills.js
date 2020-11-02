import React from 'react';
import classes from './Skills.module.css';

export const Skills = () => (
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
			<ul>
				<li>LaGuardia Community College - Queens, NY - Computer Science</li>
				<li>
					Fullstack Academy - New York, NY - completed 17 week course in
					full-stack web development
				</li>
			</ul>
		</section>
	</div>
);

export default Skills;
