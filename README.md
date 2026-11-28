# BSM447 · Köpek Irkları

Sakarya Üniversitesi, Mobil Uygulama Geliştirme dönem ödevi.

| | |
| --- | --- |
| Öğrenci numarası | `G211210585` |
| Konu ve varyant | K33-b · E–K ile başlayan köpek ırkları |
| Ek kural | 4 · Silerken onay |
| Kalıcı veri yöntemi | AsyncStorage (planlandı) |
| Teslim | 15 Aralık 2026, 23.59 · OBİS |

Liste, uygulama açıldığında Dog CEO API'sinden E–K ile başlayan köpek ırklarını alır. Her satırda ırk adı ve alt ırk sayısı görünür. Arama yazdıkça listeyi süzer, büyük/küçük harfi ve sorgunun başındaki veya sonundaki boşlukları yok sayar. Arama alanı temizlendiğinde tüm E–K ırkları yeniden görünür.

Liste ve Kaydedilenler alt sekmelerde yer alır. Bir ırka dokununca Detay açılır. Geri dönüldüğünde arama korunur. Kaydedilenler ekranı şimdilik “Henüz kayıt yok” mesajını gösterir.

Gün 5'te Detay ekranı, seçilen ırkın adını, alt ırk sayısını ve “Alt Irklar” başlığı altında alt ırk adlarını gösterir. Alt ırk yoksa “Bu ırkın alt ırkı bulunmamaktadır.” mesajı görünür. Kaydırılabilir galeri, Dog CEO'nun ırka özel `images/random/3` uç noktasından üç rastgele fotoğraf alır. İstek başarısız olursa ırk bilgileri ekranda kalır ve “Tekrar dene” düğmesiyle istek yenilenebilir. Tek bir fotoğraf yüklenemezse diğer fotoğraflar görünmeye devam eder.

Uygulama gereksinimleri ve geliştirme takvimi [geliştirme planında](docs/gelistirme-plani.md) yer alır.

## Çalıştırma

```sh
npm ci
npx expo start --go
```

Android emülatörü için Expo terminalinde `a` tuşuna basın. Projede `expo@58.1.0` kullanılır ve Android emülatöründe Expo Go `58.0.6` ile doğrulanmıştır. Telefonla çalışırken SDK 58 uyumlu Expo Go kullanın ve telefon ile bilgisayarı aynı ağa bağlayın. Ortak ağ yoksa `npx expo start --go --tunnel` kullanın. Fiziksel iPhone için Expo CLI ve Expo Go'da aynı Expo hesabıyla oturum açın.

Kurulumu ve bağımlılıkları denetlemek için `npx expo-doctor` ve `npx expo install --check` çalıştırın.
