import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingScreen from "../screens/settings";
import SettingUpdateScreen from "../screens/setting_update";


const Stack = createNativeStackNavigator();

const SettingNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SettingHome" component={SettingScreen} />
        <Stack.Screen name="SettingUpdate" component={SettingUpdateScreen} />
    </Stack.Navigator>
);

export default SettingNavigator;