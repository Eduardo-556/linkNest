import { colors } from "@/styles/colors";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Layout() {
  const backgroundColor = colors.gray[950];

  useEffect(() => {
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
          animation: "slide_from_right",
          animationDuration: 100,
          presentation: "containedModal",
          animationTypeForReplace: "pop",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          fullScreenGestureEnabled: true,
          statusBarStyle: "light",
        }}
      />
    </View>
  );
}
