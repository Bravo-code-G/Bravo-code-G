import React from 'react';
import '../assets/styles/components/User.scss';
import { informacionUserAuth, authStateListener } from './AuthMethods';

const User = () => {

  const userInfo = informacionUserAuth();
  console.log(userInfo);

  //   const { displayName } = user;
  //   const { email } = user;
  //   const { photoURL } = user;
  //   const { emailVerified } = user;
  return (
    <>
      <div className='userImg'>
        <img src={userInfo.photoURL} alt='Photo' className='userImgA' />
      </div>
      <div className='userInfo'>
        <p>
          Nombre:
          {` ${userInfo.displayName}`}
        </p>
        <p>Puesto: Tecnico automatizacion</p>
        <p>Area: SLK 1</p>
      </div>
    </>
  );
};

export default User;
