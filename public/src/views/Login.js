import React from 'react'
import Button from '../component/Button'
import Input from "../component/Input"
import Error from "../component/Error"
import keys from './keys.svg'

import { Loging } from "../hooks/Admin"

function Login({ setUser }) {
     const login = Loging(setUser)

     return (
          <div className="flex justify-center items-center w-screen h-screen">
               <div className="p-16 bg-white rounded-md flex flex-col justify-center items-center shadow-md">
                    <img className="w-32 h-32 mb-4" src={keys} alt="logo" />
                    <Input label="User Name" type="text" value={login.userName} setValue={login.setUserName} />
                    <Input label="Password" type="password" value={login.password} setValue={login.setPassword} />
                    <Button text="Login" onClick={async (e) => { await login.submit() }} />
                    {login.error && <div className="mt-3"><Error message={login.error} /> </div>}
               </div>
          </div>
     )
}

export default Login
