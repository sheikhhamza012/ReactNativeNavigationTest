import React from 'react'
import {View,Text,Button} from 'react-native'
export default class b extends React.Component{

    constructor(props){
    super(props);
}
render(){
    return(
        <View style={{flex:1,backgroundColor:"#2ecc71",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           <Text style={{fontSize:32,color:"#fff"}}>B</Text>
            <Button title="Screen a" onPress={()=>{this.props.navigation.navigate('A')}}></Button>
            <Button title="Screen c" onPress={()=>{this.props.navigation.navigate('C')}}></Button>
        </View>
    );
}
}