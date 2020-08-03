import React from 'react';
import classes from './Portfolio.module.css';
import PortfolioItems from './PortfolioItems/PortfolioItems';
import Button from '../UI/Button/Button';
import { downloadResume } from '../../shared/utility';

const Portfolio = (props) => {
	return (
		<>
			<div className={classes.Center}>
				<Button clicked={downloadResume}>Donwload Full Resume (pdf)</Button>
			</div>
			<PortfolioItems />
		</>
	);
};

export default Portfolio;
