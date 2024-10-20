import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addEvent as aE } from '../helpers/backend';
import { getCurrentUser } from 'aws-amplify/auth';

const HostEvent = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [poster, setPoster] = useState(null);
  const [rsvpLimit, setRsvpLimit] = useState(''); // RSVP Limit as a text input
  const [justFriends, setJustFriends] = useState(false);
  const [adultsOnly, setAdultsOnly] = useState(false);

  const pickPoster = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPoster(result.uri);
    }
  };

  const handleSubmit = () => {
    const eventData = {
      eventTitle,
      eventDescription,
      date,
      time,
      address,
      poster,
      rsvpLimit,   // not yet
      justFriends, // not yet
      adultsOnly,  // not yet
    };
    // Call the addEvent method to process event data
    addEvent(eventData);
  };

  // Method to process event data
  const addEvent = (eventData) => {
    console.log('Event Created:', eventData);
    const makeEvent = async () => {
      const { username, userId, signInDetails } = await getCurrentUser();
      aE(
        userId,
        eventData.poster,
        eventData.eventTitle,
        eventData.eventDescription,
        eventData.address,
        eventData.date,
        eventData.time
      );
    };

    makeEvent();
  };

  return (
    <View style={styles.container}>

      {/* Event Title */}
      <TextInput
        placeholder="Event Title"
        value={eventTitle}
        onChangeText={(text) => setEventTitle(text)}
        style={styles.input}
      />

      {/* Event Description */}
      <TextInput
        placeholder="Event description"
        value={eventDescription}
        onChangeText={(text) => setEventDescription(text)}
        style={[styles.input, { height: 100 }]}
        multiline
      />

      {/* Date and Time */}
      <View style={styles.row}>
        <TextInput
          placeholder="MM/DD/YYYY"
          value={date}
          onChangeText={(text) => setDate(text)}
          style={[styles.input, styles.halfInput]}
        />
        <TextInput
          placeholder="Time"
          value={time}
          onChangeText={(text) => setTime(text)}
          style={[styles.input, styles.halfInput]}
        />
      </View>

      {/* Address */}
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
      />

      {/* Poster Upload */}
      <View style={styles.posterContainer}>
        <TouchableOpacity onPress={pickPoster} style={styles.button}>
          <Text>Add Poster</Text>
        </TouchableOpacity>
      </View>

      {/* RSVP Limit, Just Friends, 21+ in the same row */}
      <View style={styles.buttonsRow}>
        <TextInput
          placeholder="RSVP Limit"
          value={rsvpLimit}
          onChangeText={(text) => setRsvpLimit(text)}
          style={[styles.input, styles.smallInput]}
          keyboardType="numeric" // For numeric input
        />
        <TouchableOpacity
          onPress={() => setJustFriends(!justFriends)}
          style={justFriends ? styles.activeButton : styles.button}
        >
          <Text>Just friends?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAdultsOnly(!adultsOnly)}
          style={adultsOnly ? styles.activeButton : styles.button}
        >
          <Text>21+?</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>HOST!</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  heading: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#FF914D',
    borderWidth: 1.5,
    fontSize: 16,
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  smallInput: {
    width: '30%', // Adjusted width to match button size
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  posterContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#FF914D',
    backgroundColor: '#FFF2E3',
    width: '30%',
    alignItems: 'center',
  },
  activeButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF914D',
    backgroundColor: '#FF914D',
    color: '#FFF',
    width: '30%',
    alignItems: 'center',
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#FF914D',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  submitText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HostEvent;