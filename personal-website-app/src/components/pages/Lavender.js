import React, { useEffect } from 'react';
import '../../App.css';
import './lavender.css';
import { Link } from 'react-router-dom';

function Lavender() {
	// Gave up css parallax for this simpler approach
	useEffect(() => {
		document.body.style.backgroundColor = '#0D0D0D'; // Set the bg color to match the image

		const bg = document.querySelector('.parallax-bg');
		const onScroll = () => {
			const offset = window.pageYOffset;
			// move background at half the scroll speed
			bg.style.transform = `translateY(${offset * 0.45}px)`;
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			document.body.style.backgroundColor = 'transparent'; // Reset bg color for the other pages
		};
	}, []);

	return (
		<>
			<div className='parallax-bg' />
			<div className='parallax-content'>
				<LavenderHeroSection />
				<LavenderDetailsSection />

				<LavenderDemoSection />
			</div>
		</>
	);
}

function LavenderHeroSection() {
	return (
		<div className='lavender-hero-container'>
			<h1 className='lavender-hero-title'>Lavender</h1>
			<h2 className='lavender-hero-subtitle'>Digital Self Control Tool</h2>
			<p className='lavender-hero-details'>
				Kotlin - Android - UX / UI - Room / SQLite - Jetpack - MVVM
			</p>
			<div className='lavender-btns-container'>
				<div className='lavender-hero-btns'>
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
						to='https://github.com/galen-f/pinecone'>
						<i className='bi bi-github'></i> GITHUB{' '}
					</Link>
				</div>
			</div>

			<div className='lavender-logo'>
				<img
					src='images/lavender-icon.webp'
					alt='Lavender Logo'
					className='lavender-logo'
				/>
			</div>
		</div>
	);
}

function LavenderDetailsSection() {
	return (
		<div
			className='lavender-details-container'
			id='details'>
			<h1 className='lavender-details-title'>Details</h1>
			<h2 className='lavender-details-languages'>
				Kotlin - SQLite - Jetpack - Android
			</h2>
			<h2 className='lavender-details-languages'>
				Healthy Design Principles - MVVM - UX / UI
			</h2>
			<p className='lavender-details-text'>
				Lavender is an Android Launcher app, effectively a home app. This was my
				dissertation project and was paired with a behavioral psychology paper
				reviewing the addictive design tactics employed by many modern apps. Lavender
				was designed to encourage intentional engagement and to promote healthy
				smartphone interactions.
				<br />
				<br />
				It includes features like screen-time tracking, monochrome app icons,
				and a minimalist UI. Initial user tests conducted as part of the
				dissertation were promising in regards to how effectively it accomplished
				it's screen time-reduction goals.
				<br />
				<br />
				The project acquainted me with the Android development stack and
				high-level UI design principles. Healthy smartphone usage is a topic I
				am extremely passionate about and hope to explore more thoroughly in the
				future.
			</p>
		</div>
	);
}

function LavenderDemoSection() {
	return (
		<div
			className='lavender-demo-container'
			id='demo'>
			<h1 className='lavender-demo-title'>Demo</h1>
			<h2 className='lavender-demo-subtitle'>
				Lavender is a Digital Self Control Tool aimed at reducing compulsive smartphone interactions. It's major features include:
			</h2>
			<div className='lavender-demo-sub-container'>
				<p className='lavender-demo-details'>
					Minimal UI
                    <br />
                    Text-Based folders
                    <br />
                    Keeps Distractions Out of Sight
				</p>
				<img
					src='images/lavender-folders.gif'
					alt='Lavender Demo Video 2'
					className='lavender-demo-img'
					loading='lazy'
				/>
			</div>
			<div className='lavender-demo-sub-container'>
				<img
					src='images/lavender-dark-mode.gif'
					alt='Lavender Demo Video 5'
					className='lavender-demo-img'
					loading='lazy'
				/>
				<p className='lavender-demo-details'>
					Highly Customizable
                    <br />
                    Integrates with Material You
				</p>
			</div>
			<div className='lavender-demo-sub-container'>
				<p className='lavender-demo-details'>
					Deep Integration with Android
                    <br />
                    Allows for Package Manipulation
				</p>
				<img
					src='images/lavender-uninstall.gif'
					alt='Lavender Demo Video 1'
					className='lavender-demo-img'
					loading='lazy'
				/>
			</div>

			<div className='lavender-demo-sub-container'>
				<img
					src='images/lavender-high-friction.gif'
					alt='Lavender Demo Video 3'
					className='lavender-demo-img'
					loading='lazy'
				/>
				<p className='lavender-demo-details'>
					Screen-Time Reducing Features
                    <br />
                    Increased Friction for App Launches
				</p>
			</div>

			<div className='lavender-demo-sub-container'>
				<p className='lavender-demo-details'>
					Monochrome App icons
                    <br />
                    Reduces Visual Distractions
                    <br />
                    Healthier Phone Use
				</p>
				<img
					src='images/lavender-grey-scale.gif'
					alt='Lavender Demo Video 4'
					className='lavender-demo-img'
					loading='lazy'
				/>
			</div>

			<div className='lavender-demo-sub-container'>
				<img
					src='images/lavender-appdock.gif'
					alt='Lavender Demo Video 6'
					className='lavender-demo-img'
					loading='lazy'
				/>
				<p className='lavender-demo-details'>
					Additional Customization Options
                    <br />
                    Customizable App Dock
				</p>
			</div>
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

export default Lavender;
