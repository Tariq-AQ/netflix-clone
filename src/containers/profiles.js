import React from 'react'
import { Header, Profiles } from '../components'
import { HeaderContainer } from './header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'

export function SelectProfileContainer({user, setProfile}) {
  return (
      <>
      <HeaderContainer/>
      <Header bg={false}>
          <Header.Frame>
    <Header.Logo  to={ROUTES.HOME} src={logo} alt='Netflix'/>
          </Header.Frame>
      </Header>

      <Profiles>
          <Profiles.Title/>
          <Profiles.List>
              <Profiles.Item onClick={()=>setProfile({displayName: user.displayName,
                 photoURL: user.photoURL})}>
                <Profiles.Picture src={user.photoURL}  />
                <Profiles.Name>{user.displayName}</Profiles.Name>
              </Profiles.Item>
          </Profiles.List>
      </Profiles>
      </>
  )
}
