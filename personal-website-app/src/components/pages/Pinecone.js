import React from 'react';
import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';

function Pinecone() {
	return (
		<>
			<PineconeHeroSection />
			<PineconeDetailsSection />
			<PineconeDemoSection />
		</>
	);
}

function PineconeHeroSection() {
	return (
		<div className='pinecone project-hero-container'>
			<h1 className='project-hero-title'>Pinecone</h1>
			<h2 className='project-hero-subtitle'>Photo Organization Tool</h2>
			<p className='project-hero-details'>
				JavaScript, Node.js, Electron, Express, SQLite
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
					to='https://github.com/galen-f/pinecone'>
					<i className='bi bi-github'></i> GITHUB{' '}
				</Link>
			    </div>
            </div>
		
			<div className='project-logo'>
				<img
					src='images/pinecone-icon-bg.webp'
					alt='Pinecone Logo'
					className='project-logo'
				/>
			</div>
		</div>
	);
}

function PineconeDetailsSection() {
	return (
		<div
			className='project-details-container'
			id='details'>
			<h1 className='project-details-title'>Details</h1>
			<h2 className='project-details-languages'>
				JavaScript - HTML - CSS - Node.js - Electron - Express - SQLite
			</h2>
			<h2 className='project-details-languages'>
				API creation - Large Data Management - HCI - Desktop App Creation
			</h2>
			<p className='project-details-text'>
				Pinecone is a desktop app built with Electron that allows users to
                select a local folder of images and videos, view them as thumbnails and
                conveniently search through their collection. Internally it utilizes an
                Express server to scan the folder, populate an in-memory SQLite
                database, and serve both original resolution files and 200x200
                thumbnails.
				<br />
                <br />
				This project was initially designed during my internship at Granite
                Associates. A client organization was looking for a cheap alternative to
                expensive web-based photo organization systems. They had roughly 2 TB of
                photos on a shared hard-drive they needed to be able to search and
                organize. They tasked me with building this system. 
                <br />
                <br />
                The first prototype was designed using a Python Flask API and some basic JavaScript, with a
                very heavy SQL database. When I returned to this project, about two
                years later, looking to add it to my portfolio, I switched this to use a
                much lighter system, with an Express API instead of Flask, and relying
                on JavaScript much more. The database was switched to in-memory SQL.
                This of course meant no real persistence, but lowered the memory costs
                so it would be more accessible to individuals. The system could be easily
                returned to a persistence library by switching to normal SQLite, this
                would allow you to add tags and other organization systems.
                Additionally, rather than a web-app hosted on the company servers, the
                Electron was used to turn the system into a desktop app.

			</p>
		</div>
	);
}

function PineconeDemoSection() {
	return (
		<div
			className='project-demo-container'
			id='demo'>
			<h1 className='project-demo-title'>Demo</h1>
			<h2 className='project-demo-subtitle'>
				Pinecone can be used to select a folder of images or videos and display 
                them in a more accessible manner than the standard file-viewer.
			</h2>
            <img src='images/pinecone-demo.gif' alt='Pinecone Demo' className='project-demo-img'/>
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

export default Pinecone;
