import { Route,Routes } from "react-router-dom";
import Home from "./home";
import Printedmug from "./components/printedmug";
import Pillow from './components/pillow';
import Tshirt from './components/tshirt';
import Wedding from './components/weding';
import Frame from './components/frame';
import Idcard from './components/idcard';
import Cover from './components/mobilecover';
function App() {

 
  
  return(
   <>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/printedmug" element={<Printedmug/>}/>
      <Route path="/idcard" element={<Idcard/>}/>
      <Route path="/tshirt" element={<Tshirt/>}/>
      <Route path="/wedding" element={<Wedding/>}/>
      <Route path="/frame" element={<Frame/>}/>
      <Route path="/pillow" element={<Pillow/>}/>
      <Route path="/cover" element={<Cover/>}/>
   </Routes>
    
   </>
  );
}

export default App
