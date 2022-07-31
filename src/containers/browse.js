import React, { useState, useEffect } from 'react'
import { SelectProfileContainer } from './profiles'
import { useAuthListner } from '../hooks'

export function BrowseContainer() {
    const {user} = useAuthListner();
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

useEffect(() => {
  
    setTimeout(()=>{
        setLoading(false);

    }, 3000)

}, [profile.displayName])


  return (
<SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
