// Create heading element with text and colon using CSS
function createHeading(text) {
    var heading = document.createElement("h2");
    heading.textContent = text;
    heading.classList.add("heading");
    return heading;
  }
  
  // Create list items
  function createListItem(text) {
    var li = document.createElement("li");
    li.textContent = text;
    return li;
  }
  
  // Main code
  var container = document.getElementById("container");
  
  // Hallo heading
  var halloHeading = document.createElement("h1");
  halloHeading.textContent = "Hallo";
  container.appendChild(halloHeading);
  
  // Nama section
  container.appendChild(createHeading("Nama"));
  var nama = document.createElement("p");
  nama.textContent = "Faqih Syauqi Mustafa";
  container.appendChild(nama);
  container.appendChild(document.createElement("br"));
  
  // Kelas section
  container.appendChild(createHeading("Kelas"));
  var kelas = document.createElement("p");
  kelas.textContent = "2SE3";
  container.appendChild(kelas);
  container.appendChild(document.createElement("br"));
  
  // Alamat section
  container.appendChild(createHeading("Alamat"));
  var alamat = document.createElement("p");
  alamat.textContent = "Bogor, no.5";
  container.appendChild(alamat);
  container.appendChild(document.createElement("br"));
  
  // Hobi section
  container.appendChild(createHeading("Hobi"));
  var hobiList = ["Membaca Novel", "Mendengar Musik", "Menononton Youtube"];
  var ulHobi = document.createElement("ul");
  hobiList.forEach(function(hobi) {
    ulHobi.appendChild(createListItem(hobi));
  });
  container.appendChild(ulHobi);
  
  // Makanan Favorit section
  container.appendChild(createHeading("Makanan Favorit"));
  var mfList = ["Nasi Goreng", "Mie Goreng", "Ketoprak"];
  var ulMakanan = document.createElement("ul");
  mfList.forEach(function(mf) {
    ulMakanan.appendChild(createListItem(mf));
  });
  container.appendChild(ulMakanan);
  
  // Kata-Kata section
  container.appendChild(createHeading("Kata-Kata"));
  var kataKata = document.createElement("p");
  kataKata.textContent = "Paragraf atau alinea adalah suatu gagasan yang berbentuk serangkaian kalimat yang saling berkaitan satu sama lain. Nama lain dari paragraf ialah wacana mini. Kegunaan dari paragraf adalah untuk menjadi penanda dimulainya topik baru dan memisahkan gagasan-gagasan utama yang berbeda. Penggunaan paragraf memudahkan pembaca untuk memahami bacaan secara menyeluruh. Panjang dari satu paragraf adalah beberapa kalimat. Jumlah kalimat dalam paragraf ditentukan oleh cara pengembangan dan ketuntasan uraian gagasan yang disampaikan. Jumlah kalimat di dalam paragraf dapat menentukan kualitas dari bacaan.Paragraf tersusun dari gagasan utama yang terletak dalam kalimat topik. Selain itu, terdapat kalimat penjelas yang memperjelas kalimat topik. Paragraf juga berfungsi untuk mengungkapkan pemikiran penulis secara sistematis sehingga mudah untuk dipahami oleh pembaca. Kriteria sekumpulan kalimat yang dapat menjadi paragraf yaitu adanya kesatuan, kepaduan, ketuntasan, keruntutan, dan sudut pandang yang tidak berubah-ubah.";
  container.appendChild(kataKata);
  
//document.writeln(0b001)
//document.writeln("<br>")
//document.writeln(true)