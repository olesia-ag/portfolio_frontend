import React from 'react';
import classes from './Portfolio.module.css';
import PortfolioItems from './PortfolioItems/PortfolioItems';

const Portfolio = (props) => {
	return (
		<div className={classes.Portfolio}>
			<PortfolioItems />
		</div>
	);
};

export default Portfolio;
