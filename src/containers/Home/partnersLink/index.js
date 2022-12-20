import Image from 'next/image';
import s from './index.module.scss';
import SliderPng from "../../../images/slider.png"
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import { PartnersData } from '../../../utils/data';

const PartnersLink = () => {
    const {locale} = useRouter()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div></div>,
      prevArrow: <div></div>,
      };
    return (
        <>
        <article className={s.article}>    
            <section className={s.section}>
                <h1>{locale === 'am' ? 'ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ' : 'OUR PARTNERS'}</h1>
                <Slider {...settings}>
                    {PartnersData.map((i) => (
                        <div key={i.id}>       
                                <Image src={i.img} width={210} height={347} style={{borderRadius: 20,  opacity: 0.5}} alt={i.name}/>                                  
                        </div>
                    ))}         
                </Slider>

            </section >
        </article>
        </>
    );
};

export default PartnersLink;