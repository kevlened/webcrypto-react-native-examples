import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import crypto from 'isomorphic-webcrypto';
import hex from 'hex-lite';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      random: null,
      hash: null
    };

    crypto.ensureSecure()
    .then(() => {
      const array = new Uint8Array(1);
      crypto.getRandomValues(array);
      this.setState({
        random: array[0]
      });
    });

    // crypto.subtle.digest(
    //   { name: 'SHA-256' },
    //   new Uint8Array([1,2,3]).buffer
    // )
    // .then(hash => {
    //   this.setState({
    //     hash: hex.fromBuffer(hash)
    //   });
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {this.state.random ? <Text>Random: {this.state.random}</Text> : null}
        {this.state.hash ? <Text>Hash: {this.state.hash}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
