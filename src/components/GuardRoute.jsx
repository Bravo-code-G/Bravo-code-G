import React from 'react';
import { Route, Redirect } from 'react-router';
import {AuthContext} from './AuthContext'


class GuardRoute extends React.Component {
    render(){
      const {
        type,
        ...rest
      } = this.props;
      const {
        isLoggedIn,
      } = this.context;
  
      if(type === 'private' && !isLoggedIn){
        return <Redirect to='/'/>;
      }else if (type === 'public' && isLoggedIn){
        return <Redirect to='User'/>;
      }
      return <Route {...rest} />
    }
  }
   
  GuardRoute.contextType = AuthContext;

  export default GuardRoute;