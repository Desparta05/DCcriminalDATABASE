import React from 'react'
import { Button } from './Button'
import './MainSection.css';

function MainSection () {
    return (
        <div className='main-container'>
            <video src= "/videos/NewDC_intro.mp4" autoPlay loop muted/>
            <h1>Welcome</h1>
            <p>Time to save the world</p>
            <div className="main-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Get Started
                </Button>
            </div>
        </div>

    )

    
}

export default MainSection;