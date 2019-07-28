import A from './src/a'
import B from './src/b'
import C from './src/c'
import {createBottomTabNavigator,createDrawerNavigator,createAppContainer,createStackNavigator, DrawerActions} from 'react-navigation'
const nav ={
  A:{
    screen:A,
    navigationOptions:{
      title:'A'
    }
  }, B:{
    screen:B,
    navigationOptions:{
      title:'B'
    }
  }
  , C:{
    screen:C,
    navigationOptions:{
      title:'C'
    }
  }
}
const stack=(d)=>{return(createStackNavigator(nav,{
  initialRouteName:d,
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:"#eee"
    },headerTintColor:"#333"
  }
}))
};
const bottom=(d)=>{return(createBottomTabNavigator({
  NavA:stack('A'),
  NavB:stack('B'),
  NavC:stack('C')
},{
  initialRouteName:d
}))};
const draw=createDrawerNavigator({
  DrawA:bottom('NavA'),
  DrawB:bottom('NavB'),
  DrawC:bottom('NavC'),
})
export default createAppContainer(draw);