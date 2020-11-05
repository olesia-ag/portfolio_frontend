import React from 'react';
import classes from './Resume.module.css';
import Button from '../UI/Button/Button';
import { downloadResume } from '../../shared/utility';
import Pdf from '../../assets/olesia_guidi_resume.pdf';

export const Resume = (props) => {
	return (
		<div className={classes.Resume}>
			<Button clicked={downloadResume}>download</Button>
			<a
				href={Pdf}
				target='_blank'
				rel='noopener noreferrer'
				className={classes.Links}>
				<Button>open</Button>
			</a>
		</div>
	);
};

export default Resume;
