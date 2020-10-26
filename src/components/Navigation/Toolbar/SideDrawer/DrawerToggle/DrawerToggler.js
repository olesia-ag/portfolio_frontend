import React from 'react';
import classes from './DrawerToggler.module.css';

const drawerToggler = (props) => {
	let attachedClasses = [classes.DrawerToggle];
console.log('drawerToggler', props)
	if (props.opened) {
		return <div className={classes.NotShow}></div>;
	} else {
		return (
			<div onClick={props.clicked} className={classes.DrawerToggle}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
};

export default drawerToggler;
