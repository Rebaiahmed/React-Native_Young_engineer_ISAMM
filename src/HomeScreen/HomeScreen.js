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
  H1,
  Separator,
  Thumbnail,
  H2
} from "native-base";

import ActionButton from 'react-native-action-button';

export default class HomeScreen extends React.Component {



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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

          <Card>
           <CardItem>
             <Left>
               <Thumbnail   source={require('../images/logo.png')} />
               <Body>
                 <Text>Club Young enginner ISAMM</Text>

               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={require('../images/discover.jpeg')} style={{height: 200, width: null, flex: 1}}/>

           </CardItem>





           <CardItem>
             <Body>
                <Left>
               <Image square source={require('../images/presentation.png')}
                   style={{width: 50, height: 50}}   />
               </Left>
               <Right>
             <H2> Who We Are   </H2>

            <Text> hsshhshshshhshshhs
              shshhshshshshhshhs
              shshhshshhshshs </Text>
          </Right>
             </Body>
           </CardItem>

           <CardItem>
             <Body>
               <Image square source={require('../images/success.png')}
                   style={{width: 40, height: 40}}   />
            <H2>   Our Goals   </H2>
              <Text> Goal1 </Text>
              <Text> Goal2 </Text>
              <Text> Goal3 </Text>
             </Body>
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
