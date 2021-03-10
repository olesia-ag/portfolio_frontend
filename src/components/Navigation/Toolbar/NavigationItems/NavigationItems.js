import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { pure } from 'recompose';

const NavigationItems = (props) => {
	return (
		<div className={classes.NavigationContainer}>
			<ul className={classes.NavigationList}>
				<NavigationItem link='/#about-me'>ABOUT ME</NavigationItem>
				<NavigationItem link='/portfolio' exact>
					PORTFOLIO
				</NavigationItem>
				<NavigationItem link='/resume' exact>
					RESUME
				</NavigationItem>
				<NavigationItem link='/#contact-me' exact>
					CONTACT
				</NavigationItem>
			</ul>
		</div>
	);
};

export default pure(NavigationItems);
