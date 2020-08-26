import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // flexDirection: 'row',
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});

function App() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
      <Text style={style.text}>Hello World</Text>
    </View>
  );
}

export default App;
