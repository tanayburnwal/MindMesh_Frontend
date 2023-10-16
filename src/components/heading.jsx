import React from 'react'
import './heading.css'
import age from '../images/age.jpeg'
const Heading = () => {
  return (
    <div className='heading_component'>
    <div className=''>
        <h1 className='heading'>Lets Check The Price 💸</h1>
        <p className='paragraph'>Introducing our cutting-edge predictive model! 💫 Get ready for precise estimates of healthcare 
        expenses like never before. 🌟 This model, fueled by data analytics and machine learning magic, delivers spot-on cost 
        predictions for medical treatments. ✨ It's a game-changer, bringing transparency and efficiency to healthcare, benefiting 
        everyone from patients to providers, insurers, and policymakers. 🚀 Say hello to informed healthcare decisions and optimized 
        resource allocation! 💡
        </p>
        <img src={`${age}`}/>
    </div>
    </div>
  )
}

export default Heading
