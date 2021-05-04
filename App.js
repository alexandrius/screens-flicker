import React from "react";
import Navigator from "./Navigator";
import { screensEnabled } from "react-native-screens";

console.log({ screensEnabled: screensEnabled() });

export default function App() {
   return <Navigator />;
}
