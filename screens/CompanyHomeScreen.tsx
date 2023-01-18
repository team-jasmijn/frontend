import { View } from '../components/Themed';
import TopBar from '../components/TopBar';
import { ScrollView, StyleSheet } from 'react-native';
import Notification from '../components/Notification';
import React, { useEffect, useState } from 'react';
import Flirt from '../types/Flirt';
import backendFetch from '../lib/backendFetch';
import Loading from '../components/Loading';

export default function CompanyHomeScreen() {
  const [flirts, setFlirts] = useState<Flirt[]>();
  useEffect(() => {
    backendFetch<Flirt[]>('GET', 'flirts')
      .then(flirts => setFlirts(flirts as Flirt[]))
      .catch();
  }, []);

  if (!flirts) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.content}>
      {flirts.map(flirt => (
        <Notification
          title={flirt.student.name}
          key={flirt.id}
          message={flirt.student.profileSettings.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 45,
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: { flex: 5 },
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
