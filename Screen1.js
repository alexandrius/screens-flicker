import React from "react";
import {
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image,
   StatusBar,
   View,
} from "react-native";
import { NavigationEvents } from "react-navigation";

export default function Screen1({ navigation }) {
   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={styles.root}>
            <NavigationEvents
               onWillFocus={() => {
                  StatusBar.setBarStyle("dark-content", true);
               }}
            />

            <Image
               source={{ uri: "https://loremflickr.com/610/610" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/601/600" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/610/601" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/608/609" }}
               style={{ height: 400, width: "100%" }}
            />
         </ScrollView>
         <TouchableOpacity
            style={{
               top: 80,
               position: "absolute",
               backgroundColor: "black",
               padding: 20,
            }}
            onPress={() => {
               navigation.navigate("Screen2");
            }}
         >
            <Text style={{ color: "white" }}>Screen1</Text>
         </TouchableOpacity>
      </View>
   );
}
const styles = StyleSheet.create({
   root: {
      flex: 1,
   },
});
