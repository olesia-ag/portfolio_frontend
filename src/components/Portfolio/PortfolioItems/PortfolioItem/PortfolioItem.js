import React from 'react';
import classes from './PortfolioItem.module.css';
import gitHubIcon from '../../../../assets/icons/i-github.svg';

const portfolioItem = (props) => {
	return (
		<div>
			<div className={classes.Links}>
				<a href={props.deployed}>
					<h3>{props.name}</h3>
				</a>
				<a href={props.github}>
					<h4>(gitHub)</h4>
				</a>
			</div>

			<ul>
				<li>{props.description}</li>
				<li>{props.role}</li>
				<li>{props.stack}</li>
			</ul>
		</div>
	);
};

export default portfolioItem;
