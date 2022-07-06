import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Colleges() {
    return (
    <View style={styles.CollegePage}>
      <Text style={styles.CollegePage}>3 Colleges I would like to go to after Highschool</Text>
      <FlatList
      data={[
        {key: 'MIT'},
        {key: 'Harvard'},
        {key: 'Stanford'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    CollegePage: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#03fc6b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });