import React from 'react';
import './About.css';

function About() {
	return (
		<div className='about'>
			<div className='about-container'>
				<div className='about-left'>
					<div className='about-image'>
						<img
							src='images/HeadShot-2.webp'
							alt='Me!'
						/>
					</div>
				</div>

				<div className='about-right'>
					<div className='about-title'>
						<h2>
							Hi! I'm Galen Ferrara, a software developer, tinkerer, and grad
							from the University of Nottingham
						</h2>
						
					</div>

					<div className='about-text'>
						<p>
							I got into coding through a love of gaming and building PCs, and
							never stopped building. My projects range from android apps to financial simulations. 
							I am always looking for ideas that blend utility and a
							little fun.
						</p>
						<p>
							Outside of tech, I am into photography, and sports, life archer,
							lacrosse, and more recently tennis. Every photo on this site was taken by me and
							my Nikon Z6.
						</p>
						<p>
							Additionally, I have a degree in mathematics, and love
							quantitative tasks. I am currently trying to build my skills in
							that field and am open to a career switch.
						</p>
						<p>
							If you have an idea for a project, or have a vacancy in your
							company, please reach out!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
