import s from '../../styles/responseNav.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import hay from '../images/hayastan.png';
import en from '../images/britania.png';
import { useRouter } from 'next/router';

export const ResponseNav = ({active, setActive, activeLang, setLang}) => {
    const {locale} = useRouter()
    
    return (
        <>
                <section className={!active ? s.noActive : s.active}>
                    <nav>
                        <ul>
                            <li><Link href={'/'} ><div className={s.one} onClick={() => setActive(prev => !prev)}><a>{locale === 'am' ? 'ԳԼԽԱՎՈՐ' : 'HOME'}</a> </div></Link></li>
                            <li><Link href={'/about'}><div className={s.one} onClick={() => setActive(prev => !prev)}><a>{locale === 'am' ? 'ՄԵՐ ՄԱՍԻՆ' : 'ABOUT US'}</a></div></Link></li>
                            <li><Link href={'/employees'}><div className={s.one} onClick={() => setActive(prev => !prev)}><a>{locale === 'am' ? 'ԳՈՐԾԸՆԿԵՐՆԵՐ' : 'PARTNERS'}</a></div></Link></li>
                            <li><Link href={'/services'}><div className={s.one} onClick={() => setActive(prev => !prev)}><a>{locale === 'am' ? 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ' : 'SERVICES'}</a></div></Link></li>
                            <li><Link href={'/contact'}><div className={s.one} onClick={() => setActive(prev => !prev)}><a>{locale === 'am' ? 'ՀԵՏԱԴԱՐՁ ԿԱՊ' : 'CONTACT US'}</a></div></Link></li>
                            <li className={s.single}>
                                 <div className={s.lang}>
                        {activeLang === 'am' && <Image src={hay} width={43} height={25} alt='am' onClick={() => setLang('en')} />}
                        {activeLang === 'en' && <Image src={en} width={43} height={25} alt='en' onClick={() => setLang('am')} />}
                       
                      
                    </div>
                            </li>
                        </ul>
                    </nav>
                    {/* <select>
                    <option><Image src={hay} width={43} height={25} alt="am" /></option>
                    <option><Image src={en} width={43} height={25} alt="am" /></option>
                </select> */}
                    {/* <div className={s.lang}>
                        {activeLang === 'am' && <Image src={hay} width={43} height={25} alt='am' onClick={() => setActiveLang('en')} />}
                        {activeLang === 'en' && <Image src={en} width={43} height={25} alt='en' onClick={() => setActiveLang('am')} />}
                       
                      
                    </div> */}
                </section>
        </>
    )
}