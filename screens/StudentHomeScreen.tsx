import backendFetch from '../lib/backendFetch';
import User from '../types/User';
import React, { useEffect, useState } from 'react';
import { View } from '../components/Themed';
import TopBar from '../components/TopBar';
import Notification from '../components/Notification';
import { StyleSheet } from 'react-native';
import Loading from '../components/Loading';
import getMatchUser from '../lib/getMatchUser';
import Company from '../types/Company';

export default function StudentHomeScreen() {
  const [company, setCompany] = useState<Company | null>();

  useEffect(() => {
    getMatchUser().then(setCompany).catch(alert);
  }, []);

  if (!company) {
    return (
      <View style={styles.content}>
        <Notification
          title='No interns could be found'
          message='No internships could be found for you.'
        />
      </View>
    );
  }

  return (
    <View style={styles.content}>
      <Notification
        title='Nieuwe stage Plek'
        message='Er is heeft zich een nieuwe stage plek bij jou in de buurt aangemeld.'
      />
      <Notification
        title='Tip !'
        message='Voeg een foto toe aan je profiel om meer kans te krijgen op een stage plek.'
      />
      <Notification
        title='Je hebt een match'
        message='Er is heeft zich een nieuwe stage plek bij jou in de buurt aangemeld'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 50,
  },
  content: {
    flex: 5,
    marginVertical: 200,
  },
  button: {
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#334155',
    borderWidth: 2,
    padding: 4,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: 240,
    height: 40,
    margin: 30,
  },
  icon: {
    alignSelf: 'flex-start',
  },
  loginText: {
    fontSize: 20,
    color: '#334155',
  },
  createView: {
    marginTop: 80,
    backgroundColor: '#F1F5F9',
  },
  createButton: {
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#334155',
    borderWidth: 2,
    padding: 4,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    width: 230,
    height: 35,
  },
  createText: {
    alignSelf: 'center',
  },
});
