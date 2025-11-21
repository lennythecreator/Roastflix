import AI from '@/components/ai'
import Header from '@/components/header'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Conversation = () => {
  return (
    <SafeAreaView className='flex-1 w-full bg-background'>
        <View className='h-full'>
            <Header/>
            <AI/>
        </View>
    </SafeAreaView>
  )
}

export default Conversation