import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import RaisedButton from 'material-ui/RaisedButton'

import { ModalButton } from '../components/buttons'
import CreateUser from '../components/forms/CreateUser'
import Login from '../components/forms/Login'

import {user_id, logout} from './auth'

const LoggedIn = () => (
  <span>
    <IconButton onClick={() => window.location.replace('/cart')}><ShoppingCartIcon/></IconButton>
    <RaisedButton label="Logout" onClick={logout}/>
  </span>
)

const LoggedOut = () => (
  <ModalButton label="Login" display={<Login/>}/>
)
export default class extends Component {
  render () {
    return (
      <div>
        <IconButton onClick={() => window.location.replace('/')}><HomeIcon/></IconButton>
        <ModalButton label="Create User" display={<CreateUser/>}/>
        {(!user_id) ? LoggedOut() : LoggedIn()}
      </div>
    );
  }
}
