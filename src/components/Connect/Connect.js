import React from 'react';
import classes from './Connect.module.css';
import GitHubIcon from '../../assets/icons/i-github.svg';
import TwitterIcon from '../../assets/icons/i-twitter.svg';
import LinkedInIcon from '../../assets/icons/i-linkedin.svg';
import MediumIcon from '../../assets/icons/i-medium.svg';

function Connect() {
	return (
		<>
			<div className={classes.Connect}>
				<ul>
					<li>
						<a href='https://github.com/olesia-ag'>
							<img src={GitHubIcon} alt='GitHub' />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/olesia_ag'>
							{' '}
							<img src={TwitterIcon} alt='Twitter' />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/olesia-guidi/'>
							<img src={LinkedInIcon} alt='LinkedIn' />
						</a>
					</li>
					<li>
						<a href='https://github.com/olesia-ag'>
							<img src={MediumIcon} alt='Medium' />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Connect;
