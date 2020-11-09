import React, { useState } from 'react';
import classes from './PortfolioItems.module.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const PortfolioItems = (props) => {
	const [projects] = useState({
		portfolio: {
			name: 'Portfolio',
			github: 'https://github.com/olesia-ag/portfolio-frontend',
			deployed: 'http://olesiag.com',
			description: "The website you're looking at :)",
			role:
				'Its frontend is built with React.js and CSS modules and deployed with a help of Netlify. Backend uses Express.js (Nodemailer in particular) and deployed on Heroku',
			stack: 'React.js, Express.js, CSS Modules',
			pictire: '',
		},
		mindcraft: {
			name: 'MindCraft',
			github: 'https://github.com/Mind-Your-Business/',
			deployed: '',
			description:
				'A gamified mobile app that helps to build better mental habits by completing daily tasks like journaling and meditations',
			role:
				'Created the database schema, established the connection between back-end and front-end via API routing axios and fetch requests. Built an animated meditation component with countdown timer functionality.',
			stack: 'Sequelize, Express.js. React Native, React-Redux',
			picture: '',
		},
		nailArt: {
			name: 'Nail ART',
			github: '',
			deployed: 'https://gh-nail-art.herokuapp.com/',
			description:
				'An ecommerce web application that allows users to pick nail polish and proceed to checkout',
			role:
				'Created shopping cart functionality by establishing the database schema along with back-end and front-end routes.',
			stack: 'Sequelize, Express.js, React.js, React-Redux',
			picture: '',
		},
		bookyourevent: {
			name: 'OMDB Movie search',
			github: 'https://github.com/olesia-ag/movie_awards',
			deployed: 'https://hardcore-panini-9a6955.netlify.app/',
			description:
				"A web application that allows users to search for movie using OMDB API and add them to 'favorites' lists which is limited to five and saved in browser's local Storage",
			role: 'Designed and developed functionality',
			stack: 'React.js, CSS Modules',
			pictire: '',
		},
	});
	const formPortfolioItemsArray = [];
	for (let key in projects) {
		formPortfolioItemsArray.push({ id: key, portfolioItem: projects[key] });
	}
	let items = (
		<div className={classes.PortfolioItems}>
			<div className={classes.Description}>
				I recently joined the{' '}
				<a href='https://astoria.digital/'>Astoria Digital community</a> and
				started working on a muckrock data vizualisation app that will provide
				access to New York state police disciplinary records. More on this will
				be shared soon. <br /> In a meantime, here are some of the projects I
				completed:
			</div>
			{formPortfolioItemsArray.map((project) => (
				<PortfolioItem
					key={project.id}
					name={project.portfolioItem.name}
					description={project.portfolioItem.description}
					role={project.portfolioItem.role}
					stack={project.portfolioItem.stack}
					github={project.portfolioItem.github}
					deployed={project.portfolioItem.deployed}
					picture={project.portfolioItem.picture}
				/>
			))}
		</div>
	);
	return <div> {items} </div>;
};

export default PortfolioItems;
