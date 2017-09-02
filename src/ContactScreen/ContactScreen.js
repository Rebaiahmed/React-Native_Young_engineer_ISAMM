import React from "react";
import { StatusBar,View,StyleSheet,Image,Dimensions,
  InteractionManager } from "react-native";
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
import MapView from 'react-native-maps';






export default class ContactScreen extends React.Component {



  constructor() {
    super()
     this.state = {
       active: 'true',
       loading: true,
     };
   }


//**********************//
goChat = ()=>{
  console.log("clicked clicked !")
}

//**************************//
componentDidMount() {
   InteractionManager.runAfterInteractions(() => {
     this.setState({ loading: false });
   });
 }



  render() {

    const { width, height } = Dimensions.get('window');
        const ratio = width / height;

        const coordinates = {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922 * ratio,
        };

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
            <Title>Contact Us </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

          <Card>
                    <CardItem header>
                      <Image square source={require('../images/email.png')}
                          style={{width: 20, height: 20}}   />
                      <Text> email : mail@mail.com </Text>
                    </CardItem>

                    <CardItem header>
                      <Image square source={require('../images/phone.png')}
                          style={{width: 20, height: 20}}   />
                      <Text> télephone : (+216) 20140428 </Text>
                    </CardItem>


                    <CardItem header>
                      <Image square source={require('../images/search.png')}
                          style={{width: 20, height: 20}}   />
                      <Text> Website : <Text>www.google.com </Text> </Text>
                    </CardItem>



                    <CardItem footer>

                    </CardItem>
                 </Card>


            



        </Content>



                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton buttonColor="#2196f3" icon={<Icon name='md-chatboxes' size={25} />}

                  title="New Task"  onPress={() => this.props.navigation.navigate("Chat")}
                  color="#2196f3">

                </ActionButton>







      </Container>
    )
  }
}


const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
});
