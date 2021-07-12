import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Maquinas.scss';
import MaquinasItem from './MaquinasItem.jsx'

const MaquinasCarrusel = () => (

<div id="carruselmaquinas">
    <MaquinasItem/>
</div>

);

export default MaquinasCarrusel;
