import { useRouter } from 'next/router';
import s from './index.module.scss'
import Ramka from '../../images/ramka.png'
import AboutImg from '../../images/about.png'
import Image from 'next/image';


const ServicesCotnainer = () => {
    const {locale} = useRouter()
    const arr = [
      {id: 1, name: 'ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ'},
      {id: 2, name: 'ԸՆԿԵՐՈՒԹՅԱՆ ԳՐԱՆՑՈՒՄ'},
      {id: 3, name: 'ԿԱԴՐԱՅԻՆ ԳՈՐԾԱՐՔԻ ՎԱՐՈՒՄ'},
      {id: 4, name: 'ԲԱՆԿԱՅԻՆ ԳՈՐԾԱՐՔՆԵՐԻ ՎԱՐՈՒՄ ԷԼԵԿՏՐՈՆԱՅԻՆ ԵՂԱՆԱԿՈՎ'}]

    return (
      <>
        <nav className={s.nav}>          
                <a href='#1'>ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ</a>
                <a href='#2'>ԸՆԿԵՐՈՒԹՅԱՆ ԳՐԱՆՑՈՒՄ</a>           
                <a href='#3'>ԿԱԴՐԱՅԻՆ ԳՈՐԾԱՐՔԻ ՎԱՐՈՒՄ</a>
                <a href='#4'>ԲԱՆԿԱՅԻՆ ԳՈՐԾԱՐՔՆԵՐԻ ՎԱՐՈՒՄ ԷԼԵԿՏՐՈՆԱՅԻՆ ԵՂԱՆԱԿՈՎ</a>
        </nav>
        {arr.map((i, k) => (k/2 === Math.ceil(k/2)) || (k/2 === 0) ? (
          <article className={s.article} key={i.id} id={i.id}>          
          <section className={s.section}>
              <div className={s.abs}>
                  <Image src={Ramka} width={250} height={450}  alt='Team' />
                  <div className={s.abs2}>
                      <Image src={AboutImg} width={250} height={250} style={{borderRadius: '50%'}} alt='Team' />
                  </div>
          </div>
              
          </section>
          <section className={s.section2} id='first'>
              <h1>
              {i.name} 
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
              </ul>
          </section >
      </article>
        )
        :
        (
          <article className={s.article} key={i.id} id={i.id} style={{flexFlow: 'wrap-reverse'}}>          

          <section className={s.section2} id='first'>
              <h1>
              {i.name} 
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Suspendisse varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</li>
              </ul>
          </section >
          <section className={s.section} >
              <div className={s.abs} style={{alignSelf: 'flex-end'}}>
                  <Image src={Ramka} width={250} height={450}  alt='Team' style={{rotate: '180deg'}}/>
                  <div className={s.abs3}>
                      <Image src={AboutImg} width={250} height={250} style={{borderRadius: '50%'}} alt='Team' />
                  </div>
          </div>
              
          </section>
      </article>
        ))}
        
      </>
    );
};

export default ServicesCotnainer;