import React from "react";
import { createAppContainer } from "react-navigation";
import {
   createStackNavigator,
   TransitionPresets,
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform, Text, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import { AntDesign } from "@expo/vector-icons";

export const TABS = {
   Tab1: {
      icon: "stepforward",
      tabName: "Tab1",
   },
   Tab2: {
      icon: "stepbackward",
      tabName: "Tab2",
   },
   Tab3: {
      icon: "forward",
      tabName: "Tab3",
   },
};

const styles = StyleSheet.create({
   tabLabel: {
      fontSize: 12,
      alignSelf: "center",
   },
   tabBar: {
      height: 56,
      paddingTop: 6,
      paddingBottom: getBottomSpace() || 6,
      borderTopWidth: 0,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.1,
      elevation: 12,
   },
});

const Tabs = createBottomTabNavigator(
   {
      Tab1: Screen1,
      Tab2: Screen1,
      Tab3: Screen1,
   },
   {
      defaultNavigationOptions: ({ navigation }) => ({
         tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            return (
               <AntDesign
                  name={TABS[routeName].icon}
                  size={24}
                  color={tintColor}
               />
            );
         },
         tabBarLabel: ({ focused }) => {
            const { routeName } = navigation.state;
            return (
               <Text
                  style={[
                     styles.tabLabel,
                     {
                        color: focused ? "blue" : "red",
                     },
                  ]}
               >
                  {TABS[routeName].tabName}
               </Text>
            );
         },
      }),
      tabBarOptions: {
         activeTintColor: "blue",
         inactiveTintColor: "red",
         keyboardHidesTabBar: true,
         style: styles.tabBar,
      },
   }
);

const Main = createStackNavigator(
   {
      Tabs,
      Screen2,
   },
   {
      headerMode: "none",
      defaultNavigationOptions: ({ navigation }) => ({
         gestureEnabled: Platform.select({
            ios: navigation.getParam("gestureEnabled"),
            android: false,
         }),
         ...TransitionPresets.SlideFromRightIOS,
         cardStyle: { backgroundColor: "white" },
      }),
   }
);

export default createAppContainer(Main);
