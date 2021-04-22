import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import HomePage from '../pages/Home'
import WalletPage from '../pages/Wallet'
import PayPage from '../pages/Pay'
import PayButton from '../components/PayButton';



const Tab = createBottomTabNavigator()

const icons: any = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Notification: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib: AntDesign,
    name: 'setting'
  },
}

const AppRoutes: React.FC = () => (
  <Tab.Navigator
  tabBarOptions={{
    style: {
      backgroundColor: '#131418',
      borderTopColor: 'rgba(255,255,255,0.2'
    },
    activeTintColor: '#fff',
    inactiveTintColor: '#92929c'
  }}
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if(route.name === 'Pay') return <PayButton focused={focused} onPress={() => navigation.navigate('Pay')} />

        const { lib: Icon, name } = icons[route.name]
        return <Icon name={name} size={size} color={color} />
      }
    })}
  >
    <Tab.Screen name="Home" component={HomePage} options={{ title: 'Início' }} />
    <Tab.Screen name="Wallet" component={WalletPage} options={{ title: 'Carteira' }} />
    <Tab.Screen name="Pay" component={PayPage} options={{title: ''}}  />
    <Tab.Screen name="Notification" component={PayPage} options={{ title: 'Notificações' }} />
    <Tab.Screen name="Settings" component={PayPage} options={{ title: 'Ajustes' }} />
  </Tab.Navigator>
)

export default AppRoutes
