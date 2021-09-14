import React,{ useState} from 'react'
import { TextButton, RTextButton } from '../Buttons';
import UserSvg from './user.svg';
import DialogPassword from './DialogPassword'
import { ChangePassword } from '../../hooks/Admin';


function User({user, setUser}) {
     const cpass=ChangePassword(user)
     const [open, setOpen] = useState(false)

     return (
          <div className="flex flex-col justify-center items-center">
               <img className="w-10 h-10" src={UserSvg} alt="profile"/>
               <h3 className="font-bold my-3">{user?.username}</h3>
               <TextButton className="" text="Change Password" onClick={()=>{setOpen(true)} } />
               <br/>
               <RTextButton className="" text="Log Out" onClick={()=>{setUser(null)} } />
               <DialogPassword open={open} setOpen={setOpen} data={cpass} />
          </div>
     )
}

export default User
