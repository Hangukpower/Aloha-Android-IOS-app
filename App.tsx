import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function View1() {
  return (
    <View style={styles.container}>
      <Text>Hello, SER 423! My name is John Kim!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function View2() {
  return (
    <View style={styles.container2}>
      <Text>Thanks for using my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState('View1');
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#76b5c5',
          inactiveTintColor: '#a6a6a6',
        }}
        initialRouteName="View1"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'View1') {
              iconName = 'ios-home';
            } else if (route.name === 'View2') {
              iconName = 'ios-thumbs-up';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOnPress={({ navigation, route }) => {
          if (currentTab !== route.name) {
            setCurrentTab(route.name);
            navigation.navigate(route.name);
          }
        }}
      >
        <Tab.Screen name="View1" component={View1} />
        <Tab.Screen name="View2" component={View2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76b5c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#ffcc99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
