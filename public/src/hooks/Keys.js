import { useState, useEffect } from "react"
import axios from "axios"

export function Add() {
     const d= new Date()
     const [date, setDate] = useState(addDays(d,7))
     const [key, setKey] = useState("")
     const [maxAccounts, setMaxAccounts] = useState(3)

     async function submit() {
          if (!key) return false

          const data = { code: key, end: date, maxAccounts: maxAccounts}
          const r = await axios.post("/code/add", data)

          console.log(r)
          if (r.data.error) {
               return false;
          }
          setKey("")

          return r.data.results
     }

     return { date, setDate, key, setKey, maxAccounts, setMaxAccounts, submit }
}

export function Edit(id,end, ikey) {
     const d= new Date()

     const [date, setDate] = useState(addDays(d,7))
     const [key, setKey] = useState(ikey)
     const [ID] = useState(id)
     const [maxAccounts, setMaxAccounts] = useState(3)

     async function submit() {
          if (!key) return false

          const data = { id:ID, code: key, end: date, maxAccounts: maxAccounts }
          const r = await axios.post("/code/update", data)

          console.log(r)
          if (r.data.error) {
               return false;
          }
          // setKey("")

          return r.data.results
     }

     return { date, setDate, key, setKey, maxAccounts, setMaxAccounts, submit }
}

export function Keys() {
     const [keys, setKeys] = useState([])

     async function getAll() {
          const r = await axios.post("/code/all")

          if (!r.data.error) setKeys(r.data.results)
          // console.log(r.data.results)
     }

     useEffect(() => {
          getAll()
     }, []);

     return { keys, setKeys }
}

export async function Delete(id) {
     if (!id) return false
     const r = await axios.post("/code/delete", { id: id })
     console.log(r)
     return r.data.results
}

export async function DeleteAccount(id) {
     if (!id) return false
     const r = await axios.post("/code/deleteAccount", { id: id })
     console.log(r)
     return r.data.results
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}