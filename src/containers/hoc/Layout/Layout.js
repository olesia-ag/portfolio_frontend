import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Layout.module.css';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/Toolbar/SideDrawer/SideDrawer';
import Footer from '../../../components/Navigation/Footer/Footer';

const Layout = (props) => {
	const [showSideDrawer, switchShowSideDrawer] = useState(false);

	const sideDrawerClosedHandler = () => {
		switchShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		switchShowSideDrawer(!showSideDrawer);
	};

	const [headerPosition, setHeaderPosition] = useState(0);

	useEffect(() => {
		const onScroll = (e) => {
			let st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > 200 && headerPosition === 0) {
				setHeaderPosition(1);
			}
			if (st < 200 && headerPosition !== 0) {
				setHeaderPosition(0);
			}
		};
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [headerPosition]);

	return (
		<>
			<header className={classes.mainHeader}>
				<Toolbar
					drawerToggleClicked={sideDrawerToggleHandler}
					headerPosition={headerPosition}
				/>
				<div className={classes.aboutMeContainer}>
					<div className={classes.aboutMeHeader + ' ' + classes.first}>Hello World!</div><br />
					<div className={classes.aboutMeHeader + ' ' + classes.second}>
						I am Olesia
					</div><br />
					<div className={classes.aboutMeHeader + ' ' + classes.third}>a full-stack developer living in NYC</div>
					<br />
				</div>
			</header>
			<SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
			<main className={classes.Content}>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
