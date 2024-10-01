import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogDetails({post}) {


  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <p className='text-blue-950 font-bold'>{post.title}</p>
        </NavLink>

        <p>
            By {post.author} on 
            <NavLink to={`/categories/${post.category}`}>
                <span className='text-purple-600 font-semibold italic'>{` ${post.category}`}</span>
            </NavLink>
        </p>

        <p> Posted on {post.date} </p>

        <p> {post.content}</p>

        {/* now create links for each tags */}
        <div className=''>
            {
                post.tags.map( (tag, index) => (
                    <NavLink key={index} 
                        to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span className='text-orange-600'> {`#${tag}`} </span>
                        </NavLink>
                ))
            }
        </div>
    </div>
  )
}
