import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  overview: string
  vote_average: number
}
const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <Link href={{pathname: `/movies/${movie.id}`, params: {overview: movie.overview, title: movie.title,poster_path: movie.poster_path, release_date: movie.release_date}}} asChild>
        <TouchableOpacity className="gap-1">
            <Image
            source={{uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150'}}
            style={{width: 100, height: 150}}
            className="w-24 h-32 rounded-lg"
            />
            <Text
              className="text-sm font-bold font-jakarta-semibold w-24 text-text"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {movie.title}
            </Text>
            <Text className="text-xs text-text-muted">{movie.release_date}</Text>
            <Text className="text-xs text-text-muted">{movie.vote_average}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard