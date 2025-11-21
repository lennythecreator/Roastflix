import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, TextInput } from "react-native";
import "./globals.css";

SplashScreen.preventAutoHideAsync().catch(() => {});

let defaultFontApplied = false;

const applyDefaultFont = () => {
  if (defaultFontApplied) return;
  defaultFontApplied = true;

  const injectFont = (component: any) => {
    component.defaultProps = component.defaultProps || {};
    const existingStyle = component.defaultProps.style;
    if (Array.isArray(existingStyle)) {
      component.defaultProps.style = [
        { fontFamily: "PlusJakartaSans_400Regular" },
        ...existingStyle,
      ];
    } else if (existingStyle) {
      component.defaultProps.style = [
        { fontFamily: "PlusJakartaSans_400Regular" },
        existingStyle,
      ];
    } else {
      component.defaultProps.style = { fontFamily: "PlusJakartaSans_400Regular" };
    }
  };

  injectFont(Text);
  injectFont(TextInput);
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
  });

  useEffect(() => {
    if (fontError) {
      console.error("Failed to load fonts", fontError);
    }
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      applyDefaultFont();
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { fontFamily: "PlusJakartaSans_600SemiBold" },
        headerStyle: { backgroundColor: "#05030A" },
        contentStyle: { backgroundColor: "#05030A" },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
