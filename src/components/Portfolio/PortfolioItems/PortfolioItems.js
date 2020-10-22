import React, { useState } from 'react';
import classes from './PortfolioItems.module.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const PortfolioItems = (props) => {
	const [projects] = useState({
		bookyourevent: {
			name: 'Book Your Event – Solo Developer ',
			github: 'https://github.com/olesia-ag/bookyourevent',
			deployed: 'http://book-your-event.herokuapp.com',
			description: 'A property management web application',
			role:
				'Designed and developed functionality to allow users to check availability of the space and submit a form to book the event. Built schemas in database, associations between events and venues, created functional UI with calendar and form submission component',
			stack: 'Sequelize, Express.js, React.js, React-Redux.',
			pictire: '',
		},
		mindcraft: {
			name: 'MindCraft – Software Engineer',
			github: 'https://github.com/Mind-Your-Business/',
			deployed: '',
			description:
				'A gamified app that helps to build better mental habits by completing daily tasks like journaling and meditations',
			role:
				'Created the database schema, established the connection between back-end and front-end via API routing axios and fetch requests. Built an animated meditation component with countdown timer functionality.',
			stack: 'Sequelize, Express.js. React Native, React-Redux',
			picture: '',
		},
		nailArt: {
			name: 'Nail ART - Software Engineer',
			github: '',
			deployed: 'https://gh-nail-art.herokuapp.com/',
			description:
				'An ecommerce web application for all of your nail polish needs',
			role:
				'Created shopping cart functionality by establishing the database schema along with back-end and front-end routes.',
			stack: 'Sequelize, Express.js, React.js, React-Redux',
			picture: '',
		},
	});
	const formPortfolioItemsArray = [];
	for (let key in projects) {
		formPortfolioItemsArray.push({ id: key, portfolioItem: projects[key] });
	}
	let items = (
		<div className={classes.PortfolioItems}>
      {formPortfolioItemsArray.map((project) =>
      (
				<PortfolioItem key={project.id}
					name={project.portfolioItem.name}
					description={project.portfolioItem.description}
					role={project.portfolioItem.role}
					stack={project.portfolioItem.stack}
					github={project.portfolioItem.github}
					deployed={project.portfolioItem.deployed}
					picture={project.portfolioItem.picture}
				/>
      )
      )}
		</div>
	);
	return <div style={{'display': 'flex', 'justifyContent': 'center'}}> {items} </div>;
};

export default PortfolioItems;
