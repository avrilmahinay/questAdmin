import React from 'react'
import { Stack } from 'expo-router'


const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown: false}}/>
      <Stack.Screen name="dashboard"  options={{headerShown: false}}/>
      <Stack.Screen name="user"  options={{headerShown: false}}/>
      <Stack.Screen name="task"  options={{headerShown: false}}/>
      <Stack.Screen name="reports"  options={{headerShown: false}}/>
      <Stack.Screen name="settings"  options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout