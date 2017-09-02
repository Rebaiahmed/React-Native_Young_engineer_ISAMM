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
import PhotoView from 'react-native-photo-view';

import ActionButton from 'react-native-action-button';

export default class GalleryScreen extends React.Component {



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
            <Title>Our Gallery </Title>
          </Body>
          <Right />
        </Header>
        <Content>





        <Card>
          <CardItem header>
                    <Text>Formation java 2015/2016</Text>
          </CardItem>
         <CardItem cardBody>
           <Image source={require('../images/discover.jpeg')} style={{height: 200, width: null, flex: 1}}/>

         </CardItem>

       </Card>

       <Card>
         <CardItem header>
                   <Text>Staff 2016/2017</Text>
         </CardItem>

        <CardItem cardBody>
          <Image source={require('../images/discover.jpeg')} style={{height: 200, width: null, flex: 1}}/>

        </CardItem>

      </Card>

      <Card>

        <CardItem header>
                  <Text>TopCoder 2016/2017</Text>
        </CardItem>

       <CardItem cardBody>
         <Image source={require('../images/discover.jpeg')} style={{height: 200, width: null, flex: 1}}/>

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
