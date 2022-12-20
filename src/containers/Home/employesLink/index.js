import Image from 'next/image';
import s from './index.module.scss';  
import { useRouter } from 'next/router';
import { PartnersLinkData } from '../../../utils/data';
import Link from 'next/link';

const EmployesLink = () => {
    const {locale} = useRouter()

    return (
        <>
        <article className={s.article}>
                <h1 className={s.head} style={{alignSelf: 'flex-start'}}>
                {locale === 'am' ? 'ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ' : 'OUR PARTNERS'}
                </h1>
            <section className={s.section}>
             {PartnersLinkData.map((i) => (
                <div className={s.image} key={i.id}>
                    <div className={s.mug}>
                <Image src={i.img} width={210} height={347} style={{borderRadius: 20,  opacity: 0.5}} alt={`partner${i.id}`}/>
                </div>
                <h5>{i.name}</h5>
                </div>
             ))}
            </section>
            <Link href={'/employees#top'}><button style={{alignSelf: 'flex-end'}}>{locale === 'am' ? 'ԴԻՏԵԼ ԲՈԼՈՐԸ' : 'SEE ALL'}</button></Link>
        </article>
        </>
    );
};

export default EmployesLink;