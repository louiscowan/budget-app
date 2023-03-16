import React, {useState} from "react";
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login.jsx'
import TheCalendar from './TheCalendar.jsx'

function Home() {
    const [ user, setUser] = useState()

    const theUser = auth.currentUser
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return (
        <div>
        {user
            ?  <TheCalendar />
            :  <Login />
           }
        </div>
    )
}

export default Home