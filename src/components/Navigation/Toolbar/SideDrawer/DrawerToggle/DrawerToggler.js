import React from 'react';
import classes from './DrawerToggler.module.css';

const drawerToggler = (props) => {
	let attachedClasses = [classes.DrawerToggle];

	if (props.close) {
		return <div className={classes.Close}></div>;
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
