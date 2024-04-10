import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Model = ({handleClick}) => {
    return (
        <div className='overlay'>
            <div className="model">
                <div className="cross">
                <FaTimes style={{ color: "white" }} size={25} onClick={handleClick}/>
                </div>
                <h2>Building on the achievements of Falcon 9 and
                    Falcon Heavy, SpaceX is working on a next
                    generation of fully reusable launch vehicles
                    that will be the most powerful ever built,
                    capable of carrying humans to Mars and other
                    destinations in the solar system.</h2>
            </div>
        </div>
    )
}

export default Model