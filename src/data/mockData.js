// src/data/mockData.js
// IMPORTANT: Remove any import of 'colors' or 'tokens' from here.
// This file should NOT depend on Material UI's theme directly.

// Use hardcoded hex values that are sympathetic to your theme.
// You can pull these from your src/theme.js's 'tokens' function.
// For dark mode, common colors might be:
const primaryDark = "#1A2027"; // blueGrey[950] or similar
const secondaryMain = "#BA68C8"; // deepPurple[200] or similar
const neutralDark = "#707070"; // grey[700] or similar
const neutralLight = "#FFFFFF"; // common.white

// You'll have to adapt these if your theme colors are different.
// I'm using approximations based on the provided theme snippet.
const colors = { // This is a local colors object just for mock data, not MUI's
  blueAccent: {
    100: "#B3E0FF", 200: "#80CCFF", 300: "#4DB8FF", 400: "#1AA4FF",
    500: "#0090FF", 600: "#007ACC", 700: "#006499", 800: "#004B66",
    900: "#003233"
  },
  greenAccent: {
    100: "#CCFFDD", 200: "#99FFBB", 300: "#66FF99", 400: "#33FF77",
    500: "#00FF55", 600: "#00CC44", 700: "#009933", 800: "#006622",
    900: "#003311"
  },
  redAccent: {
    100: "#FFCCCC", 200: "#FF9999", 300: "#FF6666", 400: "#FF3333",
    500: "#FF0000", 600: "#CC0000", 700: "#990000", 800: "#660000",
    900: "#330000"
  },
  grey: {
    100: "#F5F5F5", 200: "#EEEEEE", 300: "#E0E0E0", 400: "#BDBDBD",
    500: "#9E9E9E", 600: "#757575", 700: "#616161", 800: "#424242",
    900: "#212121"
  },
  // You might need more color definitions here if your mock data uses them.
  // Example:
  primary: {
    main: "#121212", // Default for dark mode
  },
  // Ensure these values match what you expect from your theme
};


export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "aryastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Rivera",
    email: "everrivera@gmail.com",
    age: 150,
    phone: "(921)654-2350",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "admin",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)777-8888",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "123 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "123 Queens Lane, Kings Landing",
    city: "Kings Landing",
    zipCode: "10005",
    registrarId: 123456,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "345 Kings Road, Kings Landing",
    city: "Kings Landing",
    zipCode: "10005",
    registrarId: 123654,
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "aryastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "987 Winterfell Road, Winterfell",
    city: "Winterfell",
    zipCode: "10007",
    registrarId: 123789,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "1 Dragonstone Way, Dragonstone",
    city: "Dragonstone",
    zipCode: "10003",
    registrarId: 123890,
  },
  {
    id: 6,
    name: "Ever Rivera",
    email: "everrivera@gmail.com",
    age: 150,
    phone: "(921)654-2350",
    address: "888 Westeros Ave, The Seven Kingdoms",
    city: "The Seven Kingdoms",
    zipCode: "10009",
    registrarId: 123901,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "456 Main Street, Oldtown",
    city: "Oldtown",
    zipCode: "10002",
    registrarId: 124012,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "111 South Street, Highgarden",
    city: "Highgarden",
    zipCode: "10004",
    registrarId: 124123,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)777-8888",
    address: "777 North Road, Casterly Rock",
    city: "Casterly Rock",
    zipCode: "10006",
    registrarId: 124234,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "01/14/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "59.33",
    phone: "(421)314-2288",
    date: "01/14/2022",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "49.95",
    phone: "(422)982-6739",
    date: "01/14/2022",
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "aryastark@gmail.com",
    cost: "55.00",
    phone: "(921)425-6742",
    date: "01/14/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "10.00",
    phone: "(421)445-1189",
    date: "01/14/2022",
  },
  {
    id: 6,
    name: "Ever Rivera",
    email: "everrivera@gmail.com",
    cost: "75.50",
    phone: "(921)654-2350",
    date: "01/14/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "100.00",
    phone: "(543)124-0123",
    date: "01/14/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "20.00",
    phone: "(222)444-5555",
    date: "01/14/2022",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    cost: "45.00",
    phone: "(444)777-8888",
    date: "01/14/2022",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dce",
    user: "Jon Snow",
    date: "2021-09-01",
    cost: "21.24",
  },
  {
    txId: "03f6f1c",
    user: "Cersei Lannister",
    date: "2021-09-01",
    cost: "59.33",
  },
  {
    txId: "04e4e7e",
    user: "Jaime Lannister",
    date: "2021-09-01",
    cost: "49.95",
  },
  {
    txId: "05e4dce",
    user: "Arya Stark",
    date: "2021-09-01",
    cost: "55.00",
  },
  {
    txId: "06e4e7e",
    user: "Daenerys Targaryen",
    date: "2021-09-01",
    cost: "10.00",
  },
  {
    txId: "07e4dce",
    user: "Ever Rivera",
    date: "2021-09-01",
    cost: "75.50",
  },
  {
    txId: "08f6f1c",
    user: "Ferrara Clifford",
    date: "2021-09-01",
    cost: "100.00",
  },
  {
    txId: "09e4e7e",
    user: "Rossini Frances",
    date: "2021-09-01",
    cost: "20.00",
  },
  {
    txId: "10e4dce",
    user: "Harvey Roxie",
    date: "2021-09-01",
    cost: "45.00",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 12,
    "hot dogColor": colors.greenAccent[600],
    burger: 50,
    "burgerColor": colors.greenAccent[600],
    sandwich: 180,
    "sandwichColor": colors.greenAccent[600],
    kebab: 15,
    "kebabColor": colors.greenAccent[600],
    fries: 18,
    "friesColor": colors.greenAccent[600],
    donut: 4,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AE",
    "hot dog": 22,
    "hot dogColor": colors.greenAccent[600],
    burger: 30,
    "burgerColor": colors.greenAccent[600],
    sandwich: 110,
    "sandwichColor": colors.greenAccent[600],
    kebab: 50,
    "kebabColor": colors.greenAccent[600],
    fries: 25,
    "friesColor": colors.greenAccent[600],
    donut: 6,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AF",
    "hot dog": 30,
    "hot dogColor": colors.greenAccent[600],
    burger: 20,
    "burgerColor": colors.greenAccent[600],
    sandwich: 90,
    "sandwichColor": colors.greenAccent[600],
    kebab: 25,
    "kebabColor": colors.greenAccent[600],
    fries: 12,
    "friesColor": colors.greenAccent[600],
    donut: 8,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AG",
    "hot dog": 15,
    "hot dogColor": colors.greenAccent[600],
    burger: 40,
    "burgerColor": colors.greenAccent[600],
    sandwich: 150,
    "sandwichColor": colors.greenAccent[600],
    kebab: 10,
    "kebabColor": colors.greenAccent[600],
    fries: 30,
    "friesColor": colors.greenAccent[600],
    donut: 3,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AI",
    "hot dog": 28,
    "hot dogColor": colors.greenAccent[600],
    burger: 35,
    "burgerColor": colors.greenAccent[600],
    sandwich: 130,
    "sandwichColor": colors.greenAccent[600],
    kebab: 40,
    "kebabColor": colors.greenAccent[600],
    fries: 20,
    "friesColor": colors.greenAccent[600],
    donut: 7,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AL",
    "hot dog": 8,
    "hot dogColor": colors.greenAccent[600],
    burger: 55,
    "burgerColor": colors.greenAccent[600],
    sandwich: 190,
    "sandwichColor": colors.greenAccent[600],
    kebab: 5,
    "kebabColor": colors.greenAccent[600],
    fries: 10,
    "friesColor": colors.greenAccent[600],
    donut: 2,
    "donutColor": colors.greenAccent[600],
  },
  {
    country: "AM",
    "hot dog": 35,
    "hot dogColor": colors.greenAccent[600],
    burger: 15,
    "burgerColor": colors.greenAccent[600],
    sandwich: 80,
    "sandwichColor": colors.greenAccent[600],
    kebab: 30,
    "kebabColor": colors.greenAccent[600],
    fries: 40,
    "friesColor": colors.greenAccent[600],
    donut: 9,
    "donutColor": colors.greenAccent[600],
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: colors.greenAccent[500],
  },
  {
    id: "stack",
    label: "stack",
    value: 170,
    color: colors.greenAccent[500],
  },
  {
    id: "overflow",
    label: "overflow",
    value: 322,
    color: colors.greenAccent[500],
  },
  {
    id: "other",
    label: "other",
    value: 503,
    color: colors.greenAccent[500],
  },
  {
    id: "unknown",
    label: "unknown",
    value: 120,
    color: colors.greenAccent[500],
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: colors.greenAccent[500], // Example color, adjust as needed
    data: [
      {
        x: "Jan",
        y: 100,
      },
      {
        x: "Feb",
        y: 120,
      },
      {
        x: "Mar",
        y: 150,
      },
      {
        x: "Apr",
        y: 130,
      },
      {
        x: "May",
        y: 160,
      },
      {
        x: "Jun",
        y: 140,
      },
      {
        x: "Jul",
        y: 170,
      },
      {
        x: "Aug",
        y: 155,
      },
      {
        x: "Sep",
        y: 180,
      },
      {
        x: "Oct",
        y: 165,
      },
      {
        x: "Nov",
        y: 190,
      },
      {
        x: "Dec",
        y: 175,
      },
    ],
  },
  {
    id: "france",
    color: colors.blueAccent[300], // Example color
    data: [
      {
        x: "Jan",
        y: 80,
      },
      {
        x: "Feb",
        y: 95,
      },
      {
        x: "Mar",
        y: 110,
      },
      {
        x: "Apr",
        y: 100,
      },
      {
        x: "May",
        y: 125,
      },
      {
        x: "Jun",
        y: 115,
      },
      {
        x: "Jul",
        y: 130,
      },
      {
        x: "Aug",
        y: 120,
      },
      {
        x: "Sep",
        y: 140,
      },
      {
        x: "Oct",
        y: 130,
      },
      {
        x: "Nov",
        y: 150,
      },
      {
        x: "Dec",
        y: 140,
      },
    ],
  },
  {
    id: "us",
    color: colors.redAccent[500], // Example color
    data: [
      {
        x: "Jan",
        y: 150,
      },
      {
        x: "Feb",
        y: 160,
      },
      {
        x: "Mar",
        y: 170,
      },
      {
        x: "Apr",
        y: 155,
      },
      {
        x: "May",
        y: 180,
      },
      {
        x: "Jun",
        y: 165,
      },
      {
        x: "Jul",
        y: 190,
      },
      {
        x: "Aug",
        y: 175,
      },
      {
        x: "Sep",
        y: 200,
      },
      {
        x: "Oct",
        y: 185,
      },
      {
        x: "Nov",
        y: 210,
      },
      {
        x: "Dec",
        y: 195,
      },
    ],
  },
];

// Ensure all other mock data arrays like mockDataTeam, mockDataContacts,
// mockDataInvoices, mockTransactions, mockBarData, mockPieData, mockLineData,
// and mockGeographyData are complete and do NOT use `colors.something[number]`
// unless you define `colors` object *locally* in mockData.js as I did above,
// containing hardcoded hex values or generic color names.

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];