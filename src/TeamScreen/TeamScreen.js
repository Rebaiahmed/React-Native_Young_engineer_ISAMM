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
  List, ListItem,
  Thumbnail
} from "native-base";

import ActionButton from 'react-native-action-button';

export default class TeamScreen extends React.Component {



  constructor() {
    super()
     this.state = {
       active: 'true'
     };
   }


//**********************//
goChat = ()=>{
  console.log("clicked clicked !")
}




  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Our Team </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List>
           <ListItem>
             <Thumbnail square size={80}
               source={require('../images/team/ahmed.jpeg')} />
             <Body>
               <Text>Rebai Ahmed</Text>
               <Text note>President .</Text>
             </Body>
           </ListItem>



           <ListItem>
             <Thumbnail square size={80}
               source={require('../images/team/hosni.jpeg')} />
             <Body>
               <Text>Hosni Mansour</Text>
               <Text note>Vice President .</Text>
             </Body>
           </ListItem>

         </List>
        </Content>



                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton buttonColor="#2196f3" icon={<Icon name='md-chatboxes' size={25} />}

                  title="New Task"  onPress={() => this.props.navigation.navigate("Chat")}
                  color="#2196f3">

                </ActionButton>






      </Container>
    );
  }
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
