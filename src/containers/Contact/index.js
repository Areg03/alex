import Image from 'next/image';
import s from './index.module.scss';
import AboutImg from '../../images/about.png'
import Ramka from '../../images/ramka.png'

import { useRouter } from 'next/router';

const ContactUs = () => {
    const {locale} = useRouter()
    const arr = [
        {id: 1, name: 'ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ'},
        {id: 2, name: 'ԸՆԿԵՐՈՒԹՅԱՆ ԳՐԱՆՑՈՒՄ'},
        {id: 3, name: 'ԿԱԴՐԱՅԻՆ ԳՈՐԾԱՐՔԻ ՎԱՐՈՒՄ'},
        {id: 4, name: 'ԲԱՆԿԱՅԻՆ ԳՈՐԾԱՐՔՆԵՐԻ ՎԱՐՈՒՄ ԷԼԵԿՏՐՈՆԱՅԻՆ ԵՂԱՆԱԿՈՎ'}]
    return (
        <>
        <article className={s.article}>
            
            <section className={s.section}>
                <div className={s.abs}>
                    <Image src={Ramka} width={250} height={450}  alt='Team' />
                    <div className={s.abs2}>
                        <Image src={AboutImg} width={250} height={250} style={{borderRadius: '50%'}} alt='Team' />
                    </div>
            </div>
                
            </section>
            <section className={s.section2}>
                <h1>
                {locale === 'am' ? 'ծառայությունների հայտ'.toUpperCase() : 'service request'.toUpperCase()}
                </h1>
                <p>
                {locale === 'am' ? 'Լրացրեք որոշ նախնական տեղեկություններ Ձեզ բիզնեսի մասին, և մեր աշխատակիցը կարճ ժամանակում կապ կհաստատի Ձեզ հետ։'
                 : 'Fill in some basic information about your business and our employee will contact you shortly.'}
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <select defaultValue={'none'}>
                        <option value={'none'}>ԸՆՏՐԵԼ ԾԱՌԱՅՈՒԹՅՈՒՆԸ</option>
                        {arr.map((i) => (
                            <option value={i.id} key={i.id}>{i.name}</option>
                        ))}
                    </select>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '90%'}}>
                        <input placeholder='ԱՆՈՒՆ ԱԶԳԱՆՈՒՆ' />
                        <input placeholder='ՀԵՌԱԽՈՍ' />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '90%'}}>
                        <input placeholder='ԱՇԽԱՏՈՂՆԵՐԻ ՔԱՆԱԿԸ' />
                        <input placeholder='ՄԻՋԻՆ ԱՄՍԱԿԱՆ ՇՐՋԱՆԱՌՈՒԹՅՈՒՆԸ' />
                    </div>
                    <input placeholder='ԳՈՐԾՈՒՆԵՈՒԹԸԱՆ ՈԼՈՐՏ' style={{ width: '88%'}} />
                    <textarea placeholder='ՆՇՈԻՄՆԵՐ' />
                    <button style={{alignSelf: 'flex-end', marginRight: 30}}> ՈՒՂԱՐԿԵԼ ՀԱՅՏԸ</button>
                </form>
            </section >
        </article>
        </>
    );
};

export default ContactUs;