import React, { useState } from 'react'
import { EditButton, DeleteButton } from './Buttons'
import Dialog from "./Dialog"
import DialogAdd from "./DialogAdd"
import moment from 'moment';
import {Edit} from "../hooks/Keys"

function Keycolum({ data, setKeys }) {
     const [open, setOpen] = useState(false)
     const [opene, setOpene] = useState(false)
     const edit = Edit(data.ID, data.end, data.code)

     return (
          <div className="py-4 px-3 mb-2 flex gap-4 items-center justify-between bg-white shadow-md rounded-md">
               <Key text={data.code} />
               <div className="flex">
                    <h4 className="mr-2 hidden sm:block font-bold">Expire on:</h4>
                    <h4 className="border-b-2 text-gray-900">{moment(data.end).format('YYYY-MM-DD')}</h4>
               </div>
               <EditButton onClick={()=>setOpene(true)} />
               <DeleteButton onClick={() => setOpen(true)} />
               <Dialog open={open} setOpen={setOpen} id={data.ID} setKeys={setKeys} />
               <DialogAdd open={opene} setOpen={setOpene} uid={edit} setKeys={setKeys} edit={true} end={data.end} />
          </div>
     )
}

export default Keycolum

function Key({ text }) {
     return (
          <div className="p-2 border rounded-md bg-indigo-400 text-white cursor-pointer hover:bg-indigo-500"
               onClick={() => {

                    navigator.clipboard.writeText(text).then(function () {
                         console.log('Async: Copying to clipboard was successful!');
                    }, function (err) {
                         console.error('Async: Could not copy text: ', err);
                    });
               }}
          >
               <h4 > {text}</h4>
          </div >
     )
}