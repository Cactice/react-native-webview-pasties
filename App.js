import React from 'react';
import { StyleSheet, Text, View,WebView, TouchableOpacity } from 'react-native';
import './src/functions/scrollResponse'


var injectJS = `
function scrollResponse(scrollPosition){
    var msg = {
        type: "scrollPosition",
        data: scrollPosition
    }
    var strMsg = JSON.stringify(msg)
    try{
        window.postMessage(strMsg);
    } catch(error) {
        console.error(error);
    }
}

window.addEventListener('scroll', function(e) {
    e.preventDefault();
    console.log({
      x: this.scrollX,
      y: this.scrollY
    })
    scrollResponse({
      x: this.scrollX,
      y: this.scrollY
    })
})
`

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      scrollPositionY: 0
    }
  }
  render() {
    return (
      <View style={{flex:1}}
      >
      <WebView
      useWebKit
      style              = {{flex:1}}
      source             = {{uri: 'https://github.com'}}
      injectedJavaScript = {injectJS}
      onMessage          = {(event)=>{
        var jsonObj = JSON.parse(event.nativeEvent.data)
        this.setState({scrollPositionY : -jsonObj.data.y})
      }}
      />
      <View style={{
        position       : 'absolute',
        alignSelf      : 'center',
        borderRadius   : 10,
        borderWidth    : 1,
        borderColor    : 'transparent',
        width          : 300,
        height         : 50,
        top            : this.state.scrollPositionY+550,
        backgroundColor: 'limegreen',
        alignItems     : 'center',
        justifyContent : 'center',
        }}>
        <TouchableOpacity
        onPress = {()=>{
          alert('Native Button Tapped!!')
        }}
        >
        <Text style={{color : 'white', fontSize:20}}> Native Button </Text>
        </TouchableOpacity>
        </View>
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
