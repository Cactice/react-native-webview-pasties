import React from 'react';
import { StyleSheet, Text, View,WebView } from 'react-native';
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
        console.log(jsonObj.data)
      }}
      />
      <View style={{position: 'absolute', width: 30, height: 50, left: 10, top: this.state.scrollPositionY+200, backgroundColor: '#0000FF'}}/>
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
