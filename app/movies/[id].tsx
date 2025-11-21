import Header from '@/components/header';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
    const {id,overview,title,poster_path,release_date} = useLocalSearchParams();
    return (
    <SafeAreaView className='flex-1 bg-background'>
      <ScrollView>
      <View className='p-5'>
        <Header/>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
          className="w-64 h-96 rounded-lg mx-auto mb-5"
        />
        <Text className='text-3xl font-jakarta-semibold text-center mb-5 text-text'>{title}</Text>
        <Text className='text-lg font-jakarta-regular text-text-muted mb-5 text-center'>{release_date}</Text>
        <Text className='text-base/7 font-jakarta-regular text-text-muted'>{overview || 'No overview available'}</Text>
        <Link href={{ pathname: '/screens/conversation/[id]', params: { id: id?.toString() ?? '' } }} asChild>
          <TouchableOpacity className='bg-primary p-4 rounded-xl mx-auto w-full flex-row items-center gap-2 justify-center my-4'>
            <AntDesign name="fire" size={20} color="white" />
            <Text className='text-white text-center font-jakarta-semibold'>Roast</Text>
          </TouchableOpacity>
        </Link>
        
        <TouchableOpacity className='bg-secondary p-4 rounded-xl mx-auto w-full flex-row items-center gap-2 justify-center'>
          <AntDesign name="safety" size={20} color="white" />
          <Text className='text-white text-center font-jakarta-semibold'>Defend</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
       
    </SafeAreaView>
  );
};

export default Details;
