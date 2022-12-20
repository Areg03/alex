import ContactUs from '../src/containers/Contact';
import AboutLink from '../src/containers/Home/aboutLink/aboutLink';
import EmployesLink from '../src/containers/Home/employesLink';
import ServicesLink from '../src/containers/Home/servicesLink';
import { Slick } from '../src/containers/Home/slider';
import { MainLayout } from '../src/layouts/mainLayout';

const Home = () => {


  return (
    <MainLayout>
      <Slick />
      <AboutLink /> 
      <ServicesLink />
      <ContactUs />
      <EmployesLink />
    </MainLayout>
  )
}

export default Home;
