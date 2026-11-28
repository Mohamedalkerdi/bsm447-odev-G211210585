import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchBreedImages } from '../dogApi';

function BreedPhoto({ uri, label }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <View style={[styles.photo, styles.photoFallback]}>
        <Text accessibilityLiveRegion="polite" style={styles.feedbackText}>
          Bu fotoğraf yüklenemedi.
        </Text>
      </View>
    );
  }

  return (
    <Image
      accessibilityLabel={label}
      accessible
      source={{ uri }}
      resizeMode="cover"
      style={styles.photo}
      onError={() => setFailed(true)}
    />
  );
}

function BreedPhotos({ breedName }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    async function loadImages() {
      try {
        const result = await fetchBreedImages(breedName);
        if (active) setImages(result);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadImages();
    return () => {
      active = false;
    };
  }, [breedName, attempt]);

  function retry() {
    setLoading(true);
    setError(false);
    setAttempt((current) => current + 1);
  }

  return (
    <View style={styles.gallery}>
      <Text accessibilityRole="header" style={styles.heading}>Fotoğraflar</Text>
      {loading && (
        <View style={styles.feedback}>
          <ActivityIndicator color="#276453" />
          <Text accessibilityLiveRegion="polite" style={styles.feedbackText}>
            Fotoğraflar yükleniyor…
          </Text>
        </View>
      )}
      {!loading && error && (
        <View style={styles.feedback}>
          <Text accessibilityRole="alert" style={styles.feedbackText}>
            Fotoğraflar yüklenemedi. İnternet bağlantınızı kontrol edip tekrar deneyin.
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={retry}
            style={({ pressed }) => [styles.retryButton, pressed && styles.retryPressed]}
          >
            <Text style={styles.retryText}>Tekrar dene</Text>
          </Pressable>
        </View>
      )}
      {!loading && !error && images.map((uri, index) => (
        <BreedPhoto key={`${index}-${uri}`} uri={uri} label={`${breedName} fotoğrafı ${index + 1}`} />
      ))}
    </View>
  );
}

export default function BreedDetailScreen({ route }) {
  const breed = route.params?.breed;
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 20 + bottom }]}>
      {breed ? (
        <>
          <View style={styles.card}>
            <Text accessibilityRole="header" style={styles.name}>{breed.name}</Text>
            <Text style={styles.count}>Alt ırk sayısı: {breed.subBreedCount}</Text>
            <Text accessibilityRole="header" style={[styles.heading, styles.subBreedHeading]}>
              Alt Irklar
            </Text>
            {breed.subBreeds.length > 0 ? (
              <View style={styles.subBreedList}>
                {breed.subBreeds.map((subBreed) => (
                  <Text key={subBreed} style={styles.subBreed}>{subBreed}</Text>
                ))}
              </View>
            ) : (
              <Text style={styles.count}>Bu ırkın alt ırkı bulunmamaktadır.</Text>
            )}
          </View>
          <BreedPhotos key={breed.name} breedName={breed.name} />
        </>
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
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    gap: 16,
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
  heading: {
    color: '#182D25',
    fontSize: 18,
    fontWeight: '600',
  },
  subBreedHeading: {
    marginTop: 16,
  },
  subBreedList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  subBreed: {
    borderRadius: 8,
    backgroundColor: '#E2EDE5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#182D25',
    fontSize: 15,
  },
  gallery: {
    gap: 12,
  },
  photo: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 12,
    backgroundColor: '#E2EDE5',
  },
  photoFallback: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  feedback: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 14,
  },
  feedbackText: {
    color: '#48594F',
    fontSize: 15,
    textAlign: 'center',
  },
  retryButton: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#276453',
  },
  retryPressed: {
    backgroundColor: '#1D4E40',
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
