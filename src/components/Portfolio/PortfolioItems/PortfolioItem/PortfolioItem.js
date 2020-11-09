import React from 'react';
import classes from './PortfolioItem.module.css';

const PortfolioItem = (props) => {
	return (
		<dl className={classes.PortfolioItem}>
			<dt>deployed link</dt>
			<dd>
				{' '}
				<a href={props.deployed}>
					<h4>{props.name}</h4>
				</a>
			</dd>

			<dt>gitHub link</dt>
			<dd>
				<a href={props.github}>
					<h5>{props.github}</h5>
				</a>
			</dd>
			<dt>description</dt>
			<dd>- {props.description}</dd>

			<dt>role</dt>
			<dd>- {props.role}</dd>
			<dt>stack</dt>
			<dd>- {props.stack}</dd>
		</dl>
	);
};

export default PortfolioItem;
