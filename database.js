const database = {
  ml: {
    name: "Mobile Legends",
    require: ["userId", "serverId"],
    image: "assets/ml.png",
    qris: false,
    desc: "Top up diamond Mobile Legends legal & aman",
    detail: "Proses cepat, 24 jam nonstop",
    regular: [
      { name: "3 Diamond", price: "Rp1.500", status: "online" },
      { name: "5 Diamond", price: "Rp2.000", status: "online" },
      { name: "10 Diamond", price: "Rp3.500", status: "online" },
      { name: "12 Diamond", price: "Rp4.000", status: "online" },
      { name: "14 Diamond", price: "Rp4.500", status: "online" },
      { name: "18 Diamond", price: "Rp5.500", status: "online" },
      { name: "19 Diamond", price: "Rp6.000", status: "online" },
      { name: "28 Diamond", price: "Rp7.500", status: "online" },
      { name: "36 Diamond", price: "Rp10.000", status: "online" },
      { name: "44 Diamond", price: "Rp11.000", status: "online" },
      { name: "56 Diamond", price: "Rp14.500", status: "online" },
      { name: "59 Diamond", price: "Rp15.300", status: "online" },
      { name: "74 Diamond", price: "Rp19.500", status: "online" },
      { name: "85 Diamond", price: "Rp22.400", status: "online" },
      { name: "86 Diamond", price: "Rp22.500", status: "online" },
      { name: "100 Diamond", price: "Rp24.500", status: "online" },
      { name: "112 Diamond", price: "Rp29.300", status: "online" },
      { name: "144 Diamond", price: "Rp37.400", status: "online" },
      { name: "148 Diamond", price: "Rp39.500", status: "online" },
      { name: "170 Diamond", price: "Rp44.500", status: "online" },
      { name: "172 Diamond", price: "Rp45.000", status: "online" },
      { name: "185 Diamond", price: "Rp46.600", status: "online" },
      { name: "222 Diamond", price: "Rp57.000", status: "online" },
      { name: "229 Diamond", price: "Rp60.000", status: "online" },
      { name: "240 Diamond", price: "Rp62.500", status: "online" },
      { name: "257 Diamond", price: "Rp65.000", status: "online" },
      { name: "277 Diamond", price: "Rp74.500", status: "online" },
      { name: "278 Diamond", price: "Rp73.500", status: "online" },
      { name: "284 Diamond", price: "Rp75.500", status: "online" },
      { name: "296 Diamond", price: "Rp76.000", status: "online" },
      { name: "301 Diamond", price: "Rp78.000", status: "online" },
      { name: "344 Diamond", price: "Rp86.000", status: "online" },
      { name: "345 Diamond", price: "Rp89.500", status: "online" },
      { name: "355 Diamond", price: "Rp92.000", status: "online" },
      { name: "374 Diamond", price: "Rp98.000", status: "online" },
      { name: "384 Diamond", price: "Rp104.000", status: "online" },
      { name: "408 Diamond", price: "Rp105.000", status: "online" },
      { name: "429 Diamond", price: "Rp109.000", status: "online" },
      { name: "514 Diamond", price: "Rp132.000", status: "online" },
      { name: "522 Diamond", price: "Rp136.000", status: "online" },
      { name: "568 Diamond", price: "Rp140.000", status: "online" },
      { name: "601 Diamond", price: "Rp153.000", status: "online" },
      { name: "642 Diamond", price: "Rp172.000", status: "online" },
      { name: "171 Diamond", price: "Rp183.000", status: "online" },
      { name: "750 Diamond", price: "Rp198.000", status: "online" },
      { name: "875 Diamond", price: "Rp217.000", status: "online" },
      { name: "965 Diamond", price: "Rp246.000", status: "online" },
      { name: "977 Diamond", price: "Rp249.000", status: "online" },
      { name: "1050 Diamond", price: "Rp266.000", status: "online" },
      { name: "1139 Diamond", price: "Rp290.000", status: "online" },
      { name: "1183 Diamond", price: "Rp300.000", status: "online" },
      { name: "1220 Diamond", price: "Rp310.000", status: "online" }
    ],
    membership: [
      { name: "1x Weekly Diamond Pass", price: "Rp29.000", status: "online" },
      { name: "2x Weekly Diamond Pass", price: "Rp56.000", status: "online" },
      { name: "3x Weekly Diamond Pass", price: "Rp85.000", status: "online" },
      { name: "4x Weekly Diamond Pass", price: "Rp115.000", status: "online" },
      { name: "5x Weekly Diamond Pass", price: "Rp140.000", status: "online" },
      { name: "Starlight Membership", price: "Rp78.000", status: "online" },
      { name: "Twilight Pass", price: "Rp145.000", status: "online" },
      { name: "Starlight Member Plus", price: "Rp195.000", status: "online" }
    ]
  },
  pubg: {
    name: "PUBG Mobile",
    require: ["userId"],
    image: "assets/pubg.png",
    qris: false,
    desc: "Top up UC PUBG Mobile murah & instant",
    detail: "Legal, tanpa login akun",
    regular: [
      { name: "15 UC", price: "Rp8.000", status: "online" },
      { name: "25 UC", price: "Rp15.500", status: "online" },
      { name: "35 UC", price: "Rp16.000", status: "online" },
      { name: "50 UC", price: "Rp17.000", status: "online" },
      { name: "60 UC", price: "Rp18.500", status: "online" },
      { name: "70 UC", price: "Rp28.000", status: "online" },
      { name: "100 UC", price: "Rp31.000", status: "online" },
      { name: "125 UC", price: "Rp45.000", status: "online" },
      { name: "150 UC", price: "Rp48.000", status: "online" },
      { name: "200 UC", price: "Rp60.000", status: "online" },
      { name: "250 UC", price: "Rp74.000", status: "online" },
      { name: "300 UC", price: "Rp78.000", status: "online" },
      { name: "375 UC", price: "Rp92.000", status: "online" },
      { name: "525 UC", price: "Rp137.000", status: "online" },
      { name: "700 UC", price: "Rp168.000", status: "online" },
      { name: "750 UC", price: "Rp180.000", status: "online" },
      { name: "1000 UC", price: "Rp240.000", status: "online" },
      { name: "1500 UC", price: "Rp346.000", status: "online" }
    ],
    membership: [
      { name: "Elite Pass Plus + Kupon Peti Klasik", price: "Rp420.000", status: "online" }
    ]
  },
  hok: {
    name: "Honor of Kings",
    require: ["userId"],
    image: "assets/hok.png",
    qris: false,
    desc: "Top up Token HOK mudah & terpercaya",
    detail: "Layanan 24 jam, proses otomatis",
    regular: [
      { name: "8 Token", price: "Rp2.500", status: "online" },
      { name: "17 Token", price: "Rp3.500", status: "online" },
      { name: "23 Token", price: "Rp5.500", status: "online" },
      { name: "88 Token", price: "Rp16.000", status: "online" },
      { name: "257 Token", price: "Rp44.000", status: "online" },
      { name: "432 Token", price: "Rp74.000", status: "online" },
      { name: "605 Token", price: "Rp103.000", status: "online" },
      { name: "895 Token", price: "Rp146.000", status: "online" },
      { name: "1353 Token", price: "Rp217.000", status: "online" },
      { name: "2724 Token", price: "Rp436.000", status: "online" }
    ],
    membership: [
      { name: "Weekly Card", price: "Rp20.000", status: "online" },
      { name: "Weekly Card Plus", price: "Rp55.000", status: "online" }
    ]
  },
  genshin: {
    name: "Genshin Impact",
    require: ["userId"],
    image: "assets/genshin.png",
    qris: false,
    desc: "Top up Genesis Crystals Genshin Impact resmi",
    detail: "Via UID, cepat & aman",
    regular: [
      { name: "60 Genesis Crystals", price: "Rp15.000", status: "online" },
      { name: "330 Genesis Crystals", price: "Rp60.000", status: "online" },
      { name: "1090 Genesis Crystals", price: "Rp180.000", status: "online" },
      { name: "2240 Genesis Crystals", price: "Rp386.000", status: "online" },
      { name: "3880 Genesis Crystals", price: "Rp620.000", status: "online" }
    ],
    membership: [
      { name: "Blessing of the Welkin Moon", price: "Rp60.000", status: "online" }
    ]
  },
  ff: {
    name: "Free Fire",
    require: ["userId"],
    image: "assets/ff.png",
    qris: false,
    desc: "Top up diamond Free Fire legal & aman",
    detail: "Tanpa login akun, layanan 24 jam",
    regular: [
      { name: "5 Diamond", price: "Rp2.000", status: "online" },
      { name: "12 Diamond", price: "Rp3.000", status: "online" },
      { name: "50 Diamond", price: "Rp9.000", status: "online" },
      { name: "70 Diamond", price: "Rp11.000", status: "online" },
      { name: "100 Diamond", price: "Rp16.000", status: "online" },
      { name: "140 Diamond", price: "Rp19.000", status: "online" },
      { name: "210 Diamond", price: "Rp28.000", status: "online" },
      { name: "300 Diamond", price: "Rp42.000", status: "online" },
      { name: "355 Diamond", price: "Rp45.000", status: "online" },
      { name: "500 Diamond", price: "Rp66.000", status: "online" },
      { name: "720 Diamond", price: "Rp90.000", status: "online" },
      { name: "1000 Diamond", price: "Rp127.000", status: "online" },
      { name: "1450 Diamond", price: "Rp177.000", status: "online" },
      { name: "2180 Diamond", price: "Rp266.000", status: "online" },
      { name: "3640 Diamond", price: "Rp439.000", status: "online" },
      { name: "4000 Diamond", price: "Rp499.000", status: "online" },
      { name: "7290 Diamond", price: "Rp906.000", status: "online" }
    ],
    membership: [
      { name: "Membership Harian", price: "Rp15.000", status: "online" },
      { name: "Membership Mingguan", price: "Rp30.000", status: "online" },
      { name: "Boyah Pass", price: "Rp44.000", status: "online" },
      { name: "Membership Bulanan", price: "Rp84.000", status: "online" }
    ]
  }, 
  BloodStrike: {
  name: "Blood Strike",
  require: ["userId"],
  image: "https://files.catbox.moe/8uf9aq.jpg",
  qris: false,
  desc: "Top up Gold Blood Strike legal & aman",
  detail: "Proses cepat, 24 jam nonstop",
  regular: [
    { name: "100 Gold", price: "Rp12.500", status: "online" },
    { name: "300 Gold", price: "Rp37.000", status: "online" },
    { name: "500 Gold", price: "Rp62.000", status: "online" },
    { name: "1000 Gold", price: "Rp122.000", status: "online" },
    { name: "2000 Gold", price: "Rp242.000", status: "online" },
    { name: "5000 Gold", price: "Rp600.000", status: "online" }
  ],
  membership: []
}
};

// databaseOther
const databaseOther = {
    WalletSS: {
    name: " Fee Convert saldo",
    require: ["phone", "nominal"],
    image: "https://files.catbox.moe/2klckj.png",
    qris: false,
    desc: "Segera Hadir",
    detail: "Belum Tersedia",
    items: [
      { name: "Allpay → Dana", price: "Rp550", status: "online" },
      { name: "Allpay → Gopay", price: "Rp800", status: "online" },
      { name: "Allpay → Ovo", price: "Rp490", status: "online" },
      { name: "Allpay → Shopeepay", price: "Rp500", status: "online" }, 
      { name: "Allpay → LinkAja", price: "Rp450", status: "online" }, 
      { name: "Allpay → e wallet apapun", price: "Rp700", status: "offline" }
    ]
  }, 
  WebJas: {
    name: "Create website Topup(lihat deskripsi)",
    require: ["voucher"],
    image: "https://files.catbox.moe/zdf9ee.jpeg",
    qris: false,
    desc: "Bisa request game apa saja,atur harga produk, free add halaman kalkulator mlbb,halaman music(req music),halaman pengumuman",
    detail: "Kami akan membuat di gmail yang baru, dan jika web selesai dibuat, maka gmail akan kami berikan ke kalian dan bisa kalian otak atik sendiri di github(mendeploy dari vercel)",
    items: [
      { name: "Buat Website Top Up Mu Sendiri", price: "Rp25.000", status: "online" }, 
      { name: "Buat Website social kaya gw", price: "Rp10.000", status: "online" }
    ]
  }
};

// databasePanel

// databaseHiburan
const databaseHiburan = {
  DuoLingO: {
    name: "Duolingo",
    require: ["voucher"], // Voucher di sini bisa diasumsikan sebagai no WA/Email
    image: "https://files.catbox.moe/fnhfpi.png", // Ganti dengan link icon netflix
    qris: false,
    qty: true, 
    desc: "Duolingo title",
    detail: "",
    items: [
      { name: "Duolingo Super 1 bulan", price: "Rp7.000", status: "online" }
    ]
  },
  CapCuT: {
    name: "Capcut Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/vyaopt.png", // Ganti dengan link icon spotify
    qris: false,
    qty: true, 
    desc: "Capcut Pro",
    detail: "",
    items: [
      { name: "Capcut pro 7 hari", price: "Rp5.000", status: "online" },
      { name: "Capcut Pro 1 Bulan", price: "Rp10.000", status: "online" },
      { name: "Capcut 6 Bulan", price: "Rp20.000", status: "offline" }
    ]
  },
  CanVa: {
    name: "Canva Premium",
    require: ["phone"],
    image: "https://files.catbox.moe/3n8ds6.jpg", // Ganti dengan link icon disney
    qris: false,
    qty: true, 
    desc: "Akun Canva Premium",
    detail: "",
    items: [
      { name: "Canva Premium 1 bulan", price: "Rp5.000", status: "online" },
      { name: "Canva Premium 1 tahun", price: "8.000", status: "online" },
      { name: "Canva Premium Edukasi Lifetime", price: "Rp10.000", status: "online" },
      { name: "Canva Premium Admin Edukasi Lifetime", price: "Rp12.000", status: "offline" },
     { name: "Canva Head 1 bulan", price: "Rp15.000", status: "online" }
    ]
  },
  youtube: {
    name: "YouTube Premium",
    require: ["voucher"],
    image: "https://files.catbox.moe/1ubvar.png", // Ganti dengan link icon youtube
    qris: false,
    qty: true, 
    desc: "Bebas iklan & putar di latar belakang",
    detail: "Sistem invite family atau akun baru.",
    items: [
      { name: "YT Premium 1 Bulan famplan (via inv)", price: "Rp10.000", status: "online" },
      { name: "YT Premium 1 Bulan Indplan (private)", price: "Rp12.000", status: "online" },
      { name: "YT Premium HEAD", price: "Rp15.000", status: "offline" }
    ]
  }, 
  alighm: {
    name: "Alight Motion",
    require: ["voucher"],
    image: "https://files.catbox.moe/f4fmn6.png",
    qris: false,
    qty: true, 
    desc: "berbasis akun bukan apk mod",
    detail: "bergaransi 3 bulan setelah pembelian, aktif sampai januari 2027. made by gmail generator",
    items: [
      { name: "AM prem Sharing EXP Januari 2027", price: "Rp500", status: "offline" },
      { name: "AM prem Private EXP Januari 2027", price: "Rp5.000", status: "online" }
    ],
    membership: []
  }, 
  viu: {
    name: "VIU DRAMA",
    require: ["voucher"],
    image: "https://files.catbox.moe/5x79aa.png",
    qris: false,
    qty: true, 
    desc: "login pakai telepon+pw dari admin",
    detail: "bergaransi setelah pembelian",
    items: [
      { name: "Viu Prem 1 bulan Private", price: "Rp2.000", status: "online" },
      { name: "Viu Prem 3 bulan Private", price: "Rp3.000", status: "offline" },
      { name: "Viu Prem 4 bulan Private", price: "Rp3.500", status: "offline" },
      { name: "Viu Prem 1 tahun Private", price: "Rp4.000", status: "online" },
      { name: "Viu Prem Lifetime Private", price: "Rp5.000", status: "online" }
    ],
    membership: []
  }, 
  GemIn1: {
    name: "Gemini Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/33783p.jpeg",
    qris: false,
    qty: true, 
    desc: "boleh pakai email dari seller/buyer",
    detail: "bergaransi 1 bulan setelah pembelian",
    items: [
      { name: "Gemini Pro 1 bulan", price: "Rp5.000", status: "online" },
      { name: "Method gemini pro", price: "Rp10.000", status: "online" }
    ],
    membership: []
  },
  iB1sPx: {
    name: "Ibis Paint Pro",
    require: ["voucher"],
    image: "https://files.catbox.moe/e9ft9u.jpg",
    qris: false,
    qty: true, 
    desc: "boleh pakai email dari seller/buyer",
    detail: "bergaransi 1 bulan setelah pembelian",
    items: [
      { name: "Ibis Paint X Pro 7 hari", price: "Rp5.000", status: "online" },
      { name: "Ibis Paint X Pro 1 bulan", price: "Rp8.000", status: "online" }
    ],
    membership: []
  }
};

