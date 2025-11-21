const TMDB_API_KEY = process.env.EXPO_PUBLIC_TMDB_APIKEY;
const TMDB_BEARER =
  process.env.EXPO_PUBLIC_TMDB_BEARER ?? process.env.EXPO_MOVIE_APIKEY;

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: TMDB_API_KEY,
  headers: {
    accept: "application/json",
    ...(TMDB_BEARER ? { Authorization: `Bearer ${TMDB_BEARER}` } : {}),
  },
};

const buildEndpoint = (query: string) => {
  if (!TMDB_API_KEY) {
    throw new Error(
      "Missing EXPO_PUBLIC_TMDB_APIKEY. Add it to your .env and restart Expo."
    );
  }

  const params = new URLSearchParams({ api_key: TMDB_API_KEY });

  if (query) {
    params.append("query", query);
    return `${TMDB_CONFIG.BASE_URL}/search/movie?${params.toString()}`;
  }

  params.append("sort_by", "popularity.desc");
  return `${TMDB_CONFIG.BASE_URL}/discover/movie?${params.toString()}`;
};

export const getMovies = async ({ query }: { query: string }) => {
  const endpoint = buildEndpoint(query);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch movies (status ${response.status}): ${errorText || "No details"}`
    );
  }

  const data = await response.json();
  return data.results;
};