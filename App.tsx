import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import TimeLine from "./src/pages/TimeLine";
import theme from "./src/global/styles/theme";

export default function App() {
  const themeType = theme["light"];

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={themeType}>
        <TimeLine />
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }
}
