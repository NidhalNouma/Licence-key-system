import React from 'react'

export function EditButton({ onClick }) {
     return (
          <button onClick={onClick}
               className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none"
          >
               <span className="hidden sm:block">
                    Edit
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" className="sm:ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
               </svg>
          </button>
     )
}

export function DeleteButton({ onClick }) {
     return (
          <button onClick={onClick}
               className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none"
          >
               <span className="hidden sm:block">
                    Delete
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" className="sm:ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
               </svg>
          </button>
     )
}

export function TextButton({text, onClick }) {
     return (
          <button onClick={onClick}
               className="inline-flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-indigo-400 hover:text-indigo-600 focus:outline-none"
          >
                   {text}
          </button>
     )
}

export function RTextButton({text, onClick }) {
     return (
          <button onClick={onClick}
               className="inline-flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-red-300 hover:text-red-500 focus:outline-none"
          >
                   {text}
          </button>
     )
}
