# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Project overview

Roastflix is a playful movie companion built with Expo Router and React Native. It pulls live data from The Movie Database (TMDB) to showcase trending titles, lets you jump into detailed views with posters and synopses, and introduces an AI-driven "roast or defend" conversation screen for lighthearted banter about each film.

### Key features

- Grid-based home feed listing the latest movies from TMDB with posters, release dates, and ratings.
- Search tab with instant refetching to explore additional titles without leaving the app shell.
- Detail screen that surfaces the selected movie’s artwork, metadata, and quick actions to start a roast/defend session.
- Conversational screen powered by the `AI` component, which simulates a voice assistant ready to banter about the film.
- Placeholder tabs for favourites and profile, giving you room to expand into personalized watchlists later.

### Tech stack

- Expo + React Native + Expo Router for cross-platform UI and navigation.
- NativeWind/Tailwind-style utility classes for theming in `globals.css`.
- Custom `useFetch` hook plus `services/api.ts` to call TMDB’s REST API with either popular or search endpoints.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
