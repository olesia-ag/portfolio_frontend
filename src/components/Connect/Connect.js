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
							<img src={GitHubIcon} alt='my gitHub' />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/olesia_ag'>
							{' '}
							<img src={TwitterIcon} alt='my twitter' />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/olesia-guidi/'>
							<img src={LinkedInIcon} alt='my linkedin' />
						</a>
					</li>
					<li>
						<a href='https://medium.com/@olesiagarbuzova'>
							<img src={MediumIcon} alt='my medium' />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Connect;
