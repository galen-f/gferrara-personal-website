import React, { useState, useEffect, useRef } from 'react';
import './pages/lavender.css';

const slidesData = [
	{
		src: 'videos/lavender_demo/lavender-folders.mp4',
		text: 'Interface',
		details:
			'Lavender focuses on a minimalist, text-based interface to reduce distractions. While app icons still exist, they are hidden in folders while on the home screen. Folders can be added or removed with long taps.',
	},
	{
		src: 'videos/lavender_demo/lavender-dark-mode.mp4',
		text: 'Material 3 Integration',
		details: 'A focus on integration with android promotes high cusomizability, allowing users to adjust the colors of the app based on the wallpaper.',
	},
	{
		src: 'videos/lavender_demo/lavender-uninstall.mp4',
		text: 'Uninstalling Apps',
		details: 'Uninstalling apps works exactly as users are used to on standard launchers, simply long tap the app you want to get rid of and the option is presented.',
	},
	{
		src: 'videos/lavender_demo/lavender-high-friction.mp4',
		text: 'Increased Friction',
		details: 'In order to promote intentional engagement, Lavender includes a number of science-based options which can be enabled to help users manage their screen time. One of these is an extra pop-up when openning an app.',
	},
	{
		src: 'videos/lavender_demo/lavender-grey-scale.mp4',
		text: 'Reduced Visual Stimulation',
		details: 'A futher screen-time reducing option allows users to turn their app icons monochrome. This decreases harmful visual stimulation without reducing the familiarity of wallpaper, increasing adoption.',
	},
	{
		src: 'videos/lavender_demo/lavender-appdock.mp4',
		text: 'App Dock',
		details: 'The app is also home to many standard features of Android launchers, such as an adjustable app dock. This is a standard feature of Android and is included to ensure users are not missing out on any features they are used to.',
	},
];

export default function DemoSlides() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef = useRef(null);
	const delay = 25000; // 25 seconds

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
			);
		}, delay);

		return () => {
			resetTimeout();
		};
	}, [currentIndex]);

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	const goToPrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
	};

	return (
		<div
			className='lavender-slideshow-container'
			id='demo'>
			<h1 className='lavender-demo-title'>Demo</h1>

			<div className='lavender-demo-subtitle'>
				Explore Lavender's key features in action.
			</div>

			<div className='lavender-demo-container'>
        <div className='prev' onClick={goToPrev}> &#10094; </div>
				<div className='lavender-demo-sub-container'>
					

					{slidesData.map((slide, index) => (
						<div
							className={`lavender-slide ${
								index === currentIndex ? 'slide' : ''
							}`}
							key={index}
							style={{ display: index === currentIndex ? 'flex' : 'none' }}>
							<video
								src={slide.src}
								alt='Demo Slide'
								className='lavender-demo-img'
								autoPlay
								loop
								muted
								loading='lazy'
							/>
							<div className='lavender-demo-details'>
								<h2>{slide.text}</h2>
                <br />
								<p>{slide.details}</p>
							</div>
						</div>
					))}
					
				</div>
        <div className='next' onClick={goToNext}> &#10095; </div>
			</div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
					{slidesData.map((_, idx) => (
						<span
							key={idx}
							className='dot'
							onClick={() => goToSlide(idx)}
							style={{
								backgroundColor: idx === currentIndex ? '#717171' : '#bbb',
							}}></span>
					))}
				</div>
		</div>
	);
}
