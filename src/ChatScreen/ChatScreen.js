import React from "react";
import { StatusBar,View,StyleSheet,Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Fab,
  Thumbnail
} from "native-base";

import ActionButton from 'react-native-action-button';
import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component {



  constructor() {
    super()
     this.state = {
       active: 'true',
       messages :[]
     };
   }


   componentWillMount() {
       this.setState({
         messages: [
           {
             _id: 1,
             text: 'Hello',
             createdAt: new Date(),
             user: {
               _id: 2,
               name: 'React Native',
               avatar: '../images/logo.png',
             },
           },
         ],
       });
     }

//***********************************//

     onSend(messages = []) {
       this.setState((previousState) => ({
         messages: GiftedChat.append(previousState.messages, messages),
       }));
     }




  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>ChatBot</Title>
          </Body>
          <Right />
        </Header>


        <GiftedChat
               messages={this.state.messages}
               onSend={(messages) => this.onSend(messages)}
               user={{
                 _id: 1,
               }}
             />


      </Container>
    );
  }
}


/*const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});*/
