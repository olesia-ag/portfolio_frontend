import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/#about-me'>ABOUT ME</NavigationItem>
		<NavigationItem link='/portfolio' exact>
			PORTFOLIO
		</NavigationItem>
		<NavigationItem link='/#contact-me' exact>
			CONTACT ME
		</NavigationItem>
		<NavigationItem link='/skills' exact>
			THINGS I KNOW
		</NavigationItem>
		<li className={classes.NavigationItem}>
			<a href='https://github.com/olesia-ag' >GITHUB</a>
		</li>
	</ul>
)

export default navigationItems
