import { Button, Text, View, FlatList, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "expo-router";
import EventCard from "../(partials)/EventCard"
import { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../(src)/firebase";

const Advert = () => {
  return (
    <Button title="Check out this ad!" onPress={() => alert("You clicked the ad!")} />
  );
};
  
export default function HomeScreen() {
  const images = {
    'flyerExample': require('../../assets/images/flyerExample.jpg'),
    'flyerExample2': require('../../assets/images/flyerExample2.jpg'),
    'reactLogo': require('../../assets/images/react-logo.png'),
    // Add more images here as needed
  };
  
  const [eventCards, setEventCards] = useState([
    { id: 1, title: 'Easter Party', author: 'Caden Conde', authRating: 4.9, descr: 'A really cool event', date: 'Oct. 15 - 8:30pm ', RSVP: false, flyerImg: images['flyerExample'], location:"2114 Neil Ave.", going:2},
    { id: 2, title: 'Summer Party', author: 'Jack Swartley', authRating: 0.1, descr: 'Another event', date: '7:00pm Oct. 16', RSVP: false, flyerImg: images['flyerExample2'], location:"2114 Neil Ave.", going:5 },
    { id: 3, title: 'Event3', author: 'Awesone frat', authRating: 4.7, descr: 'An amazing event', date: '9:00pm Oct. 17', RSVP: false, flyerImg: images['flyerExample'], location:"2114 Neil Ave.", going:124 },
    { id: 4, title: 'Event4', author: 'Jane Doe', authRating: 4.2, descr: 'A great event', date: '6:30pm Oct. 18', RSVP: false, flyerImg: images['flyerExample2'], location:"2114 Neil Ave.", going:9 },
    { id: 5, title: 'Event5', author: 'John Smith', authRating: 4.8, descr: 'Another awesome event', date: '10:00pm Oct. 19', RSVP: false, flyerImg: images['flyerExample'], location:"2114 Neil Ave.", going:5},
  ]);

  const removeEvent = (id) => {
    setEventCards(eventCards.filter(event => event.id !== id));
  };

  const renderWithAdverts = () => {
    const itemsWithAdverts = [];

    eventCards.forEach((event, index) => {
      itemsWithAdverts.push(
        <EventCard
          key={event.id}
          title={event.title}
          author={event.author}
          authRating={event.authRating}
          descr={event.descr}
          date={event.date}
          RSVP={event.RSVP}
          going={event.going}
          location={event.location}
          flyerImg={event.flyerImg}
          onClose={() => removeEvent(event.id)}
        />
      );
      if ((index + 1) % 3 === 0) {
        itemsWithAdverts.push(<Advert key={`advert-${index}`} />);
      }
    });

    return itemsWithAdverts;
  };
  
  // const [event, setEvent] = useState([])
  // const [loading, setLoading] = useState(false)
  // const renderItem = ({ item }) => (
  //   //TODO: Create event card
  //   <View>
  //     <Text>{item.eventTitle}</Text>
  //   </View>
  // )
  // useEffect(() => {
  //   setLoading(true)
  //   const eventsQuery = collection(db, 'events')
  //   onSnapshot(eventsQuery, (snapshot) => {
  //     let eventsList = []
  //     snapshot.docs.map((doc) => eventsList.push({...doc.data(), id:doc.id}))
  //     setEvent(eventsList)
  //     setLoading(false)
  //   })
  // }, [])
  
  const navigation = useNavigation();
  return (
    <ScrollView>
      {renderWithAdverts()}
      {/* <FlatList data={event} renderItem={renderItem} keyExtractor={item => item.id}/> */}
      <Button title="go to login" onPress={() => navigation.navigate("(login)")} />
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#ff0000',
    fontSize: 24,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});

