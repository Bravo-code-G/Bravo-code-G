import React from 'react';
import Descriptionn from './Descriptionn';

const Description = () => (
    <div>
      <nav className="navbar navbar-light bg-primary text-white">
        <a className="navbar-brand">React Chat</a>
      </nav>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Descriptionn/>
          </div>
        </div>
      </div>
    </div>
);

export default Description;
