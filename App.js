import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Contacts from './src/pages/contats'
import Information from './src/pages/information'
import Home from './src/pages/home'
import Other from './src/pages/other'
import { FontAwesome } from '@expo/vector-icons'
import 'react-native-gesture-handler';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          switch (route.name) {
            case 'Home':
              iconName = 'home'
              break;
            case 'Contatos':
              iconName = 'users'
              break;
            case 'Mais...':
              iconName = 'ellipsis-h'
              break;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Contatos' component={Contacts} />
      <Tab.Screen name='Mais...' component={Other} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Principal' component={Tabs} />
        <Stack.Screen name='Information' component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function NavigationByStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Contacts" component={Contacts} />
//       <Stack.Screen name="Information" component={Information} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Home' component={Home} />
//         <Tab.Screen name='Contatos' component={NavigationByStack} />
//         <Tab.Screen name='Mais...' component={Other} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }
