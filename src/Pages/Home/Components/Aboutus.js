import React from 'react'

const Aboutus = ({heading}) => {
    return (
       <>
       <h1 className='heading'>{heading}</h1>
       <section className="aboutus">
            <img src={require("../../../assets/Aboutus img.jpg")} alt="" />
            <div className="content1">
                <h2>2005-2009:Falcon 1 and first orbital launches</h2>
                <p>SpaceX developed its first orbital launch vehicle,
                    the Falcon 1, with internal funding. The Falcon 1 was 
                    an expendable two-stage-to-orbit small-lift launch vehicle. 
                    The total development cost of Falcon 1 was approximately 
                    $90 million to $100 million. The Falcon rocket series was named 
                    after Star Wars's Millennium Falcon fictional spacecraft.</p>
                <p>The financial situation started to turn around with the first 
                    successful launch achieved on the fourth attempt on 28 September 2008.
                     Musk split his remaining $30 million between SpaceX and Tesla, 
                     and NASA awarded the first Commercial Resupply Services contract
                      awarding $1.6 billion to SpaceX in December, thus financially saving the company.</p>
            </div>
        </section>
       </>
    )
}

export default Aboutus