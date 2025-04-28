import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards" id="portfolio">
        <h1>Portfolio</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <div className="cards__items">

                    <CardItem 
                    src="images/lavender-icon.webp"
                    text="Lavender Launcher"
                    details="Custom Android Launcher focusing on non-addictive use"
                    label="Kotlin"
                    path='/Lavender'
                    />

                    <CardItem 
                    src="images/pinecone-icon-bg.webp"
                    text="Pinecone"
                    details="Desktop app which displays photos in a user-friendly manner"
                    label="JavaScript"
                    path='/Pinecone'
                    />

                    <CardItem
                    src='images/wip.jpg'
                    text="More coming soon!"
                    label="Various"
                    path='/wip'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards