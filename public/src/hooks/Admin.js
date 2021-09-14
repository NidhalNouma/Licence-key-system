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

export const ChangePassword= (user) =>{
     const [error, setError] = useState("")
     const [cpassword, setCPassword] = useState("")
     const [npassword, setNPassword] = useState("")
     const [cnpassword, setCNPassword] = useState("")

     async function submit() {
          setError('')
          if(npassword !==cnpassword)
          {
               setError('Confirm password not match')
               return false
          }
          if(npassword === cpassword)
          {
               setError('Current password and new password are the same')
               return false
          }
          if(npassword.length === 0 || cnpassword.length ===0 || cpassword.length === 0)
          {
               setError('Some data is missing')
               return false
          }

          const data ={ username:user.username, ID:user.ID, password:npassword, cpassword}

          const r = await axios.post("/admin/update", data)
          console.log(r.data)
          if(r.data.error) {
               setError(r.data.error)
               return false
          }

          setCPassword('')
          setNPassword('')
          setCNPassword('')

          return true
     }

     return {error, cpassword,setCPassword, npassword, setNPassword, cnpassword, setCNPassword, submit}
}
