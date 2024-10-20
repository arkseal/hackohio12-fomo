import React from 'react'
import { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';


const screenWidth = Dimensions.get('window').width;

const EventCard = (props) => {
  const [goingNum, setGoingNum] = useState(props.going+1);
  const [isRSVP, setIsRSVP] = useState(props.RSVP);


  const handleRSVPClick = () => {
    setIsRSVP(!isRSVP); // Toggle the RSVP state
  };

  useEffect(() => {
    if (isRSVP) {
      setGoingNum(prev => prev + 1);
    } else {
      setGoingNum(prev => prev - 1);
    }
    
  }, [isRSVP]);

  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.inlineContainer2}>
        <View style={styles.topOptions}>
          <Image style={styles.pfpImg} source={require('../../assets/images/react-logo.png')} />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{props.author}</Text>
            <Text style={styles.ratingText}>
              {props.authRating}
              <AntDesign name="star" size={14} color="#ffdd00" />
              / 5.0
              <AntDesign name="star" size={14} color="#ffdd00" />
            </Text>
          </View>
        </View>
        <View style={styles.topOptions}>
          <AntDesign name="ellipsis1" size={36} color="black" />
          <TouchableOpacity onPress={handleRSVPClick}>
            <AntDesign name="close" size={36} marginLeft={10} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inlineContainer2}>
        <Text style={styles.eventTitleText}>{props.title}</Text>
      </View>
      <View style={[styles.inlineContainer2, styles.dateLocation]}>
        <Text style={styles.dateText}>{props.date}</Text>
        <Text style={styles.dateText}>{props.location}</Text>
      </View>
      <View
      style={{
         alignItems: "center",
        }}>
         <Image style={styles.mainImg} source={props.flyerImg} />
      </View>

      
      <View style={styles.inlineContainer2}>
        <View style={styles.goingContainer}>
          <TouchableOpacity onPress={handleRSVPClick}>
            <Text style={[styles.rsvpText, {
              color: isRSVP ? 'black' : 'white',
              backgroundColor: isRSVP ? 'lightgray' : Colors['light'].tint,
              fontSize: isRSVP ? 20 : 30,
              fontWeight: isRSVP ? '' : 'bold',
              paddingTop: isRSVP ? 9 : 2,
              paddingBottom: isRSVP ? 8.5 : 2,
            }]}>
              {isRSVP ? 'Cancel' : 'GO!'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.going}>{goingNum} going</Text>
        </View>
        <View style={styles.socials}>
          <Entypo name="share" size={36} color="black" padding={5} />
          <Feather name="message-circle" size={36} color="black" padding={5}/>
        </View>
      </View>
      
      
      <View style={styles.description}>
        <Text>{props.descr}</Text>
      </View>
    </View>   
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 5,
  },
  inlineContainer1: {
    marginLeft: 10,
    flexDirection: 'row',  
    justifyContent: 'left',
    alignItems: 'center',
    width: screenWidth-20,
  },
  socials: {
    flexDirection:'row',
  },
  authorInfo: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  authorName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topOptions: {
    flexDirection: 'row',
  },
  eventTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inlineContainer2: {
    marginLeft: 10,
    flexDirection: 'row',  
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth-20,
  },

  goingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  going: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 18,
  },
  rsvpText: {
    fontSize: 30,
    textAlign: 'center',
    width: 100,

    borderRadius: 50,
    padding: 7,
    margin: 3
  },
  ratingText: {
    textAlign: 'left',
    fontSize: 14,
  },

  mainImg: {
    width: screenWidth*1.4,  // Explicit width for main image
    height: undefined,         // Let the height scale automatically
    aspectRatio: 1,            // Maintain aspect ratio
    resizeMode: 'contain',     // Scale image properly
  },
  pfpImg: {
    width: 50,                 // Explicit width for profile image
    height: 50,                // Explicit height for profile image
    marginRight: 10,           // Space between image and text
    resizeMode: 'contain',     // Maintain aspect ratio
  },
  dateText: {
    fontSize: 18,
    // width: screenWidth / 2,
    // paddingTop: 5,
    paddingBottom: 5,
  },
  description: {
    marginBottom: 15,
    marginLeft: 10,
    width: screenWidth - 20,
  }
});

export default EventCard