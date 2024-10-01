import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails';

export default function Blogs() {

    const { loading, posts } =  useContext(AppContext);

  return (
    <div>

      {
        loading ? 
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
            posts.map((post) => {
                return (
                  <div>
                    <BlogDetails key={post.id} post = {post} />
                  </div>
                ) 
            })
          )
        )
      }

    </div>
  )
}
