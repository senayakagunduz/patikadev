//çalıştırmak için index.html ye ehliyet.js i scripte ekle...
let username = prompt("lütfen isminizi giriniz: ");
let age = prompt("lütfen yaşınızı giriniz: ");
let info = document.querySelector("#info");

if (username && age >= 18) {
  info.innerHTML = "ehliyet alabilirsiniz";
} else if (!username) {
  info.innerHTML = "kullanıcı adınız yok";
} else if (!(age >= 18)) {
  info.innerHTML = "yaş bilginiz yok yada 18 yaşından küçüksünüz";
}
