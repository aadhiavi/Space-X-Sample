import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import img1 from "../../../assets/image1.jpg";
import img2 from "../../../assets/image2.jpg";
import img3 from "../../../assets/image3.jpg";
import img4 from "../../../assets/image4.jpg";
import img5 from "../../../assets/image5.jpg";
import img6 from "../../../assets/image6.jpg";
import img7 from "../../../assets/image7.jpg";
import img8 from "../../../assets/image8.jpg";
import img9 from "../../../assets/image9.jpg";
import img10 from "../../../assets/image10.jpg";
import img11 from "../../../assets/image11.jpg";
import img12 from "../../../assets/image12.jpg";

const Services = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
            <h1 className='heading'>Services</h1>
            <section className='services'>
                <Slider {...settings}>

                    {
                        images.map ((image) => {
                            return (
                                <div key={image}>
                                    <img src={image} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </section>

        </>

    )
}

export default Services