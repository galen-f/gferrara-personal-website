import React, { useEffect } from 'react';
import '../../App.css';
import DemoSlides from '../DemoSlides';
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
				<DemoSlides />
				{/* <LavenderDemoSection /> */}
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
						to='https://github.com/galen-f/Lavender-Launcher'>
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
				reviewing the addictive design tactics employed by many modern apps.
				Lavender was designed to encourage intentional engagement and to promote
				healthy smartphone interactions.
				<br />
				<br />
				It includes features like screen-time tracking, monochrome app icons,
				and a minimalist UI. Initial user tests conducted as part of the
				dissertation were promising in regards to how effectively it
				accomplished it's screen time-reduction goals.
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
