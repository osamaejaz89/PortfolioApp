import React from 'react';
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const dummyAppData = [
  {
    projectTitle: 'The Papp App',
    projectDescription: `The Papp Application is a private online network of selected grade students, teachers, student resource officers, career path mentors, and even celebrities working together for the common cause of community enrichment. Local businesses, large corporations & non-profit organizations partner to support their community in exchange for affordable advertisement space, social media marketing, and valued consumer feedback.`,
    projectTags: ['Android App Dev', 'IOS App Dev', 'UI UX DESIGN'],
    projectBackgroundImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/papp-app-bg.png',
    projectImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/papp-app.png',
  },
  {
    projectTitle: 'Stop Vaping Challenge App',
    projectDescription: `To minimize vaping, Not Vaping was designed to be a digital solution for teens and young adults to cut down on nicotine intake and e-cigarettes, and reduce adverse health effects. The app is central to providing motivation and easy solutions to opt for a healthy and opportunistic lifestyle.`,
    projectTags: ['Android App Dev', 'IOS App Dev', 'UI UX DESIGN'],
    projectBackgroundImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/stop_vaping_bg.png',
    projectImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/stop_vaping.png',
  },
  {
    projectTitle: 'High Def Events',
    projectDescription: `HDE App is a one-stop digital auctions platform. It is a feature-packed mobile application with dedicated panels for creating appealing videos of products to intrigue the visitors into buying the product.`,
    projectTags: ['Android App Dev', 'IOS App Dev', 'UI UX DESIGN'],
    projectBackgroundImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/hde-bg.png',
    projectImage:
      'https://www.tekrevol.com/assets/images-new/case-studies/projects/hde.png',
  },
];
const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        style={{flex: 1, padding: 15}}
        resizeMode="cover"
        source={{
          uri: item.projectBackgroundImage,
        }}>
        <View style={{}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
            {item.projectTitle}
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'justify',
              fontSize: 15,
              marginTop: 10,
              lineHeight: 25,
            }}>
            {item.projectDescription}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          {item.projectTags.map((t, i) => {
            return (
              <Text
                key={i}
                style={{
                  color: 'white',
                  backgroundColor: 'grey',
                  fontSize: 12,
                  padding: 10,
                  borderRadius: 50,
                  margin: 5,
                  textTransform: 'uppercase',
                }}>
                {t}
              </Text>
            );
          })}
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 90,
          }}>
          <Image
            style={{width: 300, height: 350}}
            resizeMode="cover"
            source={{
              uri: item.projectImage,
            }}
          />
        </View>
      </ImageBackground>
    );
  };
  const renderHeader = ({item}) => {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text style={{fontSize: 15}}>RECENT PROJECT</Text>
        <Text> - </Text>
        <Text style={{fontWeight: 'bold', fontSize: 32, color: 'black'}}>
          Made with passion
        </Text>
        <Text style={{marginTop: 20}}>
          Tekrevol is an extension of your marketing team – bringing strategy,
          expertise, and execution to the areas that you need it most.
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{borderWidth: 1}}>
            <Text>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1}}>
            <Text>IOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1}}>
            <Text>ANDROID</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1}}>
            <Text>WEB</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <Text>Contact US</Text>
        <Text>Phone</Text>
        <Text>Email</Text>
        <Text>Address</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: 15,
        }}>
        <Text>Osama</Text>
        <Text>Icon</Text>
      </View>
      <FlatList
        data={dummyAppData}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />q
    </View>
  );
};

export default HomeScreen;
