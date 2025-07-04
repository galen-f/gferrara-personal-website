import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';

function Orderbookpredictor() {
	return (
		<>
			<OrderbookpredictorHeroSection />
			<OrderbookpredictorDetailsSection />
			<OrderbookpredictorDemoSection />
		</>
	);
}

function OrderbookpredictorHeroSection() {
	return (
		<div className='orderbookpredictor project-hero-container'>
			<h1 className='project-hero-title'>Order Book Predictor</h1>
			<h2 className='project-hero-subtitle'>
				AI Price Direction Predicting Algorithm
			</h2>
			<p className='project-hero-details'>
				Machine Learning, Python, Pandas, MatPlotLib, Quantitative Research
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
						onClick={ScrollToDemo}>
						{' '}
						DEMO{' '}
					</Link>

					<Link
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
						target='_blank'
						to='https://github.com/galen-f/OrderBookPredictor'>
						<i className='bi bi-github'></i> GITHUB{' '}
					</Link>
				</div>
			</div>

			<div className='project-logo'>
				<img
					src='images/orderbookpredictor-icon.webp'
					alt='Order Book Predictor Logo'
					className='project-logo'
				/>
			</div>
		</div>
	);
}

function OrderbookpredictorDetailsSection() {
	return (
		<div
			className='project-details-container'
			id='details'>
			<h1 className='project-details-title'>Details</h1>
			<h2 className='project-details-languages'>
				Python - SkiKitLearn - Pandas - MatPlotLib - Quantitative Research
			</h2>
			<h2 className='project-details-languages'>
				Machine Learning - HFT - Data Analysis - Order Books
			</h2>
			<p className='project-details-text'>
				OrderBookPredictor is a machine learning project that predicts
				short-term price direction for stocks using high-frequency order book
				data. Leveraging real millisecond-level data from five major equities
				and over 200,000 samples.  <br />
				<br />
				The project engineers microstructure features
				and trains a Random Forest classifier to identify whether prices will
				move up, down, or remain unchanged across various time horizons. The
				resulting models achieve up to 83.9% accuracy, showcasing the potential
				of market microstructure analytics in quantitative finance and
				high-frequency trading research.
				<br />
				<br />
			</p>
		</div>
	);
}

function OrderbookpredictorDemoSection() {
	return (
		<div
			className='project-demo-container'
			id='demo'>
			<h1 className='project-demo-title'>Demo</h1>
			<h2 className='project-demo-subtitle'>
				The program outputs a visualization to help analyze the machine learning algorithm. It includes detailed analysis of the model's strengths and weaknesses. Additionally it provides an interesting analysis of how different time horizons effect the output. Additional discussion can be found on the GitHub page.
			</h2>
			<img
				src='images/Prediction_Output_Demo.webp'
				alt='Output of the algorithm'
				className='project-demo-img'
			/>
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

export default Orderbookpredictor;
