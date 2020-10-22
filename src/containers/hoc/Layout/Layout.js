import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Layout.module.css';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/Toolbar/SideDrawer/SideDrawer';
import TextHeader from '../../../components/TextHeader/TextHeader';
import Footer from '../../../components/Navigation/Footer/Footer';

const Layout = (props) => {
	let history = useHistory();
	const [textToDisplay, setTextToDisplay] = useState('');

	const [showSideDrawer, switchShowSideDrawer] = useState(false);

	const checkLocationAndSetText = (curLocation) => {
		if (curLocation === '/') {
			setTextToDisplay(
				"Hello World! I'm Olesia, a fullstack developer living in NYC"
			);
		}
		if (curLocation === '/portfolio') {
			setTextToDisplay('My Portfolio:');
		}
		if (curLocation === '/skills') {
			setTextToDisplay('Skills:');
		}
	};
	//sets text after component moiunted based on location:
	useEffect(() => {
		checkLocationAndSetText(history.location.pathname);
	}, [history.location.pathname]);

	//reacts to change of url, assigns textToDiplay based on url:
	useEffect(() => {
		return history.listen((location) => {
			checkLocationAndSetText(location.pathname);
		});
	}, [history]);

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
				<TextHeader>{textToDisplay}</TextHeader>
			</header>
			<SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
			<main className={classes.Content}>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
