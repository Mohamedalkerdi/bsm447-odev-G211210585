import { StyleSheet, Text, View } from 'react-native';

export default function SavedBreedsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Henüz kayıt yok</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  message: {
    color: '#48594F',
    fontSize: 16,
    textAlign: 'center',
  },
});
