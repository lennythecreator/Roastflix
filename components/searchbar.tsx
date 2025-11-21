import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { TextInput, View } from 'react-native';

interface Props {
  onPress?: () => void;
}
const SearchBar = ({onPress}: Props) => {
  return (
    <View className="w-full flex-row bg-surface items-center px-4 py-3 gap-3 rounded-full border border-white/10">
        <AntDesign name="search1" size={18} color="#5B2BE0" />
        <TextInput
            className="flex-1 text-text font-jakarta-regular"
            placeholder="Search for a movie"
            placeholderTextColor="rgba(245,245,255,0.55)"
            onPress={onPress}
        />
</View>
  )
}

export default SearchBar