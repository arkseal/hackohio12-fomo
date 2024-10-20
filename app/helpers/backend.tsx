//import { Amplify } from 'aws-amplify';

import uuid from 'react-native-uuid';
import React, { useState, useEffect } from "react";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from 'aws-amplify/data';
import { Button, Image, ScrollView, Text, TouchableOpacity, View , StyleSheet} from "react-native";
import { getEventPhoto, uploadEventPhoto } from './image_handler';

const client = generateClient<Schema>({
  authMode: 'apiKey',
});


export async function addEvent(userid: string, file: any, eventtitle: string, eventdesc: string, location: string, day: string, time: string) {
  try {
    const eid = uuid.v4().toString();
    //uploadEventPhoto(file, eid);

    var l = ''
    if (eventtitle == "Easter Party") {
      l = "https://piktochart.com/wp-content/uploads/2023/03/large-125.jpg";
    } else {
      l = "https://marketplace.canva.com/EAFhpwzIkSI/1/0/1131w/canva-orange-yellow-and-blue-tropical-summer-party-flyer-GXxu7giFX2s.jpg";
    }

    const result = await client.models.Event.create({
      eventid: eid,
      userid: userid,
      imageurl: l,
      eventtitle: eventtitle,
      eventdesc: eventdesc,
      location: location,
      day: day,
      time: time
    });
    console.log(result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function listEvents() {
  const [events, setEvents] = useState<Schema["Event"]["type"][]>([]);

  const fetchEvents = async () => {
    const { data: items, errors } = await client.models.Event.list();
    if (!errors) {
      setEvents(items);
    } else {
      console.error(errors);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to handle the cancellation of events
  const handleCancel = async (id: string) => {
    console.log('Cancel event with id:', id);
    await client.models.Event.delete({ eventid: id });
    fetchEvents();
  };

  return (
    <ScrollView style={styles.container}>
      {events.map((event) => (
        <View key={event.eventid} style={styles.card}>
          <Image source={{ uri: event.imageurl }} style={styles.eventImage} />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.eventtitle}</Text>
            <Text style={styles.eventInfo}>
              {event.day}
              {'\n'}
              {event.time}
              {'\n'}
              {event.location}
            </Text>
          </View>
          <TouchableOpacity style={styles.cancelButton} onPress={() => handleCancel(event.eventid)}>
            <Text style={styles.cancelButtonText}>cancel</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#FF914D',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  eventInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cancelButton: {
    backgroundColor: '#E84848',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cancelButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
