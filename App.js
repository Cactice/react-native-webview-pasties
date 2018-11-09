import React from 'react';
import { StyleSheet, Text, View,WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1} }
      onStartShouldSetResponder = {() => console.log('You click by View')}
      >
      <WebView
      style    = {{flex:1}}
      source   = {{uri: 'https://github.com/'}}
      onScroll = {console.log('muooo')}
      />
      <View style={{position: 'absolute', width: 30, height: 30, left: 10, top: 10, backgroundColor: '#0000FF'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center',
  },
});
