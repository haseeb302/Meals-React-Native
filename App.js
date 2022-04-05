import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// custom
import Categories from './components/categories/Categories';
import Meals from './components/meals/Meals';

const Stack = createNativeStackNavigator();

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
            name="Categories" 
            component={Categories} 
            options={{
              title: 'All Categories',              
            }} 
          />
          <Stack.Screen name="Meals" component={Meals} />
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
