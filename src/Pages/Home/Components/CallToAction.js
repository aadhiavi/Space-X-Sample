import React, { useState } from 'react'
import Model from './Model'
import video from "../../../assets/vedio58.mp4"

const CallToAction = () => {

    const [model, setModel] = useState(false)


    const handleClick = () => {
        setModel(!model)

    }

    return (
        <>
            <div className="section">
            <video src={video} autoPlay loop muted></video>    
            <section className='call-to-action'>
                <h2>Hurry Up Book Your Tickets!</h2>
                <button onClick={handleClick} >Know more!</button>
            </section>

            {
                model && <Model handleClick={handleClick}/> 
            }
            </div>

        </>
    )
}

export default CallToAction