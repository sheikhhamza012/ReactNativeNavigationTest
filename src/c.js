import React from 'react'
import {View,Text,Button} from 'react-native'
export default class c extends React.Component{
constructor(props){
    super(props);
}

  render(){
    return(
        <View style={{flex:1,backgroundColor:"#3498db",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:32,color:"#fff"}}>C</Text>
            <Button title="Screen a" onPress={()=>{this.props.navigation.navigate('A')}}></Button>
            <Button title="Screen b" onPress={()=>{this.props.navigation.navigate('B')}}></Button>
        </View>
    );
}
}