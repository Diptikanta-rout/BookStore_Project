import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const {_id, bookTitle, imageURL, bookDescription } = useLoaderData();
    return (    

        // <div className="mt-28 px-24 lg:px-24">
        //     <img src={imageURL} alt="" className="h-96" />
        //     <h1>{bookTitle}</h1>
        // </div>
        
        // (OR)
         <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
             
               <div>
                   <img src={imageURL} alt="" className="h-96" />
                      <h2  className="font-bold text-2xl">{bookTitle}</h2>
                </div>

               
               <div className="md:w-3/5 font-bold text-2xl">
                    <div className="font-bold text-4xl">
                       Book Description:
                    </div>
                   {bookDescription}
               </div>
            </div>
         </div>
    )
}

export default SingleBook