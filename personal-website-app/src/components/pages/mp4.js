import React from 'react';
import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';

function Mp4Player() {
	return (
		<>
			<Mp4HeroSection />
			<Mp4DetailsSection />
			<Mp4DemoSection />
		</>
	);
}

function Mp4HeroSection() {
	return (
		<div className='project-hero-container'>
			<h1 className='project-hero-title'>MP4 Player</h1>
			<h2 className='project-hero-subtitle'>Legacy Android Practice</h2>
			<p className='project-hero-details'>
				Java, XML, MVVM
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
					to='https://github.com/galen-f/MP4Player'>
					<i className='bi bi-github'></i> GITHUB{' '}
				</Link>
			    </div>
            </div>
		
			<div className='project-logo'>
				<img
					src='images/mp4player-icon.webp'
					alt='Pinecone Logo'
					className='project-logo'
				/>
			</div>
		</div>
	);
}

function Mp4DetailsSection() {
	return (
		<div
			className='project-details-container'
			id='details'>
			<h1 className='project-details-title'>Details</h1>
			<h2 className='project-details-languages'>
				Java - Android - XML - MVVM - Legacy Design
			</h2>
			<p className='project-details-text'>
                An ultra-stable, no-frills Android MP4 player built entirely in Java and XML—no Jetpack, no Kotlin, no gimmicks. Perfect demonstration for legacy code environments.
				<br />
                <br />
				<ul>
                <li>Rock-solid playback: Foreground service ensures continuous, glitch-free audio, even when the app is backgrounded.</li>
                <li>Intuitive controls: Skip, pause/play, and adjust speed right from the notification drawer.</li>
                <li>Bookmarks on the fly: Save your spot and jump back in with a single tap.</li>
                <li>Lightning-fast scanning: Automatically lists all MP4s in the Music folder</li>
                </ul>
                <br />
                <br />
                ⭐ Awarded 90% in my Mobile Devices Programming coursework for performance, stability, and clean code.

			</p>
		</div>
	);
}

function Mp4DemoSection() {
	return (
		<div
			className='project-demo-container'
			id='demo'>
			<h1 className='project-demo-title'>Demo</h1>
			<h2 className='project-demo-subtitle'>
            The app looks for MP4 files in the music directory of the device. It displays them and the user can select and listen to them. <br />
            The user can switch tracks, make bookmarks, start at bookmarks, change the playback speed, and pause and play tracks. <br />
            The backbone of the app is a foreground service, the user can manipulate playback through the notification presented.<br />
			</h2>
            <img src='images/mp4_player_demo.gif' alt='Pinecone Demo' className='project-demo-img'/>
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

export default Mp4Player;
