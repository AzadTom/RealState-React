import { Routes,Route } from "react-router-dom";



import HomePage from './pages/HomePage';
import SearchResult from "./pages/SearchResult";
import ProductDeatailPage from "./pages/ProductDeatailPage";
import BlogDeatailPage from "./pages/BlogDetailPage";


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';







function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/searchResult" element={<SearchResult/>}/>
      <Route path="/productdetailpage" element={<ProductDeatailPage/>}/>
      <Route path="/blogdetailpage" element={<BlogDeatailPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
