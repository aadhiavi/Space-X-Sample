import React, { useState } from 'react'

const Faq = () => {

    const data = [
        {
            question: "Question 1?",
            answer: "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments."
        },
        {
            question: "Question 2?",
            answer: "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments."
        },
        {
            question: "Question 3?",
            answer: "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments."
        },
        {
            question: "Question 4?",
            answer: "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments."
        },
        {
            question: "Question 5?",
            answer: "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station. And in 2020, SpaceX became the first private company to take humans there as well. Click through the timeline above to see some of our milestone accomplishments."
        },
    ];

    const [selected, setSelected] = useState(null)
    const handleSelect = (i) => {
        if(selected===i){
            return setSelected(null)
        }

        setSelected(i);
    }

    return (
        <>
            <h1 className='heading'>FAQs</h1>
            <section className="faq">
                <div className="item">
                    {data.map((item, i) => {
                        return (
                            <dev className="wrapper" key={i} onClick={() => handleSelect(i)}>
                                <div className="question">
                                    <h3>{item.question}</h3>
                                    <div className ="box">
                                        <p className={ selected=== i ? "reverse" : "" }>⌵</p>
                                    </div>
                                </div>

                                <div className={selected === i ? "answer show " : "answer"}>
                                    <p>{item.answer}</p>
                                </div>
                            </dev>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default Faq