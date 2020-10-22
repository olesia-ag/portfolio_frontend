import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
	console.log('nav items', props.headerPosition);
	let nameClasses = [classes.NotShow];
	if(props.headerPosition===1){
		nameClasses = [classes.Name]
	}
	return (
		<div className={classes.NavigationContainer}>
			<ul className={classes.NavigationList}>
				<NavigationItem link='/#about-me'>ABOUT ME</NavigationItem>
				<NavigationItem link='/#portfolio' exact>
					PORTFOLIO
				</NavigationItem>
				<NavigationItem link='/#contact-me' exact>
					CONTACT ME
				</NavigationItem>
				<NavigationItem link='/#skills' exact>
					THINGS I KNOW
				</NavigationItem>
			</ul>
			<span className={nameClasses.join(' ')}>
				<NavigationItem link='/#' exact>
					OLESIA GUIDI
				</NavigationItem>
			</span>
		</div>
	);
};

export default navigationItems;
