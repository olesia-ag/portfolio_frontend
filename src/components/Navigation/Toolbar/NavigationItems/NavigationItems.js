import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { HashLink } from 'react-router-hash-link';

const navigationItems = (props) => {
	let nameClasses = [classes.NotShow];
	let linksClasses = [classes.NavigationList];
	if (props.headerPosition === 1) {
		nameClasses = [classes.Top];
		linksClasses = [classes.NavigationList, classes.NavigationListWhite];
	}
	return (
		<div className={classes.NavigationContainer}>
			<ul className={linksClasses.join(' ')}>
				<NavigationItem link='/#about-me'>ABOUT ME</NavigationItem>
				<NavigationItem link='/#portfolio' exact>
					PORTFOLIO
				</NavigationItem>
				<NavigationItem link='/#contact-me' exact>
					CONTACT ME
				</NavigationItem>
			</ul>
			<span className={nameClasses.join(' ')}>
				<HashLink smooth to='/#'>
					BACK TO TOP
				</HashLink>
			</span>
		</div>
	);
};

export default navigationItems;
