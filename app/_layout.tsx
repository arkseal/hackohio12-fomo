import { Stack } from "expo-router";

import outputs from '../amplify_outputs.json';
import { Amplify } from "aws-amplify";
Amplify.configure(outputs);

export default function RootLayout() {
  return (

    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(login)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>

  );
}
