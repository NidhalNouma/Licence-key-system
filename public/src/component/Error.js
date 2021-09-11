import React from 'react'

function Error({ message }) {
     return (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3" role="alert">
               {/* <p className="font-bold">Be Warned</p> */}
               <p>{message}.</p>
          </div>
     )
}

export default Error
