import React, { useState } from 'react'

function Button({ text, onClick }) {
     const [spin, setSpin] = useState(false);

     return (
          <div>
               {!spin ?
                    <button
                         onClick={async (e) => {
                              setSpin(true)
                              await onClick(e)
                              setSpin(false)
                         }}
                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    >
                         {text}
                    </button>
                    :
                    <div className=" flex justify-center items-center">
                         <div className="animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
               }
          </div>
     )
}

export default Button
