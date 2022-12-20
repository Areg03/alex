import Image from "next/image";
import s from "../../styles/footer.module.scss"
import logo from "../images/logowhite.png"
import Link from 'next/link';
import fb from "../images/footer/facebook.png"
import insta from "../images/footer/instagram.png"
import tg from "../images/footer/telegram.png"
import wp from "../images/footer/whatsapp.png"
import { useRouter } from "next/router";

const Footer = () => {

    const {locale} = useRouter()

    return (
        <footer className={s.footer}>
            <div className={s.all}>
                <div className={s.first}>
                    <div className={s.logo}>
                        <Image src={logo} width={91} alt="logo" />
                    </div>
                    <div className={s.nav}>
                        <ul>
                            <li><Link href={'/'} ><a>{locale === 'am' ? 'ԳԼԽԱՎՈՐ' : 'HOME'}</a></Link></li>
                            <li><Link href={'/about'}><a>{locale === 'am' ? 'ՄԵՐ ՄԱՍԻՆ' : 'ABOUT US'}</a></Link></li>
                            <li><Link href={'/employees'}><a>{locale === 'am' ? 'ԳՈՐԾԸՆԿԵՐՆԵՐ' : 'PARTNERS'}</a></Link></li>
                            <li><Link href={'/services'}><a>{locale === 'am' ? 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ' : 'SERVICES'}</a></Link></li>
                            <li><Link href={'/contact'}><a>{locale === 'am' ? 'ՀԵՏԱԴԱՐՁ ԿԱՊ' : 'CONTACT US'}</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={s.second}>
                    <div className={s.contact}>
                        <h2>{locale === 'am' ? 'ԿԱՊ ՄԵԶ ՀԵՏ' : 'CONTACT US'}</h2>
                        <p>{locale === 'am' ? 'Զանգահարեք մեզ' : 'Call us'}: +374 98222078</p>
                        <p>{locale === 'am' ? 'Էլ հասցե' : 'Mail'}: need.mail@mail.ru</p>
                        <p>{locale === 'am' ? 'Երևան' : 'Erevan'} 0079, {locale === 'am' ? 'Կողբացու' : 'Koghbacu'} 47</p>
                    </div>
                    <div className={s.find}>
                        <h2>{locale === 'am' ? 'ՓՆՏՐԵՔ ՄԵԶ' : 'FIND US'}</h2>
                        <div className={s.images}>
                            <Image src={fb} width={30} alt="facebook" />
                            <Image src={insta} width={30} alt="instagram" />
                            <Image src={wp} width={30} alt="whatsapp" />
                            <Image src={tg} width={30} alt="telegram" />

                        </div>
                    </div>
                </div>
            </div>
            <p className={s.last}><span style={{fontWeight: 400}}>By ArmCoding - </span>© 2022 {locale === 'am' ? 'Բոլոր իրավունքները պաշտպանված են' : 'All rights reserved'}</p>
        </footer>
    );
};

export default Footer;