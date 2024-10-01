import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'



function Pagination() {

    // Hook Section ....
    const {page, totalPages, handlePageChange} = useContext(AppContext);



  return (
    <div className='w-full flex justify-center items-center py-2 border-2 shadow-md fixed bottom-0 left-0
    bg-white z-50'>
        
        <div className='max-w-[60rem] w-10/12 flex justify-between items-center py-3 px-2'>
            <div className=' flex gap-x-3'>
                {/* previous button */}
                {
                    (page > 1) && 
                    (
                        <button className='py-1 px-4 rounded-md border text-white bg-slate-700 shadow-md transition-all duration-300 hover:bg-zinc-900 text-sm'
                        onClick={ () => handlePageChange(page-1) }>Previous</button>
                    )
                }
                {/* next button */}
                {
                    (page < totalPages) && 
                    (
                        <button className='py-1 px-4 rounded-md border text-white bg-slate-700 shadow-md transition-all duration-300 hover:bg-zinc-900 text-sm '
                        onClick={ () => handlePageChange(page+1) } >Next</button>
                    )
                }

            </div>

            <p className='font-semibold text-sm'>
                Page {page} of {totalPages}
            </p>
        </div>

    </div>
  )
}

export default Pagination