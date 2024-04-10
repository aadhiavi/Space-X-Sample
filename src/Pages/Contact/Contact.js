import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import Form from "./Component/Form"
import "./ContactStyle.css"

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Header heading="Contact Page"/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact