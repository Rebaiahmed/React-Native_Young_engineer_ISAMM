import React from "react";
import { AppRegistry, Image, StatusBar,WebView, Linking } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Separator
} from "native-base";

const routes = ["Home", "Team", "Events", "Gallery", "Contact Us"];
export default class SideBar extends React.Component {



  constructor(props) {
      super(props);

  }





  openFacebook =()=>
  {
    Linking.canOpenURL('https://www.facebook.com/').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://www.facebook.com/'); } }).catch(err => console.error('An error occurred', err));
  }



  openTwitter()
  {
    Linking.canOpenURL('https://twitter.com/AhmedRebaijs').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://twitter.com/AhmedRebaijs'); } }).catch(err => console.error('An error occurred', err));
  }


  openGogle()
  {
    Linking.canOpenURL('https://www.instagram.com/?hl=fr').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://www.instagram.com/?hl=fr'); } }).catch(err => console.error('An error occurred', err));
  }


  openLinkedin()
  {
    Linking.canOpenURL('https://www.instagram.com/?hl=fr').then(supported => { if (!supported) { console.log('Can\'t handle url: ' + url); } else { return Linking.openURL('https://www.instagram.com/?hl=fr'); } }).catch(err => console.error('An error occurred', err));
  }






  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../images/cover.jpeg')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              square
              source={require('../images/logo.png')}
     style={{width: 80, height: 70}}
            />
          </Image>
          <List>



                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Icon name="home" fontSiz="25" color="#2196f3" />

                  <Text>Home</Text>


                </ListItem>

                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Team")}
                >
                <Icon name="person" fontSiz="25" color="#2196f3" />

                  <Text>Team</Text>


                </ListItem>


                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Events")}
                >
                <Icon name="calendar" fontSiz="25"  color="#2196f3"/>

                  <Text>Events</Text>


                </ListItem>


                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Gallery")}
                >
                   <Icon name="image" fontSiz="25" color="#2196f3" />

                  <Text>Gallery</Text>


                </ListItem>


                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate("Contact")}
                >
                  <Icon name="contacts" fontSiz="25" color="#2196f3" />

                  <Text>Contact Us</Text>


                </ListItem>

          </List>

          <ListItem itemDivider>

           </ListItem>



         <List>
                <ListItem onPress={() => this.openFacebook()}>
                  <Image square source={require('../images/facebook.png')}
                      style={{width: 20, height: 20}}   />
                        <Text> Facebook</Text>
                </ListItem>

                <ListItem onPress={() => this.openLinkedin()}>
                  <Image square source={require('../images/linkedin.png')}
                      style={{width: 20, height: 20}}   />
                    <Text> Linkedin</Text>
                </ListItem>


                <ListItem onPress={() => this.openTwitter()}>
                  <Image square source={require('../images/twitter.png')}
                      style={{width: 20, height: 20}}   />
                    <Text> Twitter</Text>
                </ListItem>

                <ListItem onPress={() => this.openGogle()}>
                  <Image square source={require('../images/google-plus.png')}
                      style={{width: 20, height: 20}}   />
                    <Text> Google+</Text>
                </ListItem>


          </List>

        </Content>
      </Container>
    );
  }
}
