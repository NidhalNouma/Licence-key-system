import React, { useState } from 'react'
import ButtonA, { ButtonDownload} from "./ButtonA"
import DialogAdd from "./DialogAdd"
import { Add } from "../hooks/Keys"

function NewKey({ setKeys }) {
     const [open, setOpen] = useState(false)
     const key = Add();

     return (
          <>
          <div className="flex flex-col">
               <ButtonA text="New Key" onClick={() => setOpen(true)} />
               <br/>
               <ButtonDownload text="Download Expert" onClick={() =>{window.open('https://expertfilesgiovarioforexhu6.s3.us-east-2.amazonaws.com/Slinky.ex4')}}/>
          </div>
               <DialogAdd open={open} setOpen={setOpen} uid={key} setKeys={setKeys} />
          </>
     )
}

export default NewKey
