
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Aboutus from './Components/Aboutus'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
import Faq from './Components/Faq'
import Footer from '../../Components/Footer/Footer'

import "../Home/HomeStyles.css"

const Home = () => {
  return (
    <dev>
        <Navbar/>
        <Hero/>
        <About/>
        <Aboutus heading="Our missions"/>
        <Services/>
        <CallToAction/>
        <Faq/>
        <Footer/>
    </dev>
  )
}

export default Home