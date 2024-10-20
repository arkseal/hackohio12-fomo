// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarIcon2({ style, ...rest }: IconProps<ComponentProps<typeof Octicons>['name']>) {
  return <Octicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarIcon3({ style, ...rest }: IconProps<ComponentProps<typeof MaterialIcons>['name']>) {
  return <MaterialIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarIcon4({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome5>['name']>) {
  return <FontAwesome5 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}


