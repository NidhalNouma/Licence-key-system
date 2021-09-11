import React from 'react'

function Input({ label, type, value, setValue }) {
     return (
          <div className="mb-6 sm:w-80">
               {/* <label className="block text-sm font-medium text-pcolor">
                    {label}
               </label> */}
               <input
                    placeholder={label}
                    type={type}
                    name={label}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
               />
          </div>
     )
}

export default Input
