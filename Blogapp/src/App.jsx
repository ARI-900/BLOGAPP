import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";



function App() {

  const {fetchBlogsPosts} = useContext(AppContext);
  
  useEffect(() => {
    fetchBlogsPosts();
  },[]);


  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;