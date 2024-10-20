import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react-native";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ image: '', description: '' });

  const events = [
    { image: 'https://media.contentapi.ea.com/content/dam/ufc/images/2017/10/easufc3-overview-championshipfighters.jpg.adapt.crop191x100.628p.jpg', description: 'UFC Fight Night Watch Party' },
    { image: 'https://tulumtables.com/images/posts/original/KUR_Coco-beach-party_1600x900%20(1).jpg', description: 'Beach Bash Frat Party' },
    { image: 'https://mikasasports.com/wp-content/uploads/2019/12/V200W-Front.webp', description: 'Volleyball Club' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/1200px-Ohio_State_Buckeyes_logo.svg.png', description: 'OSU Coding Club Event' },
    { image: 'https://dw9to29mmj727.cloudfront.net/social/87-HxH_600x314.jpg', description: 'Hunter x Hunter Watch Party' },
    { image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9', description: 'Smash Ultimate Tournament' },
  ];

  const handleImagePress = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedEvent({ image: '', description: '' });
  };

  const handleLogout = () => {
    
  };

  return (
    <View style={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Jack Frient</Text>
        <Text style={styles.profileRating}>★★★★☆</Text>
        <Text style={styles.bio}>
          Hey guys! My name is Jack and my interests are skibidi toilet, Livvy Dunne, and Baby Gronk!
          I like to host events in my dorm, usually watch parties for the Talk Tuah Podcast. See you at my next event!
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Events Attended</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Events Hosted</Text>
        </TouchableOpacity>
      </View>

      {/* Events Grid */}
      <ScrollView contentContainerStyle={styles.eventsGrid}>
        {events.map((event, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(event)}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Expanded Image and Description */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{ uri: selectedEvent.image }} style={styles.modalImage} />
            <Text style={styles.modalDescription}>{selectedEvent.description}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF914D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 10, // Ensure it's on top of other elements
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileRating: {
    fontSize: 18,
    color: '#E84848',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#FF914D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  eventImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF914D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default withAuthenticator(ProfileScreen);