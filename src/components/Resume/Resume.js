import React, { useState} from 'react';
import classes from './Resume.module.css';
import { downloadResume } from '../../shared/utility';
import Button from '../UI/Button/Button';

export function Resume(props) {
	const [techSkills, setTechSkills] = useState({
		Comfortable: ['JavaScript', 'HTML', 'CSS', 'React.js', 'React – Redux'],
		Familiar: [
			'React Native',
			'Sequelize ORM',
			'Node.js',
			'Express.js',
			'Mocha',
			'Webpack',
		],

		Some: [
			'Java',
		  ' C++',
		  ' Heroku'],
	});
	const [softSkills, setSoftSkills] = useState([
		'Bilingual: English and Russian',
		'Excellent work ethic',
		'Self-motivated',
		'Open to different viewpoints, techniques and methods of operations',
	]);
	let skillsArr = [];

	const formSkills = (skillsObj) => {
		for (let key in skillsObj) {
			skillsArr.push(
					<ul key={key}>
						{`${key}`}:
					{skillsObj[key].map((skill) => (
						<li key={skill+key}>{skill}</li>
					))}
					</ul>
			);
		}
	};

	formSkills(techSkills);

	return (
		<div className={classes.Skills}>
				<Button clicked={downloadResume}>Donwload Full Resume (pdf)</Button>
			<div className={classes.Container}>
				<div className={classes.SkillsContainer}>
				<h2>Tech Skills:</h2>
				{skillsArr}
			</div>
			<div className={classes.SkillsContainer}>
				<h2>Soft skills:</h2>
				<ul>
					{softSkills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			</div>

		</div>
	);
}

export default Resume;
