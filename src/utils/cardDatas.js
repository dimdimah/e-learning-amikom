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
        videoLink:
          "https://www.youtube.com/watch?v=wriGST3vp5M&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=1&t=24s",
      },
      {
        id_materi: 2,
        title: "Instalasi dan Persiapan",
        videoLink:
          "https://www.youtube.com/watch?v=GAd6FTsGSY8&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=2",
      },
      {
        id_materi: 3,
        title: "Struktur HTML",
        videoLink:
          "https://www.youtube.com/watch?v=TM12RA6cmOQ&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=3",
      },
      {
        id_materi: 4,
        title: "Heading dan Paragraph",
        videoLink:
          "https://www.youtube.com/watch?v=bd03BfqfOSk&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=4",
      },
      {
        id_materi: 5,
        title: "Instalasi dan Persiapan",
        videoLink:
          "https://www.youtube.com/watch?v=GAd6FTsGSY8&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=2",
      },
    ],
  },
  {
    id_module: 1,
    title: "Belajar HTML",
    description:
      "Mulailah dari awal dengan mempelajari dasar-dasar HTML - fondasi penting untuk membangun dan mengedit halaman web.",
    videoLink:
      "https://www.youtube.com/watch?v=wriGST3vp5M&list=PLZS-MHyEIRo5c56EM3NBWpCnb4naBZvXh&index=1&t=24s",
  },
];

export default { cardDatas, moduleDatas };
