---
title: 'Apa Itu React?'
date: '25-9-2023'
---

# Apa Itu React? Pengertian dan Cara Kerja ReactJS
Jul 14, 2023

Faradilla A.

8menit Dibaca

[ReactJS](https://reactjs.org/) atau React adalah library [JavaScript](https://www.hostinger.co.id/tutorial/apa-itu-javascript) populer buatan Facebook yang digunakan dalam proses pengembangan aplikasi mobile dan web. React berisi kumpulan snippet kode JavaScript (disebut ‘komponen’) yang bisa digunakan berulang kali untuk mendesain antarmuka pengguna.

Perlu diketahui bahwa ReactJS bukanlah framework JavaScript, karena hanya bertugas untuk untuk merender komponen area tampilan aplikasi. React adalah alternatif untuk framework seperti [Angular](https://www.hostinger.co.id/tutorial/apa-itu-angularjs) dan [Vue](https://vuejs.org/), yang sama-sama bisa digunakan untuk membuat fungsi yang kompleks.

Nah, selain menjelaskan apa itu React, kami akan membahas fitur, kelebihan, dan cara kerjanya. Kami juga akan membandingkan perbedaan ReactJS dan React Native terkait perannya di industri aplikasi web dan seluler.

Kemudian, kami akan memberikan contoh cara deploy (meluncurkan) aplikasi React di hPanel Hostinger. Tanpa berlama-lama lagi, mari mulai mempelajari apa itu React!

Berbagai Fitur React
--------------------

React memiliki beberapa fitur utama yang menjadikannya lebih unggul dibandingkan dengan library JavaScript lainnya. Bagian di bawah ini akan menjelaskan fitur-fitur ini dan kegunaannya dalam proses development aplikasi mobile dan web.

### JSX

JSX adalah ekstensi syntax JavaScript yang digunakan dalam pembuatan elemen React. Developer menggunakannya untuk menyematkan (embed) kode [HTML](https://www.hostinger.com/tutorials/html-cheat-sheet) pada objek JavaScript. Karena bisa memproses embedding ekspresi dan fungsi JavaScript yang valid, JSX pun membantu mempersingkat struktur kode yang kompleks.

Mari lihat blok kode berikut, yang mencontohkan cara embed ekspresi di JSX:

```
const name = 'John Smith;
const element = h1>Hello, {name}/h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```


Pada baris kedua, kami memanggil variabel **name** (nama) di dalam sebuah elemen React dengan meletakkannya di dalam kurung kurawal.

Sementara itu, fungsi **ReactDOM.render()** akan merender elemen React pada struktur data DOM (Document Object Model), yang mendeskripsikan antarmuka penggunanya (UI).

JSX juga membantu mencegah serangan XSS ([Cross-Site Scripting](https://owasp.org/www-community/attacks/xss/)). Secara default, DOM React mengubah nilai yang disematkan di JSX menjadi string sebelum merendernya. Hasilnya, pihak ketiga tidak bisa [inject kode tambahan](https://www.contrastsecurity.com/knowledge-hub/glossary/code-injection) melalui input user, kecuali ditulis dengan jelas dalam aplikasi.

Tenang, nanti kita akan mempelajari peran JSX dalam pembuatan komponen React secara lebih mendetail.

### DOM Virtual

Document Object Model (**DOM**) berfungsi untuk menyajikan halaman web dalam tampilan struktur data (tree/pohon). ReactJS menyimpan struktur data DOM Virtual ini dalam memorinya, sehingga kalau ada perubahan pada bagian tertentu dalam struktur data tersebut, Anda tidak perlu merender ulang semuanya.

Setiap kali ada perubahan data, ReactJS akan membuat satu struktur data DOM Virtual baru dan membandingkannya dengan yang sebelumnya, lalu mencari cara tercepat untuk menerapkan perubahan tersebut pada DOM yang asli. Proses ini disebut [diffing](https://dev.to/koolkishan/what-is-virtual-dom-how-virtual-dom-works-what-is-reconciliation-what-is-diffing-algorithm-what-makes-react-so-fast-327a).

Jadi, perubahan UI hanya akan memengaruhi bagian tertentu dalam struktur data DOM yang asli, sehingga proses render perubahan pun bisa lebih cepat dan lebih hemat resource. Tentu saja, ini akan sangat membantu bagi proyek berskala besar yang perlu banyak interaksi user.

### Komponen dan Properti React

ReactJS memisahkan antarmuka pengguna menjadi beberapa potong kode tersendiri yang nantinya bisa digunakan lagi, yang disebut **komponen**. Cara kerja komponen React mirip dengan fungsi JavaScript, yaitu sama-sama menerima input arbitrer yang disebut properti atau **props**.

Elemen React yang dihasilkan (return) akan menentukan bagaimana tampilan antarmuka pengguna yang dilihat oleh user (sisi klien). Berikut contoh komponen fungsi yang menghasilkan elemen React:

```
function Welcome(props) {
  return h1>Hello, {props.name}/h1>;
}
```


Anda boleh menambahkan sebanyak mungkin komponen, dan semuanya akan tetap terlihat rapi.

### Manajemen State

**State** (keadaan) adalah objek JavaScript yang mewakili satu bagian dari sebuah komponen. Setiap kali user berinteraksi dengan aplikasi, state juga akan berubah, dengan merender UI baru guna menampilkan perubahan dari interaksi tersebut.

Fitur manajemen state ini mengacu pada prosedur yang dilakukan untuk mengelola keadaan sebuah aplikasi React. Contohnya seperti menyimpan data di library manajemen state pihak ketiga, dan memicu proses rendering ulang setiap kali data diubah.

Library manajemen state berfungsi untuk mempermudah komunikasi dan proses berbagi data di antara komponen React. Ada beberapa library manajemen state pihak ketiga yang tersedia saat ini, yang paling populer adalah **Redux** dan **Recoil**.

**Redux**

[Redux](https://redux.js.org/) memiliki [store](https://redux.js.org/api/store) terpusat yang berfungsi untuk menjaga state sebuah aplikasi agar terus berjalan sesuai prediksi. Library ini juga meminimalkan inkonsistensi data, dengan tidak mengizinkan dua komponen untuk memperbarui state aplikasi secara bersamaan.

Arsitektur Redux memiliki error log untuk mempermudah proses debug, dan memiliki prosedur penataan kode yang ketat sehingga maintenance jadi lebih mudah. Selain itu, Redux memiliki banyak add-on dan kompatibel dengan semua layer antarmuka pengguna.

Kesimpulannya, Redux agak sedikit rumit dan kurang optimal untuk aplikasi kecil dengan satu sumber data.

**Recoil**

[Recoil](https://recoiljs.org/) adalah library manajemen state JavaScript yang dirilis oleh Facebook. Library ini memiliki fungsi murni yang disebut **selector**, bertugas untuk menghitung data dari [atom](https://recoiljs.org/docs/introduction/core-concepts/#atoms) (unit yang bisa diubah dari sebuah state).

Beberapa komponen bisa memanfaatkan atom yang sama, dan oleh karena itu, bisa menggunakan state yang sama pula.

Penggunaan atom dan selector mengurangi state yang tidak dibutuhkan, menyederhanakan kode, serta meniadakan proses rendering ulang yang terlalu sering untuk React dan komponen turunan apa pun.

Recoil lebih cocok untuk pemula daripada Redux, karena konsep intinya jauh lebih mudah dipahami.

### Navigasi Terprogram

Navigasi terprogram adalah peristiwa di mana rangkaian kode menghasilkan sebuah tindakan yang mengarahkan user ke area tertentu. Contohnya adalah proses login dan mendaftar akun, yang secara terprogram akan mengarahkan user ke halaman baru.

[React Router](https://reactrouter.com/), library standar React untuk perutean, menyediakan berbagai metode navigasi terprogram yang aman antarkomponen tanpa mengharuskan user mengklik link apa pun.

Metode utama yang digunakan dalam navigasi terprogram biasanya adalah komponen **Redirect**, atau **history.push()** sebagai opsi lainnya.

Singkatnya, package React Router menyinkronkan antarmuka pengguna dengan URL sehingga Anda bisa mengontrol tampilan aplikasi React tanpa bergantung pada link.

Apa Kelebihan React?
--------------------

Sejumlah perusahaan besar di seluruh dunia, seperti [Netflix](http://netflix.com/), [Airbnb](http://airbnb.com/), dan [American Express](https://www.americanexpress.com/), menggunakan React untuk membangun aplikasi webnya. Beberapa kelebihan React yang membuatnya menjadi favorit para developer dibanding kompetitornya adalah:

### 1\. Mudah Digunakan

Developer yang sudah memahami JavaScript bisa mempelajari cara menggunakan React dengan cepat karena library ini bergantung sepenuhnya pada JavaScript dan metode berbasis komponen. Mereka bisa langsung mengembangkan aplikasi berbasis web dengan React, cukup belajar beberapa hari saja.

Bahkan, meskipun Anda belum terbiasa dengan JavaScript, ada banyak sekali [website belajar coding](https://www.hostinger.co.id/tutorial/belajar-coding-online-gratis) yang menyediakan materinya secara gratis. Setelah memahami konsep dasar JavaScript, lanjutkan mempelajari ReactJS untuk membantu proses development front-end Anda.

### 2\. Mendukung Komponen Java yang Reusable

Dengan React, Anda bisa menggunakan lagi komponen yang sudah dikembangkan menjadi aplikasi. Sebab, ReactJS adalah libary yang open-source, sehingga Anda bisa membangun komponen siap pakai, yang akan mempercepat proses development aplikasi web kompleks.

Lebih kerennya lagi, React memungkinkan nesting komponen di antara satu sama lain untuk menulis fungsi yang kompleks tanpa membuat kode menjadi terlalu padat. Karena setiap komponen memiliki kontrolnya sendiri, proses pengelolaannya pun menjadi lebih mudah.

Berkat integrasi JSX, Anda bisa menulis komponen React dengan lebih mudah; cukup buat objek JavaScript yang dikombinasikan dengan tipografi dan tag HTML. JSX juga menyederhanakan rendering beberapa fungsi, sehingga kode akan tetap ringkas tanpa mengurangi kemampuan aplikasi.

Meskipun bukan merupakan ekstensi syntax yang paling populer, JSX telah terbukti efisien dalam pengembangan komponen khusus dan aplikasi dinamis.

![](https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2022/08/membuat-aplikasi-react.webp)

Tool CLI (command-line interface) resmi React, [Create React App](https://create-react-app.dev/), juga bisa mempersingkat proses development aplikasi single-page (satu halaman). Tool ini memiliki proses setup build modern dengan tool siap pakai dan sangat membantu untuk mempelajari ReactJS.

### 4\. Performa Tinggi

Seperti yang tadi sudah dibahas, Virtual DOM memungkinkan ReactJS memperbarui struktur data DOM seefisien mungkin. Dengan menyimpan Virtual DOM di memori, React meniadakan proses rendering ulang berlebih yang bisa mengacaukakn performa.

Selain itu, React memungkinkan binding data satu arah antar elemen, sehingga proses debug bisa menjadi lebih simpel. Modifikasi apa pun yang dilakukan pada komponen turunan tidak akan memengaruhi struktur induk, yang tentunya akan mengurangi risiko error.

### 5\. SEO-Friendly

ReactJS bisa memaksimalkan [optimisasi mesin pencari](https://www.hostinger.co.id/tutorial/apa-itu-seo) (SEO) aplikasi web dengan meningkatkan performanya. Sebab, implementasi Virtual DOM merupakan salah satu faktor yang memengaruhi kecepatan halaman.

Kemudian, React juga membantu mesin pencari menavigasi aplikasi web dengan melakukan rendering sisi server.

Langkah ini menjadi solusi untuk salah satu masalah paling signifikan yang dihadapi website dengan banyak kode JavaScript, karena mesin pencari biasanya menganggap website seperti ini cukup rumit dan sulit di-crawl.

Cara Kerja React
----------------

Salah satu manfaat utama untuk menggunakan React adalah Anda bisa memasukkan [kode HTML dengan JavaScript](https://www.hostinger.co.id/tutorial/cara-membuat-javascript-di-html).

User bisa membuat representasi node DOM dengan mendeklarasikan fungsi **Element** di React. Mari lihat kode di bawah ini, yang berisi kombinasi HTML dan JavaScript:

```
React.createElement("div", { className: "red" }, "Children Text");
React.createElement(MyCounter, { count: 3 + 5 });
```


Anda mungkin menyadari bahwa sintaksis kode HTML di atas mirip dengan XML. Nah, tapi, bukannya menggunakan class DOM tradisional, React menggunakan **className**.

Tag JSX memiliki nama, turunan, dan atribut. Ekspresi dan nilai numerik harus ditulis di dalam kurung kurawal. Tanda kutip dalam atribut JSX mewakili string, mirip dengan JavaScript.

Biasanya, React ditulis menggunakan JSX dan bukan JavaScript standar untuk menyederhanakan komponen dan menjaga tampilan kode agar tetap rapi.

Berikut adalah contoh kode React yang ditulis menggunakan JSX:

```
MyCounter count={3 + 5} />;
var GameScores = {player1: 2,player2: 5};
DashboardUnit data-index="2">
h1>Scores/h1>Scoreboard className="results" scores={GameScores} />
/DashboardUnit>;
```


Penjelasan tag HTML di atas adalah seperti berikut:

*   **MyCounter**\> mewakili variabel yang disebut count yang nilainya adalah ekspresi numerik.
*   **GameScores** adalah object literal yang memiliki dua pasangan prop-value.
*   **DashboardUnit**\> adalah block XML yang dirender di halaman.
*   **scores={GameScores}** adalah atribut skor, yang mendapatkan nilainya dari object literal **GameScores** tadi.

Aplikasi React biasanya memiliki satu node DOM root. Merender elemen ke dalam DOM akan mengubah UI halaman.

Sebagai contoh, kode berikut menampilkan “Hello World” di halaman dengan merender elemen menjadi node DOM yang disebut **root**.

```
div id="root">/div>
const element = h1>Hello, world/h1>;
ReactDOM.render(element, document.getElementById('root'));
```


Setiap kali sebuah komponen React menghasilkan satu elemen, Virtual DOM akan memperbarui DOM asli agar sesuai.

Apa Itu React Native?
---------------------

[React Native](https://reactnative.dev/) adalah framework JavaScript open-source yang dikembangkan berdasarkan library React. Developer menggunakannya untuk membuat aplikasi React lintas platform bagi iOS dan Android.

React Native menggunakan API (Application Programming Interface) asli untuk merender komponen UI mobile di Objective-C (iOS) atau Java (Android). Oleh karenanya, developer bisa membuat komponen khusus platform dan membagikan kode sumbernya di berbagai platform.

Meskipun memiliki kesamaan, React Native berbeda dengan ReactJS. Berikut adalah perbedaan React Native dan ReactJS:



* ReactJS: Merupakan library JavaScript.
  * React Native: Merupakan framework JavaScript.
* ReactJS: Cocok untuk membangun aplikasi web dinamis.
  * React Native: Memberikan kesan ‘native’ pada UI aplikasi seluler.
* ReactJS: Menggunakan Virtual DOM untuk merender kode browser.
  * React Native: Menggunakan API native (asli) untuk merender kode di perangkat seluler.
* ReactJS: Mendukung CSS untuk membuat animasi.
  * React Native: Membutuhkan API animasi untuk menganimasikan komponen.
* ReactJS: Menggunakan tag HTML.
  * React Native: Tidak menggunakan tag HTML karena tidak adanya dukungan DOM.
* ReactJS: Menggunakan CSS untuk penataan gaya.
  * React Native: Menggunakan stylesheet JS untuk penataan gaya.


Cara Meluncurkan Aplikasi React di Hostinger
--------------------------------------------

Anda memerlukan hosting VPS untuk memublikasikan aplikasi React. Paket VPS Hostinger dilengkapi dengan akses root penuh dan mudah disesuaikan dengan kebutuhan, sehingga memudahkan proses peluncuran dan manajemen server.

[![](https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2023/02/ID-VPS-hosting_in-text-banner-1024x300.webp)](https://www.hostinger.co.id/hosting-vps)

Luncurkan aplikasi React di Hostinger dengan mengikuti langkah-langkah berikut:

1\. Pilih template VPS dengan sistem operasi **Ubuntu 22.04 64bit.**  
2\. Menggunakan **SSH**, sambungkan ke sistem operasi:

```
ssh root@ip_server_anda
```


3\. Instal server node.js dan reverse proxy server, dan pastikan Anda telah menghapus Apache2:

```
sudo apt-get purge apache2*

curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt update && sudo apt upgrade -y

sudo apt install -y nodejs nginx
```


4\. Agar aplikasi Next.js Anda berfungsi dengan baik, buat file konfigurasi Nginx yang baru:

```
sudo nano /etc/nginx/sites-available/nextjs
```


5\. Selanjutnya, tempel (paste) konfigurasi berikut ini ke file tersebut. Jangan lupa untuk mengganti ip\_server\_anda dengan alamat IP VPS atau nama domain Anda, lalu simpan perubahan kalau sudah selesai.

```
server {
  listen 80;
  server_name your_server_ip;
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```


6\. Untuk mengaktifkan konfigurasi tersebut, Anda perlu membuat symbolic link:

```
sudo ln -s /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
```


7\. Restart Nginx dengan perintah berikut:

```
sudo service nginx restart
```


8\. Ikuti petunjuknya dan buat aplikasi Next.js baru:

```
cd /var/www

npx create-next-app@latest nextjs
```


9\. Buka direktori aplikasi Next.js:

```
cd nextjs
```


10\. Berikutnya, instal dependensi aplikasi:

```
npm install
```


11\. Buat aplikasi Next.js Anda dengan perintah berikut:

```
npm run build
```


12\. Setelah selesai, mulai aplikasi Next.js Anda dengan perintah di bawah:

```
npm start
```


Aplikasi Next.js Anda pun kini sudah aktif dan bisa diakses melalui nama domain atau alamat IP VPS.

Gunakan pengelola proses seperti PM2 untuk restart aplikasi Anda secara otomatis setelah server di-reboot atau crash. PM2 juga menjaga aplikasi Next.js tetap berjalan di latar belakang VPS. Instal PM2 seperti berikut:

1\. Jalankan perintah berikut di VPS:

```
cd ~

sudo npm install -g pm2
```


2\. Buka direktori aplikasi Next.js:

```
cd /var/www/nextjs
```


3\. Gunakan PM2 untuk memulai aplikasi Next.js Anda:

```
pm2 start npm --name "nextjs" -- start
```


Pastikan PM2 dimulai saat boot. Gunakan perintah ini untuk membuat skrip yang akan di-copy pasteke terminal:

```
pm2 startup
```


Simpan semua proses PM2 saat ini dengan perintah ini:

```
pm2 save
```


Jadi, React Adalah…
-------------------

ReactJS atau React adalah library JavaScript yang digunakan dalam proses pengembangan aplikasi web dinamis. Beberapa kelebihan library ini yaitu bisa mempermudah penulisan kode JavaScript, serta meningkatkan performa dan memaksimalkan SEO aplikasi Anda.

Kemudian, ReactJS membantu meringkas proses debugging dan meminimalkan risiko error melalui data binding satu arah.

Untuk membantu Anda mengingat, berikut rangkuman tentang kelebihan React:

*   Mudah digunakan dan dipelajari, serta ada banyak materi coding yang tersedia online.
*   Mendukung komponen yang bisa digunakan lagi sehingga mempersingkat proses development.
*   JSX mempermudah coding dan rendering elemen.
*   Virtual DOM meniadakan rendering ulang berlebih sehingga performa aplikasi Anda terus maksimal.
*   React membantu mesin pencari crawling aplikasi web Anda, serta memaksimalkan SEO.

Bagaimana? Sudah memahami apa itu React JS dan fungsinya dalam web development? Kalau masih memiliki pertanyaan, sampaikan pada kolom komentar di bagian bawah artikel ini, ya.