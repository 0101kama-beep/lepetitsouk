import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="Menu"
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

         
        }}
      />
    </Stack>
  );
}
