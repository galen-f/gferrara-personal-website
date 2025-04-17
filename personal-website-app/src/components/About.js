import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
        <div className="about-container">

            <div className="about-left">
                <div className="about-image">
                    <img src="images/about.jpeg" alt="Me!"/>
                </div>
            </div>

            <div className="about-right">
                <div className="about-title">
                        <h2>Hi! My name is Galen Ferrara, I am a software developer and a graduating senior at the University of Nottingham.</h2>
                    </div>

                    <div className="about-text">
                    <p>
                        I grew up a gamer, the kid who spent his weekends building PCs and making weird little projects with my friends. That mentality hasn’t left me. I ended up studying computer science at the University of Nottingham. I have always been interested in the addictive aspects of smartphones and spent my dissertation exploring how to design more user friendly apps.
                    </p>
                    <p>
                        Alongside tech, I’ve always been into photography. I grew up near a national park, I spent a lot of time there wandering the hiking paths and taking photos of whatever caught my eye. That hobby still sticks, every photo on this site was taken by me and usually, my trusty Nikon Z6.
                    </p>
                    <p>
                    I am also an avid athlete. I played Lacrosse since I was 7, up to university. I won my state championship in archery, and earned the highest NRA marksmanship ranking for .22 rifles. You can find me in the gym most days, and I’m always looking to pick up a new sport.
                    </p>
                    <p>
                        I am always open to new projects. If youve got an idea or an opportunity, whether it’s creative or technical, drop me a message, Email, text, Instagram, whatever works. I’d love to hear from you :)
                    </p>
                </div>
            </div>        
        
        </div>  
    </div>
    
    
  )
}

export default About