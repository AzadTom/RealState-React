import Slider from "./components/imageslider";
import Footer from "./components/footer";
import Headlines from "./components/headlines";
import Category from "./components/category";
import Header from './components/header';
import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.jpeg';
import image5 from './assets/5.jpeg';
import image6 from './assets/6.jpeg';
import image7 from './assets/7.jpeg';
import image8 from './assets/8.jpeg';
import image9 from './assets/9.jpeg';
import image10 from './assets/10.jpeg';
import image11 from './assets/info.jpeg';
function Home() {

  const images= [image11,image1,image2,image3,image4,image5 ,image6,image7,image8,image9,image10];
  
  return(
   <>
   <section>
    <Header name="Vishal Printers"/>
   </section>
   <section className="m-2" >
    <Slider images={images}/>
   </section>
   <section>
    <Headlines/>
   </section>
   <section>
    <Category/>
   </section>
   <section>
     <Footer/>
   </section>
   </>
  );
}

export default Home
