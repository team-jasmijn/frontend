import { ScrollView, StyleSheet } from 'react-native';
import Notification from '../components/Notification';
import backendFetch from '../lib/backendFetch';
import React, { useEffect, useState } from 'react';
import User from '../types/User';
import Loading from '../components/Loading';
import getCompanies from '../lib/getCompanies';

export default function ModeratorHomeScreen() {
  const [companies, setCompanies] = useState<User[]>();
  useEffect(() => {
    getCompanies().then(setCompanies).catch(alert);
  }, []);

  if (!companies) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.content}>
      {companies.map(company => (
        <Notification
          title={company.name}
          message={
            company.email + (company.approved ? ' (approved)' : ' (unapproved)')
          }
          key={company.name}
          action={async () => {
            backendFetch('POST', 'company/approve/' + company.id)
              .then(() => {
                company.approved = !company.approved;
                setCompanies([...companies]);
              })
              .catch(alert);
          }}
          buttonMessage={company.approved ? 'unapprove' : 'approve'}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 5,
    marginVertical: 200,
  },
});
