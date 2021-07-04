import React from 'react';
import {AuthContext} from './AuthContext';
import '../assets/styles/components/Root.scss';


class Root extends React.Component {
    render(){
      const {
        children
      } = this.props;
      const {
        authReady,
      } = this.context;
      
      if(!authReady) {
          return <div id='Loading'>Loading...</div>
      }
      return children;
    }
  }
   
  Root.contextType = AuthContext;

  export default Root;