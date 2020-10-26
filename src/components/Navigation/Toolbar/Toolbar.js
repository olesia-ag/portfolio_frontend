import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggler';

const toolbar = ({ drawerToggleClicked, headerPosition, sideDrawerOpen }) => {
	let toolbarClasses = [classes.Toolbar];
	if (headerPosition === 1) {
		toolbarClasses = [classes.Toolbar, classes.Show];
	}
	return (
		<header className={toolbarClasses.join(' ')}>
			<DrawerToggle className={classes.mobileOnly} clicked={drawerToggleClicked} opened={sideDrawerOpen} />
			<nav className={classes.DesktopOnly}>
				<NavigationItems headerPosition={headerPosition} />
			</nav>
		</header>
	);
};

export default toolbar;
