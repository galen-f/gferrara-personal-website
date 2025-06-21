import React from 'react';
import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';

function Backtester() {
	return (
		<>
			<BacktesterHeroSection />
			<BacktesterDetailsSection />
			<BacktesterDemoSection />
		</>
	);
}

function BacktesterHeroSection() {
	return (
		<div className='backtester project-hero-container'>
			<h1 className='project-hero-title'>Backtester</h1>
			<h2 className='project-hero-subtitle'>Trading Strategy Backtesting Tool</h2>
			<p className='project-hero-details'>
				Python, Pandas, MatPlotLib, Quantitative Finance
			</p>
            <div className="project-btns-container">
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
					onClick={ScrollToDemo}>
					{' '}
					DEMO{' '}
				</Link>

				<Link
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					target='_blank'
					to='https://github.com/galen-f/Algorithmic-Backtester'>
					<i className='bi bi-github'></i> GITHUB{' '}
				</Link>
			    </div>
            </div>
		
			<div className='project-logo'>
				<img
					src='images/backtester-icon.webp'
					alt='Backtester Logo'
					className='project-logo'
				/>
			</div>
		</div>
	);
}

function BacktesterDetailsSection() {
	return (
		<div
			className='project-details-container'
			id='details'>
			<h1 className='project-details-title'>Details</h1>
			<h2 className='project-details-languages'>
				Python - Pandas - MatPlotLib - Quantitative Finance
			</h2>
			<h2 className='project-details-languages'>
				Backtesting - Trading Strategies - Data Visualization
			</h2>
			<p className='project-details-text'>
				This backtester is a Python-based tool designed to test and visualize trading strategies using historical data. It leverages the Pandas library for data manipulation and MatPlotLib for visualizing the results of various trading strategies.
				<br />
                <br />
                Among the trading strategies included are: Moving Average Crossover, Buy and Hold, MACD, and a work in progress improved MACD strategy. Each strategy is tested against historical stock data, and the results are visualized to help users understand the performance of their strategies over time.
				
                <br />
                <br />
                

			</p>
		</div>
	);
}

function BacktesterDemoSection() {
	return (
		<div
			className='project-demo-container'
			id='demo'>
			<h1 className='project-demo-title'>Demo</h1>
			<h2 className='project-demo-subtitle'>
				Following are screenshots of the strategy visualization in action, showcasing the results of different trading strategies.
			</h2>
            <h2 className='project-demo-subtitle'>This is the moving average crossover strategy</h2>
            <img src='images/MACrossover_Strat.webp' alt='Backtester Demo' className='project-demo-img'/>
            <br/>
            <h2 className='project-demo-subtitle'>This is the MACD strategy</h2>
            <img src='images/MACD_Strat.webp' alt='Backtester Demo' className='project-demo-img'/>
		</div>
	);
}

function ScrollToDetails() {
	const detailsSection = document.getElementById('details');
	if (detailsSection) {
		detailsSection.scrollIntoView({ behavior: 'smooth' });
	}
}

function ScrollToDemo() {
	const demoSection = document.getElementById('demo');
	if (demoSection) {
		demoSection.scrollIntoView({ behavior: 'smooth' });
	}
}

export default Backtester;
