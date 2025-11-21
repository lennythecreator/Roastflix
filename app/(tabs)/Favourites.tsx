import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Favourites = () => {
  return (
    <SafeAreaView className='flex-1 bg-background items-center justify-center'>
      <Text className='text-text font-jakarta-semibold text-lg'>Favourites</Text>
    </SafeAreaView>
  )
}

export default Favourites
