import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SettingNavigator from '../navigation/settingnav';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screen_options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
            case 'Home':
                iconName = 'ios-information-circle';
                break;
            case 'Upload':
                iconName = 'settings';
                break;
            case 'Users':
                iconName = 'barcode';
                break;
            default:
                iconName = 'american-football';
                break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: 'gray',
});

const Tab = createBottomTabNavigator();



function ViewBottomTabs() {
    return (
        <Tab.Navigator screenOptions={screen_options} style={{padding: 10}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingNavigator} />
        </Tab.Navigator>
    );
}

export default ViewBottomTabs;