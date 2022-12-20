import Image from 'next/image';
import s from './index.module.scss';  
import { useRouter } from 'next/router';
import { PartnersData } from '../../utils/data';

const PartnersTrue = () => {
    const {locale} = useRouter()

    return (
        <>
        <article className={s.article}>
                <h1 className={s.head}>
                {locale === 'am' ? 'ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ' : 'OUR PARTNERS'}
                </h1>
            <section className={s.section}>
             {PartnersData.map((i) => (
                <div className={s.image} key={i.id}>
                    <div className={s.mug}>
                <Image src={i.img} width={210} height={347} style={{borderRadius: 20,  opacity: 0.5}} alt={`partner${i.id}`}/>
                </div>
                <h5>{i.name}</h5>
                </div>
             ))}
            </section>
        </article>
        </>
    );
};

export default PartnersTrue;