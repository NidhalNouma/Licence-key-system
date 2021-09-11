import { useState, useEffect } from "react"
import axios from "axios"

export function Add() {
     const [date, setDate] = useState(new Date())
     const [key, setKey] = useState("")

     async function submit() {
          if (!key) return false

          const data = { code: key, end: date }
          const r = await axios.post("/code/add", data)

          console.log(r)
          if (r.data.error) {
               return false;
          }
          setKey("")

          return r.data.results
     }

     return { date, setDate, key, setKey, submit }
}

export function Keys() {
     const [keys, setKeys] = useState([])

     async function getAll() {
          const r = await axios.post("/code/all")

          if (!r.data.error) setKeys(r.data.results)
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
