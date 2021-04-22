import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import EnviromentButton from '../components/EnviromentButton';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

interface EnviromentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environment, setEnvironment] = useState<EnviromentProps[]>([]);

  useEffect(() => {
    (async function fetchEnviroments() {
      const { data } = await api.get('plants_environments');
      setEnvironment([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environment}
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
