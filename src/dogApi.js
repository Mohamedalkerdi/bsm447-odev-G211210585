const BREED_LIST_URL = 'https://dog.ceo/api/breeds/list/all';

export async function fetchBreeds() {
  const response = await fetch(BREED_LIST_URL);
  if (!response.ok) {
    throw new Error(`Dog CEO HTTP ${response.status}`);
  }

  const json = await response.json();
  if (
    json?.status !== 'success' ||
    !json.message ||
    typeof json.message !== 'object' ||
    Array.isArray(json.message)
  ) {
    throw new Error('Dog CEO yanıtı geçersiz.');
  }

  const names = Object.keys(json.message);
  for (const name of names) {
    const subBreeds = json.message[name];
    if (
      !name ||
      !Array.isArray(subBreeds) ||
      !subBreeds.every((subBreed) => typeof subBreed === 'string')
    ) {
      throw new Error(`Alt ırk verisi geçersiz: ${name}`);
    }
  }

  return names.filter((name) => /^[e-k]/i.test(name)).map((name) => {
    const subBreeds = json.message[name];
    return { name, subBreeds, subBreedCount: subBreeds.length };
  });
}
