import Head from "next/head"
import { Header } from "../components/Header"
import Footer from '../components/Footer';
import s from "../../styles/footer.module.scss"
export const MainLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>

            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}