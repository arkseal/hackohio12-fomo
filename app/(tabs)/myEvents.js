import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { listEvents } from '../helpers/backend';

const MyEvents = () => {
  // Example event data from Figma
  const evens = [
    {
      id: 1,
      title: 'OSU Coding Club',
      date: 'Thursday, Oct 24',
      time: '6:30-8:00 PM',
      location: '1234 House St',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/1200px-Ohio_State_Buckeyes_logo.svg.png',
    },
    {
      id: 2,
      title: 'Volleyball Club',
      date: 'Friday, Oct 25',
      time: '1:00-3:00 PM',
      location: 'North Sand Volleyball Courts',
      image: 'https://mikasasports.com/wp-content/uploads/2019/12/V200W-Front.webp',
    },
    {
      id: 3,
      title: 'Beach Frat Party',
      date: 'Friday, Oct 25',
      time: '8:00-11:00 PM',
      location: '245 Frat St',
      image: 'https://tulumtables.com/images/posts/original/KUR_Coco-beach-party_1600x900%20(1).jpg',
    },
    {
      id: 4,
      title: 'UFC Watch Party',
      date: 'Saturday, Oct 26',
      time: '10:00-11:30 PM',
      location: '1234 House St',
      image: 'https://media.contentapi.ea.com/content/dam/ufc/images/2017/10/easufc3-overview-championshipfighters.jpg.adapt.crop191x100.628p.jpg',
    },
  ];

  //const events = listEvents();

  return (
    listEvents()
  );
};

// Styles
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

export default MyEvents;