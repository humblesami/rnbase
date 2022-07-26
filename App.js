import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ViewBottomTabs from './src/navigation/bottomtabs';


export default function App() {
    return (
        <NavigationContainer>
            <ViewBottomTabs />
        </NavigationContainer>
    );
}
