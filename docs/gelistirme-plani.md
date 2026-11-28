# Geliştirme planı ve gereksinim listesi

Ödev PDF'sinin 1–2. sayfaları genel koşulları, Ek 1'in 5. sayfası öğrenci atamasını, Ek 2'nin 16. sayfası K33 konu kartını ve Ek 3'ün 17–18. sayfaları canlı değişiklik görevlerini açıklar.

## Ödev gereksinimleri

- [x] `G211210585` için K33-b (E–K ile başlayan ırklar) ve ek kural 4 (Silerken onay) atamasını doğrula.
- [x] Expo SDK 58 ile boş JavaScript projesi ve başlangıç ekranı oluştur.
- [x] **Liste.** `useEffect` ve `fetch` ile [Dog CEO ırk listesini](https://dog.ceo/api/breeds/list/all) uygulama çalışırken al. Yanıtın `message` nesnesinde `Object.keys` kullan ve E–K aralığını iki uç dahil süz. API yanıtını proje dosyalarına kopyalama.
- [x] Irk adını ve alt ırk sayısını `FlatList` satırlarında göster. `keyExtractor` için ırk adını kullan.
- [x] `TextInput` ile ırk adına göre anlık, büyük/küçük harfe duyarsız arama yap. Sorgunun başındaki ve sonundaki boşlukları yok say. Eşleşme yoksa “Sonuç bulunamadı” göster ve alan temizlenince tüm E–K ırklarını listele.
- [x] **Navigasyon.** Liste ve Kaydedilenler için React Navigation Bottom Tab kullan. Detay ekranını sekmelerin üstündeki Native Stack üzerinden aç ve seçilen kaydı `route.params` ile al. Liste'ye dönünce arama durumunu koru.
- [x] **Detay.** `https://dog.ceo/api/breed/{ırk}/images/random/3` adresinden üç rastgele fotoğraf iste ve kaydırılabilir galeride göster. Irkın adını, alt ırk sayısını ve alt ırk adlarını göster. Yükleme, hata ve yeniden deneme durumlarını yönet.
- [ ] Detay ekranına “Kaydet / Kaydedilenlerden çıkar” düğmesini ekle.
- [ ] **Kaydedilenler.** Kaydedilen ırkları AsyncStorage ile sakla ve uygulamayı tamamen kapatıp açtıktan sonra doğrula.
- [ ] **Ek kural 4.** Kaydedilenlerden çıkarmadan önce `Alert` ile “Emin misiniz?” sor. “Vazgeç” kaydı korur, “Çıkar” kaydı siler. İki sonucu da uygulamayı yeniden açarak kontrol et.
- [ ] `app.json` içinde özgün uygulama adı ve simgesi kullan. Kontrol cihazındaki Expo Go sürümüyle SDK uyumunu doğrula ve kontrol öncesinde `npx expo-doctor` çalıştır.
- [ ] `eas build -p android --profile preview` ile APK üret ve Android telefona veya emülatöre kur. iPhone ile sunum yapılacaksa da APK'yı üret ve README'ye bağlantısını ekle.
- [ ] Herkese açık `bsm447-odev-G211210585` deposunda 5 Kasım ile 15 Aralık 2026 arasında en az 10 farklı gerçek günde en az 10 anlamlı commit oluştur. Gerçek commit tarihlerini kullan ve son commit'i teslim saatine kadar gönder. `node_modules` depoya girmez.
- [ ] README'ye öğrenci numarasını, konu ve varyantı, ek kuralı, kalıcı veri yöntemini, üç ekran görüntüsünü, APK bağlantısını ve üç ekranı gösteren en fazla bir dakikalık kaydın bağlantısını ekle. API geçici olarak çalışmazsa değerlendirmede bu kayıt kullanılır.
- [ ] Projeyi `G211210585_BSM447.zip` olarak paketle. `node_modules` ve `.expo` klasörlerini çıkar. Tek ZIP dosyasını **15 Aralık 2026 saat 23.59'a kadar** OBİS'e yükle.
- [ ] **17 Aralık kontrolü.** Öğrenci numarası 5 ile bittiği için randevu saatini OBİS'ten öğren. Çalışan uygulama, açık VS Code projesi, çalışan Expo sunucusu ve şarj aleti ile hazırlan. Beş dakikalık kontrolde üç ekranı ve yeniden başlatma sonrası kayıtları göster, seçilen bir commit'i kod üzerinden anlat ve kurayla gelen görevi 2,5 dakikada yardımsız yap.

## Uygulama yapısı

`index.js` Expo giriş noktasıdır. `App.js`, güvenli alan sağlayıcısını ve `src/navigation/AppNavigator.js` içindeki gezinme yapısını açar. Native Stack, alt sekmeleri ve Detay ekranını içerir. Liste, ırk nesnesini Detay'a `route.params.breed` üzerinden iletir. `src/dogApi.js`, liste ve fotoğraf isteklerini doğrular ve E–K filtresini uygular. Detay, alt ırkları gelen ırk nesnesinden okur ve fotoğrafları ayrı bir istekle yükler. Önceki ekranın fotoğraf isteği geç sonuçlanırsa açık olan ekranı güncellemez. Arama durumu Liste ekranında kalır. Kaydedilen ırklar, ilgili ekranların erişebileceği ortak React durumunda tutulacak ve uygulama açılırken AsyncStorage'dan yüklenecek.

## Önerilen çalışma günleri

Tarihler sonraki oturumlar için öneridir. Her commit o gün tamamlanan ve doğrulanan işi içermeli. Bir gün kayarsa kalan tarihleri teslimden önce yeniden planla.

| Gün | Tarih | Commit kapsamı ve doğrulama |
| --- | --- | --- |
| 1 | 24 Kasım | Expo başlangıç ekranı, kurulum kontrolü ve geliştirme planı. |
| 2 | 25 Kasım | Dog CEO isteği, `Object.keys`, E–K süzgeci ve ırk adı ile alt ırk sayısını gösteren `FlatList`. |
| 3 | 26 Kasım | `TextInput` araması ve liste tasarımı. Expo Go'da harf farkını, kısmi eşleşmeyi, boşlukları, boş sonucu ve listeyi geri getirmeyi doğrula. |
| 4 | 27 Kasım | Expo uyumluluk güncellemesi, Bottom Tab ve Native Stack. Android Expo Go'da Detay parametrelerini, geri dönüşü ve sekmeler arasında Liste durumunu doğrula. |
| 5 | 28 Kasım | Detayda üç rastgele fotoğraf ve alt ırk listesi. Android Expo Go'da Hound, Greyhound ve Husky ile doğrulandı. |
| 6 | 4 Aralık | Kaydet düğmesi, Kaydedilenler ekranı ve AsyncStorage. Uygulamayı kapatıp aç ve kaydı kontrol et. |
| 7 | 6 Aralık | Kaydedilenlerden çıkarma onayı. Vazgeçme ve onaylama sonuçlarını doğrula. |
| 8 | 8 Aralık | Özgün uygulama adı ve simgesi. Telefon veya emülatörde ekranları gözden geçir. |
| 9 | 10 Aralık | EAS `preview` yapılandırması, APK üretimi ve APK'nın kurulum testi. |
| 10 | 12 Aralık | Üç ekran görüntüsü, demo videosu ve APK bağlantısıyla README'yi tamamla. Bağlantıları kontrol et. |

13–14 Aralık günlerini teslim ZIP'ini doğrulamak, kurulum ve yeniden başlatma testini tekrarlamak ve Ek 3 görevleriyle prova yapmak için kullan. Provaları geçici bir dalda yap veya prova değişikliklerini teslim sürümüne eklemeden geri al.

## Gün 5 doğrulaması

- Android emülatöründe Expo Go `58.0.6` ile Hound, Greyhound ve Husky için ırka özel `/images/random/3` istekleri ve üç fotoğraf doğrulandı. Hound'da yedi alt ırk, Greyhound'da `indian` ve `italian`, Husky'de boş alt ırk mesajı görüldü.
- Uçak modunda fotoğraf isteği hata mesajı verdi ve ırk bilgisi görünür kaldı. Bağlantı geri geldiğinde “Tekrar dene” üç fotoğrafı yükledi. Tek fotoğraf için HTTP 404 denemesinde diğer iki fotoğraf görüntülendi.
- Geciktirilen Hound yanıtı, Greyhound açıldıktan sonra geldiğinde galeriyi değiştirmedi. Geri dönüşte ve sekme değişiminde arama korundu. E–K listesi, `FlatList` kaydırma, büyük/küçük harf ve boşluklardan bağımsız arama, boş sonuç ve aramayı temizleme doğrulandı.
- `npx expo-doctor` 20/20 kontrolden geçti. `npx expo install --check` bağımlılıkların uyumlu olduğunu doğruladı.
