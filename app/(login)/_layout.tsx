import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon, TabBarIcon2 } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS } from '@/constants/theme';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    
    return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 0 },  
        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: "",
              
              }}   
          />
    </Tabs>
  );
}
