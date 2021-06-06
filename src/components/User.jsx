import React from 'react';
import '../assets/styles/components/User.scss';

const User = () => (
    <React.Fragment>
    <div className="userImg" >
           <div className="userImgA"></div>
        </div>
        <div className="userInfo" > 
            <p>Nombre: Mario Bravo</p>
            <p>Puesto: Tecnico automatizacion</p>
            <p>Area: SLK 1</p>
        </div>
    </React.Fragment>
);

export default User;
