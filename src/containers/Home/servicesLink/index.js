import Image from 'next/image';
import s from './index.module.scss';
import AboutImg from '../../../images/about.png'
import Ramka from '../../../images/ramka.png'
import Lservices1 from '../../../images/lservices1.png'
import Lservices2 from '../../../images/lservices2.png'
import Lservices3 from '../../../images/lservices3.png'
import Lservices4 from '../../../images/lservices4.png'
import { useRouter } from 'next/router';
import Link from 'next/link';


const ServicesLink = () => {

    const {locale} = useRouter()
    const arr = [
        {img: Lservices1, title:'ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ', id: 1, link: '#1'},
        {img: Lservices2, title: 'ԸՆԿԵՐՈՒԹՅԱՆ ԳՐԱՆՑՈՒՄ', id: 2, link: '#2'},
        {img: Lservices3, title: 'ԿԱԴՐԱՅԻՆ ԳՈՐԾԱՐՔԻ ՎԱՐՈՒՄ', id: 3, link: '#3'},
        {img: Lservices4, title: 'ԲԱՆԿԱՅԻՆԳՈՐԾԱՐՔԵՐԻ ՎԱՐՈՒՄ ԷԼԵԿՏՐՈՆԱՅԻՆ ԵՂԱՆԱԿՈՎ', id: 4, link: '#4'}]
    return (
        <>
        <article className={s.article}>
                <h1 className={s.head}>
                {locale === 'am' ? 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ' : 'SERVICES'}
                </h1>
            <section className={s.section}>
             {arr.map((i) => (
                <div className={s.image} key={i.id}>
                    <div className={s.mug}>
                <Image src={i.img} width={210} height={347} style={{borderRadius: 20,  opacity: 0.5}} alt={`partner${i.id}`}/>
                </div>
                <h5>{i.title}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <Link href={`/services${i.link}`} scroll={false}><button>{locale === 'am' ? 'ՏԵՍՆԵԼ ԱՎԵԼԻՆ' : 'SEE MORE'}</button></Link>
                </div>
             ))}
            </section>
        </article>
        </>
    );
};

export default ServicesLink;