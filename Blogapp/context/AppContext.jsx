import { createContext, useState } from "react";
import { baseUrl } from "../src/baseUrl";


// step 1: 
export const AppContext = createContext();

function AppContextProvider({children}) {

    // declare states hook:
    const [loading, setLoading] = useState(false);
    const [page, setPage] =useState(1);
    const [totalPages, setTotalpages] = useState(null)
    const [posts, setPosts] = useState([]);


    // Filling Datas ....
    async function fetchBlogsPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        
       try {
            const result = await fetch(url);
            const data = await result.json();
            setPosts(data.posts);
            setTotalpages(data.totalPages);
            setPage(data.page);

       }catch(error) {
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalpages(null);
       }

       setLoading(false);
    }

    const handlePageChange = (page) => {
      setPage(page);
      fetchBlogsPosts(page);
    }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalpages,
        fetchBlogsPosts,
        handlePageChange,

    }
    

// step 2: proovide all stuff for consumer ....
  return (
    <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider