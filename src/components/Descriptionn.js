import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/app';
firebase.initializeApp({
  apiKey: "AIzaSyAKDUovEMCj_2yDeWnlcam0rxnD4zMopvs",
  authDomain: "bravo-react-0.firebaseapp.com",
  projectId: "bravo-react-0",
  storageBucket: "bravo-react-0.appspot.com",
  messagingSenderId: "400531528348",
  appId: "1:400531528348:web:0901490a4666e49f1feb59",
  measurementId: "G-W196JE55ZJ"
});
const databasee = firebase.database();



class Descriptionn extends Component {

  constructor() {
    super();
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', snapshot => {
      const currentMessages = snapshot.val();
      
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        });
      }

    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    const message = {
      id: this.state.messages.length,
      text: this.state.message
    };
    
    console.log(message)
    firebase.database().ref('messages/' + message.id).set(message);
  }

  render() {
    // looping Messages
    const currentMessages = this.state.messages.map((message, i) => {
      return (
       <li key={message.id} className="list-group-item">{message.text}</li>
      )
    })

    return(
      <div className="card">
        <div class="card-body">
          <ul className="list-group">
            {currentMessages} 
          </ul>
        </div>

        <div class="card-footer">
          <input 
            type="text" 
            placeholder="Type your Message"
            onChange={this.updateMessage}
            className="form-control"
          />
          <button onClick={this.submitMessage} className="btn btn-primary btn-block">
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default Descriptionn;