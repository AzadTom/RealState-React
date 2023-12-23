import Home from "./pages/Home";
import Property from './pages/Property';
import Agents from './pages/Agents';
import About from './pages/About';
import { Routes,Route } from "react-router-dom";
import Loading from "./components/Loading";
import { Suspense} from "react";
import MobileNav from "./components/MobileNav";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
      <Route path="/property" element={<Suspense fallback={<Loading/>}><Property/></Suspense>}/>
      <Route path="/agents" element={<Suspense fallback={<Loading/>}><Agents/></Suspense>}/>
      <Route path="/about" element={<Suspense fallback={<Loading/>}><About/></Suspense>}/>
    </Routes>
    <MobileNav/>
    </>
  );
}

export default App;
