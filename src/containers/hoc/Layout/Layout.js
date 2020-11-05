import React, { useState, useEffect, useCallback } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/Toolbar/SideDrawer/SideDrawer';
import Footer from '../../../components/Navigation/Footer/Footer';
import Resume from '../../../components/Resume/Resume';
import Modal from '../../../components/UI/Modal/Modal';
import throttle from 'lodash.throttle';

const Layout = (props) => {
	const [showSideDrawer, switchShowSideDrawer] = useState(false);
	const [showResume, setShowResume] = useState(false);
	const [headerPosition, setHeaderPosition] = useState(0);

	const sideDrawerClosedHandler = () => {
		switchShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		switchShowSideDrawer(!showSideDrawer);
	};

	const closeResume = useCallback(() => {
		setShowResume(false);
	}, []);

	const openResume = useCallback(() => {
		console.log('open resume was called')
		setShowResume(true);
	}, []);

	useEffect(() => {
		//throttle controls how often the function can fire
		const onScroll = throttle((e) => {
			let st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > 200 && headerPosition === 0) {
				setHeaderPosition(1);
			}
			if (st < 200 && headerPosition !== 0) {
				setHeaderPosition(0);
			}
		}, 250)
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [headerPosition]);

	return (
		<div className={classes.Layout}>
			<Toolbar
				drawerToggleClicked={sideDrawerToggleHandler}
				headerPosition={headerPosition}
				sideDrawerOpen={showSideDrawer}
				openResume={openResume}
			/>
			<SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} openResume={openResume}/>
			<Modal show={showResume} close={closeResume}>
				<Resume />
			</Modal>
			<main className={classes.Content}>{props.children}</main>
			<Footer />
		</div>
	);
};


Layout.whyDidYouRender = true;

export default Layout;
