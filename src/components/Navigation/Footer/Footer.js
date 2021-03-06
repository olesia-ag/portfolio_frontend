import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<div className={classes.Footer}>
			<span>designed and developed by Olesia Guidi</span>
			<span>
				photo by{' '}
				<a href='https://unsplash.com/@lieselot_dalle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
					Lieselot. Dalle
				</a>
				on{' '}
				<a href='https://unsplash.com/s/photos/black-and-white-flower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
					Unsplash
				</a>
			</span>
		</div>
	);
};

export default Footer;
