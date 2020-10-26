import React from 'react';
import classes from './Portfolio.module.css';
import PortfolioItems from './PortfolioItems/PortfolioItems';
import Button from '../UI/Button/Button';
import { downloadResume } from '../../shared/utility';

const Portfolio = (props) => {
	return (
		<div className={classes.Portfolio}>
		<span><strong>Projects:</strong></span>
			<PortfolioItems />
		</div>
	);
};

export default Portfolio;
