import React, { useState } from 'react'
import { EditButton, DeleteButton, RemoveButton } from './Buttons'
import Dialog from "./Dialog"
import DialogAdd from "./DialogAdd"
import moment from 'moment';
import {Edit} from "../hooks/Keys"
import { Delete, DeleteAccount } from "../hooks/Keys"

function Keycolum({ data, setKeys }) {
     const [open, setOpen] = useState(false)
     const [opene, setOpene] = useState(false)
     const edit = Edit(data.ID, data.end, data.code)
     const [showa, setShowa] = useState(false)

     return (
          <div className="py-4 px-3 mb-2 bg-white shadow-md rounded-md ">
               <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                    <Key text={data.code} />
                    <div className="flex">
                         <h4 className="mr-2 hiddeni sm:block font-bold">Expire on:</h4>
                         <h4 className="border-b-2 border-gray-500 text-gray-900">{moment(data.end).format('YYYY-MM-DD')}</h4>
                    </div>
                    <div className="flex items-center">
                         <h4 className="mr-2 hiddeni sm:block font-bold">Max Accounts:</h4>
                         <h4 className="border-b-2 border-t-2 border-gray-500 text-gray-900">{data.maxAccounts ? data.maxAccounts : 0}</h4>
                    </div>
                    <EditButton onClick={()=>setOpene(true)} />
                    <DeleteButton onClick={() => setOpen(true)} />
                    <Dialog open={open} setOpen={setOpen} id={data.ID} setKeys={setKeys} Delete={Delete} />
                    <DialogAdd open={opene} setOpen={setOpene} uid={edit} setKeys={setKeys} edit={true} end={data.end} />

               </div>
               {
                    data.accounts.length > 0 && (
                         <div className="flex flex-col justify-center items-center mt-2">
                              {
                                   showa && (
                                        <div className="border-b-2 border-t-2 my-2">
                                             {
                                                  data.accounts.map((i,ii) => <Accounts data={i} key={ii} setKeys={setKeys}/>)
                                             }
                                        </div>
                                   )
                              }
                              <ArrowDown onClick={()=>{setShowa(!showa)}} arrow={showa} />
                         </div>
                    )
               }
          </div>
     )
}

export default Keycolum

function Key({ text }) {
     return (
          <div className="copy p-2 rounded-md border-2 border-indigo-400 text-indigo-800 cursor-pointer"
               onClick={() => {
                    navigator.clipboard.writeText(text).then(function () {
                         console.log('Async: Copying to clipboard was successful!');
                    }, function (err) {
                         console.error('Async: Could not copy text: ', err);
                    });
               }}
          >
               <h4>{text}</h4>
          </div >
     )
}

function ArrowDown({onClick, arrow}) {
     return (
               <button onClick={onClick} className="transition-all duration-500 ease-in-out transform hover:scale-110 rounded-md p-1 w-full chover:bg-indigo-500" type="button">

                    {!arrow ? (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto text-indigo-500" fill="#453CC4" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                         </svg>) : (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                         </svg>
                    )}
               </button>
     )
}

function Accounts({data, setKeys}) {
     const [open, setOpen] = useState(false)

     return (
          <div className="flex my-3 items-center justify-between">
               <h4 className="mr-1">Account Number: <span className="text-indigo-500">{data.number}</span></h4>
               <div className="rounded border-4"></div>
               <h4 className="ml-1 mr-2">Account Server: <span className="text-indigo-500">{data.server}</span></h4>

               <RemoveButton onClick={()=>{setOpen(true)}} />
               <Dialog open={open} setOpen={setOpen} id={data.ID} setKeys={setKeys} Delete={DeleteAccount} text="Account" />
          </div>
     )
}

