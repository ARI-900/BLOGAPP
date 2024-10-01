import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AppContext } from '../context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage';
import Tagpage from './pages/Tagpage';
import Categorypage from './pages/Categorypage';




function App() {

  const {fetchBlogsPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

    const page =  searchParams.get("page") ?? 1;
    
    if(location.pathname.includes("tags")) {
      // iska mathlab tag wala page show karna hai >>>
      const tagname = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogsPosts(Number(page), tagname);
    }
    else if(location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlogsPosts(Number(page), null, category);
    }
    else {
      fetchBlogsPosts(Number(page));
    }

  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path='/' element={ <Homepage/> } />
      <Route path='/blog/:blogid' element={ <Blogpage/> } />
      <Route path='/tags/:tag' element={ <Tagpage /> } />
      <Route path='/categories/:category' element={ <Categorypage/> } />
    </Routes>
  )
}

export default App
