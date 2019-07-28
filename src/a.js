import React from 'react'
import {View,Text,Button} from 'react-native'


export default class a extends React.Component{
   
constructor(props){
    super(props);
}
render(){
    return(
        <View style={{flex:1,backgroundColor:"#e74c3c",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:32,color:"#fff"}}>A</Text>
            <Button title="Screen b" onPress={()=>{this.props.navigation.navigate('B')}}></Button>
            <Button title="Screen c" onPress={()=>{this.props.navigation.navigate('C')}}></Button>
        </View>
    );
}
}