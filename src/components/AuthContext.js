import React from 'react';
import firebase from "firebase";
import {authStateListenerAcceso} from './ListenerAuth'

export const AuthContext = React.createContext();

export class AuthContextProvider extends React.Component {
    state = {
        authReady: false,
        isLoggedIn: false,
        user: null,
    }
    
    componentDidMount() {
        authStateListenerAcceso((user) => {
            if(user){
                this.setState({
                    authReady: true,
                    isLoggedIn: true,
                    user,
                });
            }else {
                this.setState({
                    authReady: true,
                    isLoggedIn: false,
                    user: null,
                });
            }
        });
    }
    render() {
        return (
            <AuthContext.Provider value={this.state}>
            {this.props.children}
            </AuthContext.Provider>
        );
}
}
export const AuthContextConsumer = AuthContext.Consumer;    
