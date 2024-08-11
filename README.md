# 📣 TDK Sözlük API: yuit-tdk
Bu modül TDK Sözlüklerindeki bilgileri işler ve size gönderir. İşte Özellikler
| İsim | Açıklama |
|------|----------|
| Sözcük Çekme | TDK Sözlüğünden türkçede mevcut olan bilgileri çeker. |
| Terim Çekme | TDK Sözlüğünden türkçede mevcut olan terimleri çeker.|
| Atasözü çekme | TDK Sözlüğünden gelişmiş bir şekilde atasözünü çeker. |
| İsim Çekme | Türkçe isimleri çekip anlamını ve cinsiyetini bile öğrenebilirsiniz |
| Kontrol Etme | Herhangi bir kelimenin türkçede mevcut olup olmadığını öğren |


# 📜 NOT
TDK Yazılımcıları sayesinde bildiğiniz tüm dizeler iç içe geçmiş. Bunu düzeltmek için ilk önce bir flat işlemi yapmanızı öneririm yoksa undefined gibi hatalarla karşılaşabilirsiniz.
```js
let veri = await getName("ahmet");
let veri2 = veri.flat();
console.log(veri2)
```
# 📰 NOT 2
Promise ile çalıştığından dolayı sadece await değil, then ile de kullanabilirsiniz bunu da söylemiş olayım. Ama bu Callback ile yapacağınız anlama gelmiyor çünkü callback yok.
# [🧬 Bağlantılar](#)
- [Sözcük Çekme](#sozcuk)
- [Terim Çekme](#terim)
- [Atasözü Çekme](#atasozu)
- [İsim Çekme](#isim)
- [Dokümentasyon (YAKINDA)](#)

# 📦 Kurulum
```shell
npm i yuit-tdk
```
<div id="sozcuk">

# Sözcük Çekme
Sözcük çekmek için aşağıdaki koddan esinlenerek kendine bir kod oluşturman doğru olacaktır.
```js
import { getMeaning } from "yuit-tdk";
// typescript kullananlar { getMeaning, Mean } olarak çeksinler
(async () => {
const veri = "Araba"
const veri2 = ["Araba", "Çekirdek"];
const data1 = await getMeaning(veri);
// typescript kullananlar 
// const data1: Mean[] = await getMeaning(veri)
const data2 = await getMeaning(veri2);
console.log(data1 + " | "+ data2)
//upuzun bir şey karşınıza çıkabilir 😅
})()
```
</div>

<div id="terim">

# Terim Çekme
Terim çekmek için aşağıdaki koddan esinlenerek kendine bir kod oluşturman doğru olacaktır.
```js
import { getTerm } from "yuit-tdk";
(async () => {
const veri = "üçgen",
const veri2 = ["alan", "boğaz"]
const data1 = await getTerm(veri)
// typescript kullananlar burada çok uzun bir veri olduğu için üşendim yapmadım yani.
const data2 = await getTerm(veri2);
console.log(data1 + " | "+data2);
// karşınıza uzuun da uzun bir şey çıkacak.
})()
```
</div>


<div id="atasozu">

# Atasözü Çekme
Atasozu çekmek için aşağıdaki koddan esinlenerek kendine bir kod oluşturman doğru olacaktır.
```js
import { getSay } from "yuit-tdk";
// typescript kullananlar { getSay, Soz } olarak çeksinler
(async () => {
const veri = "Üzüm üzüme" // burada tam olarak doldurmanıza gerek yok tdk api kendisi tanıyacaktır.,
const veri2 = ["Üzüm üzüme", "Damlaya damlaya göl"]
const data1 = await getSay(veri)
// const data1: Soz[] = blablabla
const data2 = await getSay(veri2);
console.log(data1 + " | "+data2);
// karşınıza uzuun da uzun bir şey çıkacak.
})()
```
</div>


<div id="isim">

# İsim Çekme
İsim çekmek için aşağıdaki koddan esinlenerek kendine bir kod oluşturman doğru olacaktır.
```js
import { getName } from "yuit-tdk";
// typescript kullananlar { getName, Name } olarak çeksinler
(async () => {
const veri = "Ahmet" // burada tam olarak doldurmanıza gerek yok tdk api kendisi tanıyacaktır.,
const veri2 = ["Yunus", "Yusuf"]
const data1 = await getName(veri)
// data1: Name[]
const data2 = await getName(veri2);
console.log(data1 + " | "+data2);
// karşınıza bu sefer kısa bişey çıkacak
})()
```
</div>

# Map işlemi (Typescript)
```js
import { getName, Name } from "yuit-tdk"
(async () => {
    const veri = ["Ahmet", "Yunus"];
    const data:Name[] = await getName(veri);
    const newData = data.flat();
    newData.map(item => {
        console.log(item.anlam + " | "+item.cins)
        // cins 1 veya 2 veriyor siz kadın mı erkek mi deneyerek anlayın
    })
})()
```

# Check İşlemi
```js
import { CheckWords, CheckTerms, CheckSays, CheckName } from "yuit-tdk"
(async () => {
const dene = await CheckWords("beyaz eşya");
const dene1 = await CheckTerms("sdğpsa");
const dene2 = await CheckSays("üzüm üzüme");
const dene3 = await CheckName("John");
console.log(dene) // true
console.log(den1) // false
console.log(den2) // true
console.log(den3) // False
})()
```

# ⏲ Bitiş
Bu proje yuit.dev kurumundan Yunus Emre GÜN Tarafından tasarlanmıştır!
Eğer projede bir hata bulduysanız aşağıdaki bağlantıdan contact bölümündeki bilgilerimden bana ulaşmanız yeterli olacaktır.
https://yunusedev.vercel.app

yuit.dev'e katılmak istiyorsan benimle iletişime geç!