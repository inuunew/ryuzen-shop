const database = {

  ff: {
    name: "Free Fire",
    type: "id",
    image: "assets/ff.png",
    premium: true,
    regular: [
      { name: "5 Diamond Free Fire", price: "Rp1.500" },
      { name: "12 Diamond Free Fire", price: "Rp2.500" },
      { name: "50 Diamond Free Fire", price: "Rp8.000" },
      { name: "70 Diamond Free Fire", price: "Rp10.000" },
      { name: "100 Diamond Free Fire", price: "Rp15.000" },
      { name: "140 Diamond Free Fire", price: "Rp18.000" },
      { name: "210 Diamond Free Fire", price: "Rp27.000" },
      { name: "300 Diamond Free Fire", price: "Rp41.000" },
      { name: "355 Diamond Free Fire", price: "Rp44.000" },
      { name: "500 Diamond Free Fire", price: "Rp65.000" },
      { name: "720 Diamond Free Fire", price: "Rp89.000" },
      { name: "1000 Diamond Free Fire", price: "Rp126.000" },
      { name: "1450 Diamond Free Fire", price: "Rp176.000" },
      { name: "2180 Diamond Free Fire", price: "Rp265.000" },
      { name: "3640 Diamond Free Fire", price: "Rp438.000" },
      { name: "4000 Diamond Free Fire", price: "Rp498.000" },
      { name: "7290 Diamond Free Fire", price: "Rp905.000" }
    ],
    membership: [
      { name: "Membership harian", price: "Rp15.000" },
      { name: "Membership Mingguan 50 DM", price: "Rp30.000" }, 
      { name: "membership bulanan", price: "Rp84.000" }, 
      { name: "Boyah Pass", price: "Rp44.000" }
    ]
  },

  ml: {
    name: "Mobile Legends",
    type: "idserver",
    image: "assets/ml.png",
    premium: true,
    regular: [
      { name: "3 Diamond ML", price: "Rp1.500" },
      { name: "5 Diamond ML", price: "Rp2.000" },
      { name: "10 Diamond ML", price: "Rp3.500" },
      { name: "12 Diamond ML", price: "Rp4.000" },
      { name: "14 Diamond ML", price: "Rp4.500" },
      { name: "18 Diamond ML", price: "Rp5.500" },
      { name: "19 Diamond ML", price: "Rp6.000" },
      { name: "28 Diamond ML", price: "Rp7.500" },
      { name: "36 Diamond ML", price: "Rp10.000" },
      { name: "44 Diamond ML", price: "Rp11.000" },
      { name: "56 Diamond ML", price: "Rp14.500" },
      { name: "59 Diamond ML", price: "Rp15.300" },
      { name: "74 Diamond ML", price: "Rp19.500" },
      { name: "85 Diamond ML", price: "Rp22.400" },
      { name: "86 Diamond ML", price: "Rp22.500" },
      { name: "100 Diamond ML", price: "Rp24.500" },
      { name: "112 Diamond ML", price: "Rp29.300" },
      { name: "144 Diamond ML", price: "Rp37.400" },
      { name: "148 Diamond ML", price: "Rp39.500" },
      { name: "170 Diamond ML", price: "Rp44.500" },
      { name: "172 Diamond ML", price: "Rp45.000" },
      { name: "185 Diamond ML", price: "Rp46.600" },
      { name: "222 Diamond ML", price: "Rp57.000" },
      { name: "229 Diamond ML", price: "Rp60.000" },
      { name: "240 Diamond ML", price: "Rp62.500" },
      { name: "257 Diamond ML", price: "Rp65.000" },
      { name: "277 Diamond ML", price: "Rp74.500" },
      { name: "278 Diamond ML", price: "Rp73.500" },
      { name: "284 Diamond ML", price: "Rp75.500" },
      { name: "296 Diamond ML", price: "Rp76.000" },
      { name: "301 Diamond ML", price: "Rp78.000" },
      { name: "344 Diamond ML", price: "Rp86.000" },
      { name: "345 Diamond ML", price: "Rp89.500" },
      { name: "355 Diamond ML", price: "Rp92.000" },
      { name: "374 Diamond ML", price: "Rp98.000" },
      { name: "384 Diamond ML", price: "Rp104.000" },
      { name: "408 Diamond ML", price: "Rp105.000" },
      { name: "429 Diamond ML", price: "Rp109.000" },
      { name: "514 Diamond ML", price: "Rp132.000" },
      { name: "522 Diamond ML", price: "Rp136.000" },
      { name: "568 Diamond ML", price: "Rp140.000" },
      { name: "601 Diamond ML", price: "Rp153.000" },
      { name: "642 Diamond ML", price: "Rp172.000" },
      { name: "750 Diamond ML", price: "Rp198.000" },
      { name: "875 Diamond ML", price: "Rp217.000" },
      { name: "965 Diamond ML", price: "Rp246.000" },
      { name: "977 Diamond ML", price: "Rp249.000" },
      { name: "1050 Diamond ML", price: "Rp266.000" },
      { name: "1139 Diamond ML", price: "Rp290.000" },
      { name: "1183 Diamond ML", price: "Rp300.000" },
      { name: "1220 Diamond ML", price: "Rp310.000" }
    ],
    membership: [
      { name: "1x Weekly Diamond Pass (220 DM)", price: "Rp29.000" },
      { name: "2x Weekly Diamond Pass (440 DM)", price: "Rp56.000" },
      { name: "3x Weekly Diamond Pass (660 DM)", price: "Rp85.000" },
      { name: "4x Weekly Diamond Pass (880 DM)", price: "Rp115.000" },
      { name: "5x Weekly Diamond Pass (1100 DM)", price: "Rp140.000" },
      { name: "Starlight Membership", price: "Rp78.000" },
      { name: "Twilight Pass", price: "Rp145.000" },
      { name: "Starlight Member Plus", price: "Rp195.000" }
    ]
  },

  pubg: {
    name: "PUBG Mobile",
    type: "uid",
    image: "assets/pubg.png",
    premium: false,
    regular: [
      { name: "15 UC", price: "Rp8.000" },
      { name: "25 UC", price: "Rp15.500" },
      { name: "35 UC", price: "Rp16.000" },
      { name: "50 UC", price: "Rp17.000" },
      { name: "60 UC", price: "Rp18.500" },
      { name: "70 UC", price: "Rp28.000" },
      { name: "100 UC", price: "Rp31.000" },
      { name: "125 UC", price: "Rp45.000" },
      { name: "150 UC", price: "Rp48.000" },
      { name: "200 UC", price: "Rp60.000" },
      { name: "250 UC", price: "Rp74.000" },
      { name: "300 UC", price: "Rp78.000" },
      { name: "375 UC", price: "Rp92.000" },
      { name: "525 UC", price: "Rp137.000" },
      { name: "700 UC", price: "Rp168.000" },
      { name: "750 UC", price: "Rp180.000" },
      { name: "1000 UC", price: "Rp240.000" },
      { name: "1500 UC", price: "Rp346.000" }
    ],
    membership: [
      { name: "Elite Pass Plus + Kupon Peti Klasik", price: "Rp420.000" }
    ]
  },

  genshin: {
    name: "Genshin Impact",
    type: "idserver", // ubah ke uid supaya konsisten 
    image: "assets/genshin.png",
    premium: false, 
    regular: [
      { name: "60 Genesis Crystals", price: "Rp15.000" },
      { name: "330 Genesis Crystals", price: "Rp60.000" },
      { name: "1090 Genesis Crystals", price: "Rp180.000" },
      { name: "2240 Genesis Crystals", price: "Rp386.000" },
      { name: "3880 Genesis Crystals", price: "Rp620.000" }
    ],
    membership: [
      { name: "Blessing of the Welkin Moon", price: "Rp60.000" }
    ]
  },

  hok: {
    name: "Honor of Kings",
    type: "id",
    image: "assets/hok.png",
    premium: false, 
    regular: [
      { name: "8 Tokens HOK", price: "Rp2.500" },
      { name: "17 Tokens HOK", price: "Rp3.500" },
      { name: "23 Tokens HOK", price: "Rp5.500" },
      { name: "88 Tokens HOK", price: "Rp16.000" },
      { name: "257 Tokens HOK", price: "Rp44.000" },
      { name: "432 Tokens HOK", price: "Rp74.000" },
      { name: "605 Tokens HOK", price: "Rp103.000" },
      { name: "895 Tokens HOK", price: "Rp146.000" },
      { name: "1353 Tokens HOK", price: "Rp217.000" },
      { name: "2724 Tokens HOK", price: "Rp436.000" }
    ],
    membership: [
      { name: "Weekly Card", price: "Rp20.000" },
      { name: "Weekly Card Plus", price: "Rp55.000" }
    ]
  },

  codm: {
    name: "Call of Duty",
    type: "uid",
    image: "assets/cod.png",
    premium: false, 
    regular: [
      { name: "31 CP", price: "Rp6.000" },
      { name: "62 CP", price: "Rp13.000" },
      { name: "127 CP", price: "Rp22.000" },
      { name: "317 CP", price: "Rp50.000" },
      { name: "634 CP", price: "Rp96.000" },
      { name: "1373 CP", price: "Rp190.000" }
    ],
    membership: []
  }
};