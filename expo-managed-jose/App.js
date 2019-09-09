import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as jwt from 'jwt-lite';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };

    this.init();
  }

  async init() {
    const key = {alg: 'HS256', ext: true, k: 'exbIckCHFGdUfuPRwjXFXK_IqYMpFM30LoJYSHp-y4IQyO0YRDh0atzudr1S0UK1_tKn5BehGDk129N1is179g', key_ops: ['sign', 'verify'], kty: 'oct'};
    const token = await jwt.sign({hello: 'world'}, key);
    this.setState({token});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {this.state.token ? <Text>Token: {this.state.token}</Text> : null}
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
