import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, Register } from "../../screens";
import { Header } from "../../components";
import { AuthContextProvider, defaultValue } from "../../context";

export type AuthStackParamList = {
  SignIn: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <AuthContextProvider value={defaultValue}>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={Register}
        />
      </Stack.Navigator>
    </AuthContextProvider>
  );
}

export { AuthNavigation };
