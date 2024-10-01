import React, { useLayoutEffect } from 'react'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Categorypage() {

    const navigation = useNavigate();
    const location = useLocation();
    const categoryname = location.pathname.split("/").at(-1).replaceAll('%20', " ");


  return (
    <div>
        <Header />

        <div>
        <button onClick={ () => navigation(-1) }
                className=' p-2 font-bold border-2 m-3 text-red-600 bg-yellow-400'>
                Back
            </button>
            <h2 className='text-xl font-semibold'>
                Blogs Tagged <span className='text-2xl font-bold text-amber-500'>#{categoryname}</span>
            </h2>
        </div>

        <Blogs />
        <Footer />
    </div>
  )
}
