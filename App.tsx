import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/providers/AuthProvider";
import { Theme, DarkTheme } from "./src/theme/theme";
import { useCachedResources } from "./src/hooks/useCachedResources";
import { store } from "./src/state";

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme === "dark" ? DarkTheme : Theme}>
        <SafeAreaProvider>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
