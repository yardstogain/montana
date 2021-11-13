import { Ionicons } from "@expo/vector-icons";
import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useGetCurrentWeekQuery } from "../state/services/teams";
import { setCurrentWeek } from "../state/ui";

function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCurrentWeekQuery();
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "Lato Regular": Lato_400Regular,
          "Lato Bold": Lato_700Bold,
          "Lato Black": Lato_900Black,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  React.useEffect(() => {
    if (data) {
      dispatch(setCurrentWeek(data));
    }
  }, [data, isLoading]);

  return isLoadingComplete && isLoading;
}

export { useCachedResources };
