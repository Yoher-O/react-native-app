import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import UserGuest from './UserGuest';
import Spinner from '../../utils/Spinner';
import LoggedUser from './LoggedUser';

export default Account = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setUser(true) : setUser(false);
    })
  }, [])

  if (user === null) return <Spinner isShow={true} text='Cargando...' />
  return user ? <LoggedUser /> : <UserGuest />;
}