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

export default class EventsScreen extends React.Component {



  constructor() {
    super()
     this.state = {
       active: 'true'
     };
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
            <Title>Our Events </Title>
          </Body>
          <Right />
        </Header>
        <Content>


          <Card>
           <CardItem>
             <Left>
               <Thumbnail   source={require('../images/logo.png')} />
               <Body>
                 <Text>TopCoder 2017/2018</Text>

               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={require('../images/topcoder.jpeg')} style={{height: 200, width: null, flex: 1}}/>

           </CardItem>


           <CardItem cardBody>
             <Text>Description of the Event </Text>
           </CardItem>


         </Card>


         <Card>
          <CardItem>
            <Left>
              <Thumbnail   source={require('../images/logo.png')} />
              <Body>
                <Text>Hackthon HackForTunisia</Text>

              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../images/event.jpg')} style={{height: 200, width: null, flex: 1}}/>

          </CardItem>


          <CardItem cardBody>
            <Text>Description of The Event  </Text>
          </CardItem>




        </Card>



        <Card>
         <CardItem>
           <Left>
             <Thumbnail   source={require('../images/logo.png')} />
             <Body>
               <Text>WorkShop Django </Text>

             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
           <Image source={require('../images/workshop.jpeg')} style={{height: 200, width: null, flex: 1}}/>

         </CardItem>


         <CardItem cardBody>
           <Text>Description ofthe Event </Text>
         </CardItem>





       </Card>


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
