import axios from 'axios'
import { useState } from "react"

export const Loging = (setUser) => {
     const [userName, setUserName] = useState("")
     const [password, setPassword] = useState("")
     const [error, setError] = useState("")

     async function submit() {
          if (!password || !userName) {
               setError("Please enter username and password")
               return true
          }

          const data = { username: userName, password: password }

          const r = await axios.post("/admin/find", data)
          // console.log(r)
          const res = r.data
          if (res.error) {
               setError(res.error)
               return
          }
          else setUser(res.results[0])
     }

     return { userName, setUserName, password, setPassword, error, setError, submit }
}
