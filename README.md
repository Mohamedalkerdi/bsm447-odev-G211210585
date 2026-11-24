# BSM447 · Köpek Irkları

Sakarya Üniversitesi, Mobil Uygulama Geliştirme dönem ödevi.

| | |
| --- | --- |
| Öğrenci numarası | `G211210585` |
| Konu ve varyant | K33-b · E–K ile başlayan köpek ırkları |
| Ek kural | 4 · Silerken onay |
| Kalıcı veri yöntemi | AsyncStorage (planlandı) |
| Teslim | 15 Aralık 2026, 23.59 · OBİS |

Gün 1 sürümü bir başlangıç ekranı açar. Uygulama gereksinimleri ve geliştirme takvimi [geliştirme planında](docs/gelistirme-plani.md) yer alır.

## Çalıştırma

```sh
npm ci
npx expo start --go
```

Android emülatörü için Expo terminalinde `a` tuşuna basın. Telefonla çalışırken SDK 58 uyumlu Expo Go kullanın ve telefon ile bilgisayarı aynı ağa bağlayın. Ortak ağ yoksa `npx expo start --go --tunnel` kullanın. Fiziksel iPhone için Expo CLI ve Expo Go'da aynı Expo hesabıyla oturum açın.

Kurulumu denetlemek için `npx expo-doctor` çalıştırın.
