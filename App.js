import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
// custom
import Categories from './components/categories/Categories';
import Meals from './components/meals/Meals';
import MealDetail from './components/meals/MealDetail/MealDetail';
import Favorites from './components/favorites/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#652501'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#24180f' 
      },
    }}>
    <Drawer.Screen name="Categories" component={Categories}/>
    <Drawer.Screen name="Favorites" component={Favorites}/>
  </Drawer.Navigator>
} 

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#652501'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#24180f' 
            }
          }}
        >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator}  
            options={{ 
              headerShown: false,
            }}
          />          
          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>          
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
