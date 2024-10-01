import React, { createContext, useState } from 'react'
import { baseUrl } from '../src/baseUrl';

// step 1: createContext
export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [page, setPage] =useState(1);
    const [totalPages, setTotalpages] = useState(null)
    const [posts, setPosts] = useState([]);

    async function fetchBlogsPosts(page = 1, tag = null, category = null) { 
        setLoading(true);
        var url = `${baseUrl}?page=${page}`;

        if(tag) {
            url = `${baseUrl}?page=1&tag=${tag}`;
            // console.log("url is: " +  url);
        }
        if(category) {
            url = `${baseUrl}?page=1&category=${category}`;
            console.log("url is: " +  url);
        }


       try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPosts(data.posts);
            setTotalpages(data.totalPages);
            setPage(data.page);

       }catch(error) {
            console.log("Server Error: "+error.message);
            setPage(1);
            setPosts([]);
            setTotalpages(null);
       }

       setLoading(false);
    }


    function pageChangeHandler(newPage) {
        setPage(newPage);
        fetchBlogsPosts(newPage);
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
        pageChangeHandler,
    }

    // provide to the consumers >>>>
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}
