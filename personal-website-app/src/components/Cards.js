import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these awesome projects!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <div className="cards__items">

                    <CardItem 
                    src="images/img-9.jpg"
                    text="Lavender Launcher"
                    label="Kotlin"
                    path='/lavender'
                    />

                    <CardItem 
                    src="images/img-8.jpg"
                    text="Pebble - Photo Organization"
                    label="Python"
                    path='/pebble'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards