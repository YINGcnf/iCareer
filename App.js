import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons"
import Login from "./src/Login";
import Ability from "./src/Ability";
import Home from "./src/Home";
import Learn from "./src/Learn";
import Competition from "./src/Competition";
import Work from "./src/Work";
import Personal from "./src/Personal";
import SearchInput from "./src/components/SearchInput";
import { View, TextInput, Image } from "react-native";
import { Text } from "@react-native-material/core";
import { useState } from "react";
import { set } from "react-native-reanimated";


const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
              break;
            case 'Learn':
              iconName = focused
                ? 'ios-book'
                : 'ios-book-outline';
              break;
            case 'Competition':
              iconName = focused
                ? 'ios-flag'
                : 'ios-flag-outline';
              break;
            case 'Work':
              iconName = focused
                ? 'ios-briefcase'
                : 'ios-briefcase-outline';
              break;
            case 'Personal':
              iconName = focused
                ? 'ios-person'
                : 'ios-person-outline';
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={16} color={color} style={{ marginTop: 10 }} />
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={() => ({
          headerLeft: () => (
            <Image
              source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/14/810b7ac39eff1eac.png' }}
              style={{ marginLeft: 15, width: 35, height: 35 }}
            />),
          headerTitle: () => <Text variant='h6' style={{ marginLeft: -10 }}>iCareer</Text>,
          headerRight: () => <SearchInput />
        })}
      />
      <Tab.Screen
        name='Learn'
        component={Learn}
        options={() => ({
          headerLeft: () => (
            <Image
              source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/14/810b7ac39eff1eac.png' }}
              style={{ marginLeft: 20, width: 35, height: 35 }}
            />),
          headerTitle: () => <Text variant='h6' style={{ marginLeft: -10 }}>iCareer</Text>,
          headerRight: () => <SearchInput />
        })}
      />
      <Tab.Screen
        name='Competition'
        component={Competition}
        options={() => ({
          headerLeft: () => (
            <Image
              source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/14/810b7ac39eff1eac.png' }}
              style={{ marginLeft: 20, width: 35, height: 35 }}
            />),
          headerTitle: () => <Text variant='h6' style={{ marginLeft: -10 }}>iCareer</Text>,
          headerRight: () => <SearchInput />
        })}
      />
      <Tab.Screen
        name='Work'
        component={Work}
        options={() => ({
          headerLeft: () => (
            <Image
              source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/14/810b7ac39eff1eac.png' }}
              style={{ marginLeft: 20, width: 35, height: 35 }}
            />),
          headerTitle: () => <Text variant='h6' style={{ marginLeft: -10 }}>iCareer</Text>,
          headerRight: () => <SearchInput />
        })}
      />
      <Tab.Screen
        name='Personal'
        component={Personal}
        options={() => ({
          headerLeft: () => (
            <Image
              source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/14/810b7ac39eff1eac.png' }}
              style={{ marginLeft: 20, width: 35, height: 35 }}
            />),
          headerTitle: () => <Text variant='h6' style={{ marginLeft: -10 }}>iCareer</Text>,
          headerRight: () => <SearchInput />
        })}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Ability'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Ability' component={Ability} />
          <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;