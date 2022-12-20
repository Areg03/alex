import Image from 'next/image';
import s from './index.module.scss';
import AboutImg from '../../images/about.png'
import Team from './Team';
import { useRouter } from 'next/router';

const AboutUs = () => {


    const {locale} = useRouter()
    return (
        <>
        <article className={s.article}>
            <section className={s.section}>
                <h1>
                {locale === 'am' ? 'ՄԵՐ ՄԱՍԻՆ' : 'ABOUT US'}
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
                    est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                    deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </section>
            <section className={s.section1}>
                <Image src={AboutImg} width={450} height={280} alt='About' />
            </section>
        </article>
        <Team />
        </>
    );
};

export default AboutUs;