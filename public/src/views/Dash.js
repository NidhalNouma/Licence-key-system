import React from 'react'
import NewKey from "../component/NewKey"
import Keycolum from "../component/Keycolum"
import User from "../component/user"
import { Keys } from "../hooks/Keys"

function Dash({ user, setUser }) {
     const keys = Keys()

     return (
          <div className="sm:p-8 box-border block sm:flex justify-center items-start">
               <div className="m-5 p-4 rounded-md sm:sticky top-8">
                    <NewKey setKeys={keys.setKeys} />
               </div>
               <div className="m-4 rounded-md">
                    {
                         keys.keys.map((i, ii) => <Keycolum data={i} key={ii} setKeys={keys.setKeys} />).reverse()
                    }
               </div>
               <div className="m-4 rounded-md bg-white p-6 shadow-md">
                    <User user={user} setUser={setUser} />
               </div>
          </div>
     )
}

export default Dash
