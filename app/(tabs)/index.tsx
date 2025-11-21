import Header from "@/components/header";
import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/searchbar";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../app/globals.css";
;
export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => getMovies({ query: "" }));
  return (
    <SafeAreaView className="flex-1 w-full bg-background">
      <Header />
      {moviesLoading ? (
        <ActivityIndicator size="large" color="#FF005C" />
      ) : moviesError ? (
        <Text className="text-accent px-5">{moviesError?.message}</Text>
      ) : (
        <View className="w-full px-5 h-full">
          <SearchBar onPress={() => router.push("/search")} />
          <>
           <Text className="text-2xl font-jakarta-semibold text-text mt-5 mb-2">Latest Movies</Text>
           <FlatList
           data = {movies}
           renderItem={({item}) => (
            <MovieCard movie={item} />
           )}
           keyExtractor={(item) => item.id.toString()}
           numColumns={3}
           columnWrapperStyle={{justifyContent: 'flex-start', gap: 20, paddingRight:5, marginBottom:10}}
           scrollEnabled={true}
           className="mt-2 pb-32"
           />
          </>
        </View>
      )}
    </SafeAreaView>
  );
}
