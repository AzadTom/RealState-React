import Products from '../components/Products/Products';
import HeroSection from '../components/HeroSection/HeroSection';
import FAQ from '../components/Faq/Faq';
import CTA from '../components/HeroSection/Cta';
import Blogs from '../components/Blog/Blogs';


const HomePage = ()=>{


    return(
        <>
        <HeroSection/>
        <Products content={"Top exclusive property"}/>
        <Products content={"Top Vip property"}/>
        <CTA/>
        <Blogs/>
        <FAQ/>
        </>
    )


}

export default HomePage;