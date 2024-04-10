import React from 'react'

const Form = () => {
  return (
    <dev className="signup">
    <h1 className='heading'>Sign up</h1>
    <section className="container">
    <form>
        <div className="field">
            <p>Name :</p>
            <input type="text" placeholder='Enter your name' />
        </div>
        <div className="field">
            <p>Email :</p>
            <input type="email" placeholder='Enter your email '/>
        </div>
        <div className="field">
            <p>Phone No :</p>
            <input type="text" placeholder='Enter your number' />
        </div>
        <div className="field">
            <p>Password :</p>
            <input type="Password" placeholder='Create a password'/>
        </div>
        <button className='btn'>Submit</button>
    </form>
    </section>
    
    </dev>
  )
}

export default Form