import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggler';
import { pure } from 'recompose';

const Toolbar = (props) => {
	let toolbarClasses = [classes.Toolbar];


	return (
		<header className={toolbarClasses.join(' ')}>
			<DrawerToggle
				className={classes.mobileOnly}
				clicked={props.drawerToggleClicked}
				opened={props.sideDrawerOpen}
			/>
			<nav className={classes.DesktopOnly}>
				<NavigationItems
					openResume={props.openResume}
				/>
			</nav>
		</header>
	);
};


export default pure(Toolbar);
