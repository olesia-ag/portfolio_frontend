import React from 'react';
import classes from './Resume.module.css';

export const Resume = () => (
	<div className={classes.Skills}>
		<span>
			<strong>Tech skills:</strong> JavaScript, HTML, CSS/SCSS, React.js, React
			Native, Node.js, Express.js, PostgreSQL, Mocha, Webpack
		</span>
		<br />
		<span>
			<strong>Soft skills: </strong> bilingual: English and Russian, excellent
			work ethic, self-motivated, open to different viewpoints, techniques and
			methods of operations
		</span>
	</div>
);

export default Resume;
