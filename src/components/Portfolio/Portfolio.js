import React from 'react';
import classes from './Portfolio.module.css';
import GitHubIcon from '../../assets/icons/i-github.svg';

const Portfolio = (props) => {
	return (
		<div className={classes.Portfolio}>
			<h3>Will be updated soon!</h3>
			<h4>
				In a meantime, <br /> please check out my{' '}
				<a href='https://github.com/olesia-ag'>
					<img src={GitHubIcon} alt='GitHub' />
				</a>{' '}
			</h4>
		</div>
	);
};

export default Portfolio;
