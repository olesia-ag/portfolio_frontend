import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const navigationItem = (props) => {
	let link = props.link
	let finalAddress = null
	if (link[1] === '#') {
		finalAddress = <HashLink to={`${link}`}>{props.children}</HashLink>
	}
	 else {
		finalAddress = (
			<NavLink
				to={`${link}`}
				exact={props.exact}
			>
				{props.children}
			</NavLink>
		)
	}
	return <li className={classes.NavigationItem}>{finalAddress}</li>
}
export default navigationItem
