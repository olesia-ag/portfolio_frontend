import React from 'react';
import classes from './PortfolioItem.module.css';
import gitHubIcon from '../../../../assets/github_icon.png';

const portfolioItem = (props) => {
	console.log('item rendered', props);
	return (
		<div className={classes.PortfolioItem}>

					<a href={props.deployed}>
						<h3>{props.name}</h3>
					</a>

					<a href={props.github}>
						Github <img
							className={classes.GitHubIcon}
							src={gitHubIcon}
							alt='gitHub'></img>{' '}

					</a>

				<ul>
					<li className={classes.Odd}>{props.description}</li>
					<li>{props.role}</li>
					<li className={classes.Odd}>{props.stack}</li>
				</ul>

		</div>
	);
};

export default portfolioItem;
