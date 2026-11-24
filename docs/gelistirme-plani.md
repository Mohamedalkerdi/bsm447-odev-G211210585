# Geliştirme planı ve gereksinim listesi

Ödev PDF'sinin 1–2. sayfaları genel koşulları, Ek 1'in 5. sayfası öğrenci atamasını, Ek 2'nin 16. sayfası K33 konu kartını ve Ek 3'ün 17–18. sayfaları canlı değişiklik görevlerini açıklar.

## Ödev gereksinimleri

- [x] `G211210585` için K33-b (E–K ile başlayan ırklar) ve ek kural 4 (Silerken onay) atamasını doğrula.
- [x] Expo SDK 58 ile boş JavaScript projesi ve başlangıç ekranı oluştur.
- [ ] **Liste.** `useEffect` ve `fetch` ile [Dog CEO ırk listesini](https://dog.ceo/api/breeds/list/all) uygulama çalışırken al. Yanıtın `message` nesnesinde `Object.keys` kullan ve E–K aralığını iki uç dahil süz. API yanıtını proje dosyalarına kopyalama.
- [ ] Irk adını ve alt ırk sayısını `FlatList` satırlarında göster. `keyExtractor` için ırk adını kullan. `TextInput` aramasını büyük/küçük harfe duyarsız yap.
- [ ] **Navigasyon.** Liste ve Kaydedilenler için React Navigation Bottom Tab kullan. Detay ekranını sekmelerin üstündeki Stack üzerinden aç ve seçilen kaydı `route.params` ile al. Seçili kayıt için global değişken kullanma.
- [ ] **Detay.** `https://dog.ceo/api/breed/{ırk}/images/random/3` adresinden üç rastgele fotoğraf iste. Irkın alt ırklarını ve “Kaydet / Kaydedilenlerden çıkar” düğmesini göster.
- [ ] **Kaydedilenler.** Kaydedilen ırkları AsyncStorage ile sakla ve uygulamayı tamamen kapatıp açtıktan sonra doğrula.
- [ ] **Ek kural 4.** Kaydedilenlerden çıkarmadan önce `Alert` ile “Emin misiniz?” sor. “Vazgeç” kaydı korur, “Çıkar” kaydı siler. İki sonucu da uygulamayı yeniden açarak kontrol et.
- [ ] `app.json` içinde özgün uygulama adı ve simgesi kullan. Kontrol cihazındaki Expo Go sürümüyle SDK uyumunu doğrula ve kontrol öncesinde `npx expo-doctor` çalıştır.
- [ ] `eas build -p android --profile preview` ile APK üret ve Android telefona veya emülatöre kur. iPhone ile sunum yapılacaksa da APK'yı üret ve README'ye bağlantısını ekle.
- [ ] Herkese açık `bsm447-odev-G211210585` deposunda 5 Kasım ile 15 Aralık 2026 arasında en az 10 farklı gerçek günde en az 10 anlamlı commit oluştur. Gerçek commit tarihlerini kullan ve son commit'i teslim saatine kadar gönder. `node_modules` depoya girmez.
- [ ] README'ye öğrenci numarasını, konu ve varyantı, ek kuralı, kalıcı veri yöntemini, üç ekran görüntüsünü, APK bağlantısını ve üç ekranı gösteren en fazla bir dakikalık kaydın bağlantısını ekle. API geçici olarak çalışmazsa değerlendirmede bu kayıt kullanılır.
- [ ] Projeyi `G211210585_BSM447.zip` olarak paketle. `node_modules` ve `.expo` klasörlerini çıkar. Tek ZIP dosyasını **15 Aralık 2026 saat 23.59'a kadar** OBİS'e yükle.
- [ ] **17 Aralık kontrolü.** Öğrenci numarası 5 ile bittiği için randevu saatini OBİS'ten öğren. Çalışan uygulama, açık VS Code projesi, çalışan Expo sunucusu ve şarj aleti ile hazırlan. Beş dakikalık kontrolde üç ekranı ve yeniden başlatma sonrası kayıtları göster, seçilen bir commit'i kod üzerinden anlat ve kurayla gelen görevi 2,5 dakikada yardımsız yap.

## Uygulama yapısı

`index.js` Expo giriş noktasıdır. Gün 1 ekranı `App.js` içindedir. Ekranlar geliştirilirken `src/screens/` altına taşınacak, gezinme yapısı `src/navigation/` içinde kurulacak. API ve kayıt işlemleri gerektiğinde `src/` altında küçük JavaScript modüllerinde tutulacak. Liste araması gibi ekrana ait durum ekranda kalacak. Kaydedilen ırklar, ilgili ekranların erişebileceği ortak React durumunda tutulacak ve uygulama açılırken AsyncStorage'dan yüklenecek.

## Önerilen çalışma günleri

Tarihler sonraki oturumlar için öneridir. Her commit o gün tamamlanan ve doğrulanan işi içermeli. Bir gün kayarsa kalan tarihleri teslimden önce yeniden planla.

| Gün | Tarih | Commit kapsamı ve doğrulama |
| --- | --- | --- |
| 1 | 24 Kasım | Expo başlangıç ekranı, kurulum kontrolü ve geliştirme planı. |
| 2 | 26 Kasım | Dog CEO isteği, `Object.keys`, E–K süzgeci ve ırk adı ile alt ırk sayısını gösteren `FlatList`. |
| 3 | 28 Kasım | `TextInput` araması. Aynı sorguyu büyük ve küçük harflerle dene. |
| 4 | 30 Kasım | Bottom Tab ve Stack. Liste'den Detay'a `route.params` ile geç ve geri dön. |
| 5 | 2 Aralık | Detayda üç rastgele fotoğraf ve alt ırk listesi. Alt ırkı olan ve olmayan iki ırkla dene. |
| 6 | 4 Aralık | Kaydet düğmesi, Kaydedilenler ekranı ve AsyncStorage. Uygulamayı kapatıp aç ve kaydı kontrol et. |
| 7 | 6 Aralık | Kaydedilenlerden çıkarma onayı. Vazgeçme ve onaylama sonuçlarını doğrula. |
| 8 | 8 Aralık | Özgün uygulama adı ve simgesi. Telefon veya emülatörde ekranları gözden geçir. |
| 9 | 10 Aralık | EAS `preview` yapılandırması, APK üretimi ve APK'nın kurulum testi. |
| 10 | 12 Aralık | Üç ekran görüntüsü, demo videosu ve APK bağlantısıyla README'yi tamamla. Bağlantıları kontrol et. |

13–14 Aralık günlerini teslim ZIP'ini doğrulamak, kurulum ve yeniden başlatma testini tekrarlamak ve Ek 3 görevleriyle prova yapmak için kullan. Provaları geçici bir dalda yap veya prova değişikliklerini teslim sürümüne eklemeden geri al.
