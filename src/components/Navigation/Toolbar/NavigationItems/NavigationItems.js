import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { HashLink } from 'react-router-hash-link';
import { pure } from 'recompose';

const NavigationItems = (props) => {
	let nameClasses = [classes.NotShow];
	let linksClasses = [classes.NavigationList];

	if (props.headerPosition === 1) {
		nameClasses = [classes.Top];
		linksClasses = [classes.NavigationList, classes.NavigationListWhite];
	}

	console.log('props open resume', props.openResume);
	return (
		<div className={classes.NavigationContainer}>
			<ul className={linksClasses.join(' ')}>
				<NavigationItem link='/#about-me'>ABOUT ME</NavigationItem>
				<NavigationItem link='/portfolio' exact>
					PORTFOLIO
				</NavigationItem>
				<NavigationItem link='/#contact-me' exact>
					CONTACT ME
				</NavigationItem>
				<NavigationItem link='resume' exact openResume={props.openResume}>
					RESUME
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


export default pure(NavigationItems);
