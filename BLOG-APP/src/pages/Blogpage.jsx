import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useLocation, useNavigate  } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import Blogs from '../components/Blogs';

export default function Blogpage() {

  const blogUrl = "https://codehelp-apis.vercel.app/api/get-blog";

  // Hook section >>>
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const {loading, setLoading} = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();

  let blogid = location.pathname.split('/').at(-1);
  blogid = blogid.toUpperCase();

  async function fetch_specific_blog() {

    setLoading(true);

    let url = `${blogUrl}?blogId=${blogid}`;
    // console.log("UrL: ", url);
    try {
      const result = await fetch(url);  // fetch(url,{ mode: 'no-cors'})
      const data = await result.json();

      setBlog(data.blog)
      setRelatedBlogs(data.relatedBlogs);
      // console.log(data);
    }
    catch(err) {
      console.log("Failed to fetch");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(blogid) {
      fetch_specific_blog();
    }
  }, [location.pathname]);  
    
  return (
    <div>
        <Header />

        <div>
          <button onClick={ () => navigation(-1) }
            className=' p-2 font-bold border-2 m-3 text-red-600 bg-teal-400'>
            Back
          </button>
        </div>

        <div>
          {
            loading ? 
            (
              <Spinner />
            ) : 
            (
              (blog && relatedBlogs) ? 
              (
                <div>
                  <BlogDetails post={blog} />

                  <h1 className='text-2xl font-bold mt-8 underline uppercase p-2'>related Blogs</h1>

                  {
                    relatedBlogs.map( (post) => (
                      <BlogDetails key={post.id} post={post} />
                    ))
                  }
                </div>
              ) : 
              (
                <h1 className='h-full w-full flex justify-center items-center text-3xl text-red-600'>Blog Not Found</h1>
              )
            )
          }
        </div>


        <Footer />
    </div>
  )
}
