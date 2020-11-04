import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggler';
import { pure } from 'recompose';

const Toolbar = (props) => {
	let toolbarClasses = [classes.Toolbar];
	if (props.headerPosition === 1) {
		toolbarClasses = [classes.Toolbar, classes.Show];
	}

	console.log('showResume:', props.showResume, 'openResume', props.openResume);
	return (
		<header className={toolbarClasses.join(' ')}>
			<DrawerToggle
				className={classes.mobileOnly}
				clicked={props.drawerToggleClicked}
				opened={props.sideDrawerOpen}
			/>
			<nav className={classes.DesktopOnly}>
				<NavigationItems
					headerPosition={props.headerPosition}
					openResume={props.openResume}
				/>
			</nav>
		</header>
	);
};

Toolbar.whyDidYouRender = true;

export default pure(Toolbar);
