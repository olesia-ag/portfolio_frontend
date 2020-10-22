import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggler';

const toolbar = ({ drawerToggleClicked, headerPosition }) => {
	console.log('headerposition:', headerPosition)
	let toolbarClasses = [classes.Toolbar];
	if (headerPosition === 1) {
		toolbarClasses = [classes.Toolbar, classes.Show];
	}
	return (
		<header className={toolbarClasses.join(' ')}>
			<DrawerToggle clicked={drawerToggleClicked} />
			<nav className={classes.DesktopOnly}>
				<NavigationItems headerPosition={headerPosition} />
			</nav>
		</header>
	);
};

export default toolbar;
