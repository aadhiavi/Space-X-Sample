import React from 'react'
import video from "../../../assets/vedio57.mp4"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted></video>
        <div className="content">
            <h1>Travel Galaxies</h1>
            <p>Space exploration is a force of nature unto itself that no other force in society can rival</p>
            <div className="buttons">
                <Link to="/Training">Try Now</Link>
                <Link to="/Contact">Launch!</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero