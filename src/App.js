import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Spinner, Header, Button } from './Components/Common';
import LoginForm from './Components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBd_LUsvrMcb7arldXyytlLHNWJJDvMBGY',
    authDomain: 'auth-58661.firebaseapp.com',
    databaseURL: 'https://auth-58661.firebaseio.com',
    storageBucket: 'auth-58661.appspot.com',
    messagingSenderId: '21943814954'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => { firebase.auth().signOut(); }}>
          Log Out
        </Button>
    );
    case false:
      return <LoginForm />;
    default:
    return <Spinner size='large' />;
  }
}


  render() {
    return (
      <View>
        <Header headerText={'Login'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
