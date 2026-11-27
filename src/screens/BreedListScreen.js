import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { fetchBreeds } from '../dogApi';

export default function BreedListScreen({ navigation }) {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

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

  const searchTerm = query.trim().toLowerCase();
  const visibleBreeds = breeds.filter((breed) => breed.name.toLowerCase().includes(searchTerm));

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.feedback}>
          <ActivityIndicator color="#276453" />
          <Text style={styles.feedbackText}>Yükleniyor…</Text>
        </View>
      )}
      {error !== '' && (
        <Text accessibilityRole="alert" style={[styles.feedback, styles.feedbackText]}>
          {error}
        </Text>
      )}
      {!loading && error === '' && (
        <>
          <TextInput
            accessibilityLabel="Köpek ırkı ara"
            placeholder="Köpek ırkı ara..."
            placeholderTextColor="#606D65"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            value={query}
            onChangeText={setQuery}
            style={styles.search}
          />
          <FlatList
            data={visibleBreeds}
            keyExtractor={(breed) => breed.name}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <Text accessibilityLiveRegion="polite" style={[styles.feedback, styles.feedbackText]}>
                {searchTerm ? 'Sonuç bulunamadı' : 'Bu aralıkta ırk bulunamadı.'}
              </Text>
            }
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <Pressable
                accessibilityRole="button"
                onPress={() => navigation.navigate('Detay', { breed: item })}
                style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
              >
                <Text style={styles.breedName}>{item.name}</Text>
                <Text style={styles.count}>Alt ırk sayısı: {item.subBreedCount}</Text>
              </Pressable>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F1',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  search: {
    minHeight: 50,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#84968B',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    color: '#182D25',
    fontSize: 16,
  },
  feedback: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 24,
  },
  feedbackText: {
    color: '#48594F',
    fontSize: 15,
    textAlign: 'center',
  },
  listContent: {
    gap: 8,
    paddingTop: 4,
    paddingBottom: 16,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#DCE3DA',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  rowPressed: {
    backgroundColor: '#E2EDE5',
  },
  breedName: {
    color: '#182D25',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  count: {
    color: '#48594F',
    fontSize: 14,
    marginTop: 4,
  },
});
