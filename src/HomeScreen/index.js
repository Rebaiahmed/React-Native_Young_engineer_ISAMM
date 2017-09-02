import React, { Component } from "react";

import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";

import HomeScreen from './HomeScreen.js' ;
import GalleryScreen from '../GalleryScreen/GalleryScreen' ;
import EventsScreen from '../EventsScreen/EventsScreen' ;
import ContactScreen from '../ContactScreen/ContactScreen' ;
import ChatScreen from   '../ChatScreen/ChatScreen' ;
import TeamScreen from '../TeamScreen/TeamScreen' ;





import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Events: { screen: EventsScreen },
    Team: { screen: TeamScreen },
    Gallery: { screen: GalleryScreen },
    Contact: { screen: ContactScreen },

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
