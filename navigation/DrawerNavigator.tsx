import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Sentencing from '../screens/Sentencing';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Rules" component={Home} />
      <Drawer.Screen name="Sentencing" component={Sentencing} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;