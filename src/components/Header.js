import s from '../../styles/header.module.scss'
import logo from '../images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import hay from '../images/hayastan.png';
import en from '../images/britania.png';
import { ResponseNav } from './ResponseNav';
import { useRouter } from 'next/router'



export const Header = () => {
    const [active, setActive] = useState(false)
    const router = useRouter()
    const [activeLang, setActiveLang] = useState(router.locale)
    const { pathname, asPath, query } = router

    const setLang = (lang) => {
        setActiveLang(lang)
        router.push({ pathname, query }, asPath, { locale: lang })
    }

    return (
        <>
            <header className={s.header} id='top'>
                <section>
                    <Link href={'/'}><Image src={logo} width={91} alt="logo" style={{cursor: 'pointer'}}/></Link>
                    <nav className={s.nav}>
                        <ul>
                            <li><Link href={'/'} ><a>{router.locale === 'am' ? 'ԳԼԽԱՎՈՐ' : 'HOME'}</a></Link></li>
                            <li><Link href={'/about'}><a>{router.locale === 'am' ? 'ՄԵՐ ՄԱՍԻՆ' : 'ABOUT US'}</a></Link></li>
                            <li><Link href={'/employees'}><a>{router.locale === 'am' ? 'ԳՈՐԾԸՆԿԵՐՆԵՐ' : 'PARTNERS'}</a></Link></li>
                            <li><Link href={'/services'}><a>{router.locale === 'am' ? 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ' : 'SERVICES'}</a></Link></li>
                            <li><Link href={'/contact'}><a>{router.locale === 'am' ? 'ՀԵՏԱԴԱՐՁ ԿԱՊ' : 'CONTACT US'}</a></Link></li>
                        </ul>
                    </nav>
                    {/* <select>
                    <option><Image src={hay} width={43} height={25} alt="am" /></option>
                    <option><Image src={en} width={43} height={25} alt="am" /></option>
                </select> */}
                    <div className={s.right}>
                        <div className={s.langs}>
                        {activeLang === 'am' && <Image src={hay} width={43} height={25} alt='am' onClick={() => setLang('en')} />}
                        {activeLang === 'en' && <Image src={en} width={43} height={25} alt='en' onClick={() => setLang('am')} />}
                        </div>
                       {!active? <div className={s.spans} onClick={() => setActive(prev => !prev)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        :
                        <span className={s.x} onClick={() => setActive(prev => !prev)}>X</span>}
                        
                    </div>
                </section>
                
            </header>
            <ResponseNav active={active} setActive={setActive} activeLang={activeLang} setLang={setLang}/>
        </>
    )
}