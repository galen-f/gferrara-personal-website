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
                    src="images/lavender-icon.jpg"
                    text="Lavender Launcher"
                    label="Kotlin"
                    path='/wip'
                    />

                    <CardItem 
                    src="images/pinecone-icon.jpg"
                    text="PineCone - Photo Organization"
                    label="Python"
                    path='/wip'
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