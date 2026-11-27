import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BreedDetailScreen({ route }) {
  const breed = route.params?.breed;
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 20 + bottom }]}>
      {breed ? (
        <View style={styles.card}>
          <Text accessibilityRole="header" style={styles.name}>{breed.name}</Text>
          <Text style={styles.count}>Alt ırk sayısı: {breed.subBreedCount}</Text>
        </View>
      ) : (
        <Text style={styles.count}>Irk bilgisi bulunamadı.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#DCE3DA',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  name: {
    color: '#182D25',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  count: {
    color: '#48594F',
    fontSize: 15,
    marginTop: 6,
  },
});
