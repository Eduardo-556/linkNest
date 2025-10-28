import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  const backgroundColor = colors.gray[950];

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
        }}
      />
    </View>
  );
}
