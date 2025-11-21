import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import React from 'react';

const TabBarIcon = ({name, color, size}: {name: string, color: string, size: number}) => {
    return (
        <AntDesign name={name} color={color} size={size} />
    )
}
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#05030A" },
        tabBarStyle: {
          backgroundColor: "#0F172A",
          borderTopColor: "rgba(255,255,255,0.12)",
        },
        tabBarActiveTintColor: "#FF005C",
        tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
        tabBarLabelStyle: { fontFamily: "PlusJakartaSans_500Medium" },
      }}
    >
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <TabBarIcon name="home" color={color} size={size} />
        )}} />
        <Tabs.Screen name='movies/[id]' options={{headerShown: false}} />
        <Tabs.Screen name='search' options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <TabBarIcon name="search" color={color} size={size} />
        )}} />
        <Tabs.Screen name='profile' options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <TabBarIcon name="user" color={color} size={size} />
        )}} />
        <Tabs.Screen name='Favourites' options={{headerShown: false, tabBarIcon: ({color, size}) => (
            <TabBarIcon name="heart" color={color} size={size} />
        )}} />
    </Tabs>
  )
}

export default _layout