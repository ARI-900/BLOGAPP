import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Spinner from "./Spinner";
import './Blogs.css';



function Blogs() {

    // React hooks ...
    const {loading, posts} = useContext(AppContext);
    // console.log("Printing inside the blog components: ");
    // console.log(posts);
    
    
    
  return (
    <div className='max-w-[60rem] min-h-screen text-justify py-8 mt-[70px] mb-[50px] 
    flex flex-col gap-y-7 leading-8 justify-center items-center select-none'>
        {
            (loading == true) ? 
            (<Spinner />)
            :
            (
              (posts.length === 0) ? 
              (
                <div>
                  <p className='text-red-500 font-semibold'>NO POST IS FOUND. SERVER ERROR</p>
                </div>
              )
              :
              (
                posts.map( (post) => {
                  return (
                   <div key={post.id}>
                      <p className='font-bold text-lg'> {post.title} </p>

                      <p className='text-sm mt-[5px]'>
                        By <span className=' italic'>{post.author}</span> on <span className='font-bold underline text-zinc-900'>{post.category}</span>
                      </p>

                      <p className='text-sm mt-[4px]'>
                        Posted on {post.date}
                      </p>

                      <p className=' font-normal text-[15px] opacity-80 mt-3 mb-2'>
                      <span className='text-2xl font-bold'>‣</span> {post.content}
                      </p>

                      {/* now we are going to accessing tags */}
                      <div>
                        {
                          post.tags.map( (tag, index) => (
                            <span key={index} 
                            className='text-blue-700 underline font-semibold text-xs mr-[8px] cursor-pointer'>
                              #{tag}
                            </span>
                          ))
                        }
                      </div>
                   </div>
                  )
                })
              )
            )
        }
    </div>
  )
}

export default Blogs