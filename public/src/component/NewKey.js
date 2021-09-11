import React, { useState } from 'react'
import ButtonA from "./ButtonA"
import DialogAdd from "./DialogAdd"
import { Add } from "../hooks/Keys"

function NewKey({ setKeys }) {
     const [open, setOpen] = useState(false)
     const key = Add();

     return (
          <div>
               <ButtonA text="New Key" onClick={() => setOpen(true)} />
               <DialogAdd open={open} setOpen={setOpen} uid={key} setKeys={setKeys} />
          </div>
     )
}

export default NewKey
