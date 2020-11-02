import React, { useState, useEffect } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/Toolbar/SideDrawer/SideDrawer';
import Footer from '../../../components/Navigation/Footer/Footer';
import { useHistory } from 'react-router-dom';

const Layout = (props) => {
	const [showSideDrawer, switchShowSideDrawer] = useState(false);
	let history = useHistory();
	console.log('history:', history.location.pathname);
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
			<header className={classes.MainHeader}>
				<div className={classes.aboutMeContainer}>
					<span className={classes.aboutMeHeader + ' ' + classes.first}>
						I am Olesia,
					</span>
					<br />
					<span className={classes.aboutMeHeader + ' ' + classes.second}>
						a full-stack developer
					</span>
					<br />
					<span className={classes.aboutMeHeader + ' ' + classes.third}>
						living in NYC
					</span>
					<br />
				</div>
				<Toolbar
					drawerToggleClicked={sideDrawerToggleHandler}
					headerPosition={headerPosition}
					sideDrawerOpen={showSideDrawer}
				/>
			</header>

			<SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
			<main className={classes.Content}>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
