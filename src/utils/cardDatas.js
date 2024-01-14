const cardDatas = [
  {
    id_card: 1,
    title: "Belajar HTML",
    description:
      "Mulailah dari awal dengan mempelajari dasar-dasar HTML - fondasi penting untuk membangun dan mengedit halaman web.",
    label: "free",
  },
  {
    id_card: 2,
    title: "Belajar CSS",
    description:
      "In this CSS tutorial, you’ll learn how to add CSS to visually transform HTML into eye-catching sites.",
    label: "free",
  },
  {
    id_card: 3,
    title: "Belajar Bootstrap 5",
    description:
      "Bootstrap adalah sebuah framework yang paling populer digunakan untuk membuat sebuah website.",
    label: "free",
  },
  {
    id_card: 4,
    title: "Tailwind css Dasar",
    description:
      "Tailwind CSS adalah sebuah framework CSS yang berfokus pada utilitas, cocok untuk membuat UI yang modern, responsif, dan konsisten",
    label: "free",
  },
];

const moduleDatas = [
  {
    id_module: 1,
    title: "Belajar HTML",
    link_modules: [
      {
        id_materi: 1,
        title: "Apa itu HTML",
        videoLink: "https://www.youtube.com/watch?v=wriGST3vp5M&t=28s",
        paragraph_1:
          "HTML, atau HyperText Markup Language, adalah bahasa markup yang fundamental dalam pengembangan web. Dengan HTML, pengembang dapat merancang struktur dasar halaman web dengan mudah. Elemen-elemen HTML, yang diberi tag, seperti teks, gambar, dan tautan, memungkinkan penataan konten yang terstruktur.",
        paragraph_2:
          "Setiap elemen HTML memiliki peran khusus dalam membangun tata letak dan konten halaman. Misalnya, penggunaan tag <a> untuk tautan dan tag <img> untuk menyisipkan gambar. Pengembang juga dapat menetapkan atribut untuk memberikan fungsionalitas tambahan dan memperkaya pengalaman pengguna.",
      },
      {
        id_materi: 2,
        title: "Instalasi dan Persiapan",
        videoLink: "https://www.youtube.com/watch?v=GAd6FTsGSY8&t=325s",
        paragraph_1:
          "Instalasi dan Persiapan HTML melibatkan serangkaian langkah penting untuk memulai pengembangan web. Pertama, pastikan Anda memiliki teks editor yang sesuai, seperti Visual Studio Code atau Sublime Text. Setelah mengunduh dan menginstal editor, buat file HTML baru dengan ekstensi HTML. Ini adalah awal dari struktur dasar dokumen HTML.",
        paragraph_2:
          "Kedua, inisialisasikan dokumen HTML dengan menambahkan tag <html>, <head>, dan <body>. Bagian <head> umumnya berisi elemen <meta> untuk menentukan set karakter, serta judul halaman dengan tag <title>. Sementara itu, bagian <body> akan berisi konten utama halaman Anda.",
      },
      {
        id_materi: 3,
        title: "Struktur HTML",
        videoLink: "https://www.youtube.com/watch?v=TM12RA6cmOQ&t=2s",
        paragraph_1:
          "Saat Kita mempelajari HTML, penting untuk memahami struktur dasar dari sebuah dokumen HTML. Struktur ini mencakup elemen-elemen utama yang digunakan untuk membentuk halaman web yang dapat diakses dan dimengerti oleh browser. Dengan mengikuti struktur yang benar, Kita akan dapat membuat halaman web yang terstruktur dengan baik dan mudah dibaca oleh mesin pencari.",
        paragraph_2:
          "https://html.com/wp-content/uploads/html-homepage-layout-demo.webp",
      },
      {
        id_materi: 4,
        title: "Heading dan Paragraph",
        videoLink: "https://www.youtube.com/watch?v=bd03BfqfOSk&t=16s",
        paragraph_1:
          "Heading dalam HTML digunakan untuk menentukan judul atau tingkatan teks dalam halaman web. Ada enam tingkatan heading yang dimulai dari <h1> (heading level 1) sebagai yang tertinggi hingga <h6> sebagai yang terendah. Penggunaan heading membantu struktur dan hierarki konten halaman, memungkinkan pembaca dan mesin pencari memahami organisasi informasi dengan lebih baik.",
        paragraph_2:
          "Paragraf dalam HTML, diwakili oleh tag <p>, digunakan untuk menyusun teks menjadi blok-blok berbeda. Setiap tag <p> membungkus sekelompok teks yang membentuk satu paragraf. Paragraf memainkan peran penting dalam membuat konten lebih terbaca dan terstruktur. Dengan memisahkan teks ke dalam paragraf-paragraf, pengembang dapat memberikan tata letak yang jelas dan nyaman untuk pembaca.",
      },
      {
        id_materi: 5,
        title: "Underline, Superscript dan Subscript",
        videoLink: "https://www.youtube.com/watch?v=F9Joj-lm4T0&t=9s",
        paragraph_1:
          "Underline dalam HTML dapat diterapkan pada teks menggunakan tag <u>. Penggunaan tag ini akan memberikan efek garis bawah pada teks yang dilingkupinya. Meskipun tag <u> dapat memberikan garis bawah, penggunaannya disarankan untuk dihindari kecuali dalam konteks khusus, karena banyak pembaca mengasumsikan hyperlink sebagai satu-satunya elemen yang seharusnya memiliki garis bawah.",
        paragraph_2:
          "Superscript dan subscript adalah gaya teks yang ditempatkan di atas (superscript) atau di bawah (subscript) garis dasar. Superscript ditandai dengan tag <sup>, sementara subscript ditandai dengan tag <sub>. Superscript sering digunakan untuk notasi eksponen, seperti x², sedangkan subscript berguna untuk simbol kimia atau matematika, seperti H₂O.",
      },
      {
        id_materi: 6,
        title: "Line Break dan Horizontal Rule",
        videoLink: "https://www.youtube.com/watch?v=C3g0-M5Raws&t=23s",
      },
      {
        id_materi: 7,
        title: "Strong, Emphasis, Blockquote, Quote",
        videoLink: "https://www.youtube.com/watch?v=LkyYbxjFkeQ&t=36s",
      },
      {
        id_materi: 8,
        title: "Extra Tag",
        videoLink: "https://www.youtube.com/watch?v=kVNJKVBAN-s&t=125s",
      },
      {
        id_materi: 9,
        title: "List Tag",
        videoLink: "https://www.youtube.com/watch?v=ahukMeW11gg",
      },
      {
        id_materi: 10,
        title: "Link dan Multi Page",
        videoLink: "https://www.youtube.com/watch?v=fOGbw_mFovA",
      },
      {
        id_materi: 11,
        title: "Link dan Multi Page",
        videoLink: "https://www.youtube.com/watch?v=AxP8NPhCctA",
      },
      {
        id_materi: 12,
        title: "HTML Attributes",
        videoLink: "https://www.youtube.com/watch?v=fOGbw_mFovA",
      },
      {
        id_materi: 13,
        title: "Tabel",
        videoLink: "https://www.youtube.com/watch?v=UK5CPO7Q9uI",
      },
      {
        id_materi: 14,
        title: "Form",
        videoLink: "https://www.youtube.com/watch?v=CBuFc2nGEDo",
      },
      {
        id_materi: 15,
        title: "Menampilkan Gambar",
        videoLink: "https://www.youtube.com/watch?v=M_ZlrjV0chU",
      },
      {
        id_materi: 16,
        title: "Menampilkan Video",
        videoLink: "https://www.youtube.com/watch?v=UbXUnaQ9hpc",
      },
    ],
  },
];

export default { cardDatas, moduleDatas };
