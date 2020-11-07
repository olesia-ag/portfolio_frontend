import React from 'react';
import classes from './PortfolioItem.module.css';
import gitHubIcon from '../../../../assets/icons/i-github.svg';

const PortfolioItem = (props) => {
	return (
		<div className={classes.PortfolioItem}>
			<section className={classes.Links}>
				<a href={props.deployed}>
					<h4>{props.name}</h4>
				</a>
				<a href={props.github}>
	<h5>&nbsp;&nbsp;(gitHub)</h5>
				</a>
			</section>

			<ul>
				<li>{props.description}</li>
				<li>{props.role}</li>
				<li>{props.stack}</li>
			</ul>
		</div>
	);
};

export default PortfolioItem;
