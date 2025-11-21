import MovieCard from '@/components/movie-card'
import SearchBar from '@/components/searchbar'
import { getMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Search = () => {
  const {data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
  } = useFetch(() => getMovies({query: ''}))
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <View className="w-full px-5 h-full ">
        <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'flex-start', gap: 20, paddingRight:5, marginBottom:10}}
        scrollEnabled={true}
        className="mt-2 pb-32"
        ListHeaderComponent={<>
        <View className="mb-5 flex-col gap-2">
          <AntDesign name="camera" size={20} color="#FF005C" />
          <Text className="font-jakarta-semibold text-2xl mb-5 text-text">Roastflix</Text>
          <SearchBar onPress={() => refetchMovies()}/>
        </View>
        
        </>}
        />
      </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({})