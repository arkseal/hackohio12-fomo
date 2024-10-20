import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon, TabBarIcon2, TabBarIcon4 } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS } from '@/constants/theme';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    
    return (
    
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors['light'].tint,
            headerShown: false,
            tabBarStyle: { height: 65 },  
        }}>
            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    tabBarStyle: {height:65},
                    tabBarLabelStyle: {display: 'none'},
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={focused ? Colors['light'].tabIconSelected : Colors['light'].unselected}
                            size={35}
                            style={{ paddingBottom: 20, paddingTop: 5}}
       
                        />
                    ),
                    //header code
                    //https://muhammetaydinn.medium.com/hide-header-when-scrolling-down-in-react-native-without-package-2bc74c35e23
                    //^tutorial for animation?

                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "Recommended FOMO events for you",
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary,
                     
                    }
                }}   
            />
            <Tabs.Screen
                name="AddPost"
                options={{
                    title: 'Post',
                    tabBarLabelStyle: {display: 'none', paddingBottom:10},
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon2
                            name='diff-added'
                            color={focused ? Colors['light'].tabIconSelected : Colors['light'].unselected}
                            size={35}
                            style={{paddingBottom: 20, paddingTop: 5}}
                        />
                    ),
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "Host an Event",
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary
                        
                    }
                }}
            />
            <Tabs.Screen
                name="Search"
                options={{
                    title: 'Search',
                    tabBarLabelStyle: {display: 'none', },
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'search' : 'search-outline'}
                            color={focused ? Colors['light'].tabIconSelected : Colors['light'].unselected}
                            size={35}
                            style={{ paddingBottom: 20, paddingTop: 5 }}
                        />
                    ),

                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "Discover Events",
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary
                    }

                }}
            />
            <Tabs.Screen
                name="myEvents"
                options={{
                    title: 'myEvents',
                    tabBarLabelStyle: {display: 'none', paddingBottom:10},
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? 'calendar-sharp' : 'calendar-outline'}
                            color={focused ? Colors['light'].tabIconSelected : Colors['light'].unselected}
                            size={35}
                            style={{paddingBottom: 20, paddingTop: 5}}
                        />
                    ),

                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "My Events",
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary
                    }
                }}
            />  
            <Tabs.Screen
                name="Account"
                options={{
                    title: 'Account',
                    tabBarLabelStyle: {display: 'none', paddingBottom:10},
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon4
                            name={focused ? 'user-alt' : 'user'}
                            color={focused ? Colors['light'].tabIconSelected : Colors['light'].unselected}
                            size={35}
                            style={{ paddingBottom: 20, paddingTop: 5 }}
                        />
                    ),

                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: "My Profile",
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary
                    }
                }}
            />      
        </Tabs>
    );
}
