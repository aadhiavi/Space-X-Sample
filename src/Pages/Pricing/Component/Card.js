import React from 'react'
import SingleCard from './SingleCard'

const Card = () => {

  const data = [
    {
      heading: "Basix",
      line1: "5 lakhs",
      line2: 'No unlimited access',
      line3: "Limited food",
    },
    {
      heading: "Medium",
      line1: "10 lakhs",
      line2: 'Limited access',
      line3: "Unlimited food",
    },
    {
      heading: "Basix",
      line1: "20 lakhs",
      line2: 'Unlimited access',
      line3: "Unlimited food",
    },

  ]

  return (
    <>
      <h1 className='heading'>Pricing</h1>
      <section className="cards">
        {
          data.map((item) => {
            const {heading, line1, line2, line3 } = item;
            return (
              <SingleCard heading={heading} line1={line1} line2={line2} line3={line3} />
            )
          })
        }
      </section>
    </>
  )
}

export default Card