import React from 'react';
import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';

function TradingSimulator() {
	return (
		<>
			<TradingSimulatorHeroSection />
			<TradingSimulatorDetailsSection />
			<TradingSimulatorDemoSection />
		</>
	);
}

function TradingSimulatorHeroSection() {
	return (
		<div className='trading project-hero-container'>
			<h1 className='project-hero-title'>Trading Simulator</h1>
			<h2 className='project-hero-subtitle'>
				Financially Accurate Trading Environment
			</h2>
			<p className='project-hero-details'>
				C++ - Multithreading - Factory Design Pattern - Quantitative Reasoning
			</p>
			<div className='project-btns-container'>
				<div className='project-hero-btns'>
					<Link
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
						onClick={ScrollToDetails}>
						{' '}
						DETAILS{' '}
					</Link>

					<Link
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
						target='_blank'
						to='https://github.com/galen-f/trading-simulator'>
						<i className='bi bi-github'></i> GITHUB{' '}
					</Link>
				</div>
			</div>

			<div className='project-logo'>
				<img
					src='images/Stock-Sim-Icon.webp'
					alt='Trading Simulator Logo'
					className='project-logo'
				/>
			</div>
		</div>
	);
}

function TradingSimulatorDetailsSection() {
	return (
		<div
			className='project-details-container'
			id='details'>
			<h1 className='project-details-title'>Details</h1>
			<h2 className='project-details-languages'>
				C++ - Multithreading - Quantitative Reasoning
			</h2>
			<h2 className='project-details-languages'>
				Price-Time Order Strategy - Order Books - Factory Design Pattern
			</h2>
			<p className='project-details-text'>
				Trading Simulator is a C++ application designed to provide a realistic
				trading environment for users. It incorporates advanced features such as
				multithreading to handle multiple trading operations simultaneously, and
				utilizes the Factory Design Pattern to create various trading
				strategies.
				<br />
				<br />
				The simulator is intended to showcase my skills, not only as a
				developer, but a mathmetician and quanititative analyst. As I have a
				degree in mathematics, I feel this aspect of my skillset is often
				overlooked. I love number crunching, and while this is still a project
				in progress, a short peek at the github page hopefully helps you to
				understand my diverse skillset.
                <br />
                <br />
				This project is still a work in progress and evolves over time. I intend
				to add a GUI, testing strategies like a Monte Carlo simulation, and
				allow more user input.
				<br />
                <br />
			</p>
		</div>
	);
}

function TradingSimulatorDemoSection() {
	return <br></br>;
}

function ScrollToDetails() {
	const detailsSection = document.getElementById('details');
	if (detailsSection) {
		detailsSection.scrollIntoView({ behavior: 'smooth' });
	}
}

export default TradingSimulator;
