import Image from "next/image";
import Slider from "react-slick";
import SliderPng from "../../../images/slider.png"
import s from "./index.module.scss"

export const Slick = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div></div>,
      prevArrow: <div></div>,
      
      customPaging: i => (
        <div
          style={{
            color: 'transparent'
          }}
        >
        .
        </div>
      ),
      dotsClass: "slick-dots slick-thumb"
      };

    return (
       <div className={s.all}>
        <Slider {...settings} >
          <div className={s.one}>
            <Image src={SliderPng} layout='fill'/>
          </div>
          <div className={s.one} >
          <Image src={SliderPng} layout='fill'/>
          </div>
          <div className={s.one}>
          <Image src={SliderPng} layout='fill'/>
          </div>
          
        </Slider>
      </div>
        
    )
}