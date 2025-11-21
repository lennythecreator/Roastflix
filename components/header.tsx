import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
  return (
    <View className='flex-row items-center gap-2 justify-center mb-5'>
      <View className='w-10 h-10 rounded-full bg-surface items-center justify-center border border-white/10'>
        <AntDesign name="play" size={18} color="#FF005C" />
      </View>
      <Text className='text-2xl font-jakarta-semibold text-text'>Roastflix</Text>
    </View>
  )
}

export default Header