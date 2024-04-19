import React from 'react'
import { Routes ,Route  } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
//fragment will not affect the css, div can
const LandingPage = () => {
  return (

//todo: assignment: add subroutes for landing page 
    <div>
        <Routes>

          <Route path="/" element={<MainComponent />} />

        </Routes>
    </div>

    
  )
}

export default LandingPage;