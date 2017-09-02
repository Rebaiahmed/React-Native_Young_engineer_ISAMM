




import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

//************import the navigation screen********//

import HomeScreenRouter from './HomeScreen/index' ;


import HomeScreen from './HomeScreen/HomeScreen' ;
import GalleryScreen from './GalleryScreen/GalleryScreen' ;
import EventsScreen from './EventsScreen/EventsScreen' ;
import ContactScreen from './ContactScreen/ContactScreen' ;
import ChatScreen from   './ChatScreen/ChatScreen' ;
import TeamScreen from './TeamScreen/TeamScreen' ;


const SimpleStack = StackNavigator(
  {
    Drawer: {
    screen: HomeScreenRouter,
          },
  Chat :{
    screen : ChatScreen
  }
},
{
  initialRouteName :'Drawer',
  headerMode: 'none',
}

);

export default SimpleStack;
