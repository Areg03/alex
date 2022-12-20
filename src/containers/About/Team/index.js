import Image from 'next/image';
import s from './index.module.scss';
import AboutImg from '../../../images/about.png'
import Ramka from '../../../images/ramka.png'
import Partner1 from '../../../images/partner1.png'
import Partner2 from '../../../images/parnter2.png'
import Partner3 from '../../../images/partner3.png'
import Partner4 from '../../../images/parnter4.png'
import { useRouter } from 'next/router';

const Team = () => {
    const {locale} = useRouter()
    const arr = [
        {img: Partner1, id: 1, name: 'Esther Howard'},
        {img: Partner2, id: 2, name: 'Brooklyn Simmons'},
        {img: Partner3, id: 3, name: 'Brooklyn Simmons'},
        {img: Partner4, id: 4, name: 'Jane Cooper'}]
    return (
        <>
        <article className={s.article}>
                <h1 className={s.head}>
                {locale === 'am' ? 'ՄԵՐ ԹԻՄԸ' : 'OUR TEAM'}
                </h1>
            <section className={s.section}>
             {arr.map((i) => (
                <div className={s.image} key={i.id}>
                    <div className={s.mug}>
                <Image src={i.img} width={210} height={347} style={{borderRadius: 20,  opacity: 0.5}} alt={`partner${i.id}`}/>
                </div>
                <h5>{i.name}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
             ))}
            </section>
        </article>
        <article className={s.article1}>
            
            <section className={s.section1}>
                <div className={s.abs1}>
            <Image src={Ramka} width={250} height={450}  alt='Team' />
            </div>
                <div className={s.abs}>
                <Image src={AboutImg} width={250} height={250} style={{borderRadius: '50%'}} alt='Team' />
                </div>
            </section>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
                    est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                    deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
        </article>
        </>
    );
};

export default Team;