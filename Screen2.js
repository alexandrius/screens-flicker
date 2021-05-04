import React from "react";
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image,
   StatusBar,
   ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";

export default function Screen2({ navigation }) {
   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={styles.root}>
            <NavigationEvents
               onWillFocus={() => {
                  StatusBar.setBarStyle("light-content", true);
               }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/600/600" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/603/600" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/600/603" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/604/600" }}
               style={{ height: 400, width: "100%" }}
            />
            <Image
               source={{ uri: "https://loremflickr.com/600/604" }}
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
               navigation.goBack();
            }}
         >
            <Text style={{ color: "white" }}>Back</Text>
         </TouchableOpacity>
      </View>
   );
}
const styles = StyleSheet.create({
   root: {
      flex: 1,
   },
});
