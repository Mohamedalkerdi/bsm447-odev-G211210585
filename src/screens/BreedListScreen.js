import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { fetchBreeds } from '../dogApi';

export default function BreedListScreen() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadBreeds() {
      try {
        const result = await fetchBreeds();
        if (active) setBreeds(result);
      } catch {
        if (active) setError('Köpek ırkları yüklenemedi. Lütfen daha sonra tekrar deneyin.');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadBreeds();
    return () => {
      active = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Köpek Irkları (E–K)
      </Text>
      {loading && (
        <View style={styles.feedback}>
          <ActivityIndicator />
          <Text>Yükleniyor…</Text>
        </View>
      )}
      {error !== '' && (
        <Text accessibilityRole="alert" style={styles.feedback}>
          {error}
        </Text>
      )}
      {!loading && error === '' && (
        <FlatList
          data={breeds}
          keyExtractor={(breed) => breed.name}
          ListEmptyComponent={<Text style={styles.feedback}>Bu aralıkta ırk bulunamadı.</Text>}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.breedName}>{item.name}</Text>
              <Text style={styles.count}>Alt ırk sayısı: {item.subBreedCount}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight ?? 56) + 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  feedback: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 24,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 32,
  },
  row: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#b8b8b8',
  },
  breedName: {
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  count: {
    color: '#535353',
    marginTop: 4,
  },
});
