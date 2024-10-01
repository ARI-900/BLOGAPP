import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Pagination() {

    const {totalPages, page, pageChangeHandler} = useContext(AppContext);

    

  return (
    <div>
        
        <div>
            <div>
                {/* previon button */}
                {
                    (page > 1) && 
                    (
                        <button 
                        onClick={ () => pageChangeHandler(page-1) }>Previous</button>
                    )
                }
                {/* next button */}
                {
                    (page < totalPages) && 
                    (
                        <button 
                        onClick={ () => pageChangeHandler(page+1) }>Next</button>
                    )
                }
            </div>
            <p>
                Page {page} of {totalPages}
            </p>
        </div>
        
    </div>
  )
}
