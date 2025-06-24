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
    name: "Ravi Sharma",
    email: "ravisharma@gmail.com",
    age: 35,
    phone: "9876543210",
    access: "admin",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priyasingh@gmail.com",
    age: 42,
    phone: "9123456789",
    access: "manager",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amitkumar@gmail.com",
    age: 45,
    phone: "8765432109",
    access: "user",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "snehareddy@gmail.com",
    age: 26,
    phone: "7890123456",
    access: "admin",
  },
  {
    id: 5,
    name: "Deepak Gupta",
    email: "deepakgupta@gmail.com",
    age: 31,
    phone: "9988776655",
    access: "user",
  },
  {
    id: 6,
    name: "Anjali Devi",
    email: "anjalidevi@gmail.com",
    age: 30,
    phone: "8877665544",
    access: "manager",
  },
  {
    id: 7,
    name: "Suresh Rao",
    email: "sureshrao@gmail.com",
    age: 44,
    phone: "7766554433",
    access: "user",
  },
  {
    id: 8,
    name: "Meena Kumari",
    email: "meenakumari@gmail.com",
    age: 36,
    phone: "9000011111",
    access: "admin",
  },
  {
    id: 9,
    name: "Vikram Bose",
    email: "vikrambose@gmail.com",
    age: 55,
    phone: "9111100000",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Ravi Sharma",
    email: "ravisharma@gmail.com",
    age: 35,
    phone: "9876543210",
    address: "123, MG Road, Basavanagudi, Bengaluru, Karnataka",
    city: "Bengaluru",
    zipCode: "560004",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priyasingh@gmail.com",
    age: 42,
    phone: "9123456789",
    address: "45, Jubilee Hills, Hyderabad, Telangana",
    city: "Hyderabad",
    zipCode: "500033",
    registrarId: 123456,
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amitkumar@gmail.com",
    age: 45,
    phone: "8765432109",
    address: "789, Residency Road, Guntur, Andhra Pradesh",
    city: "Guntur",
    zipCode: "522001",
    registrarId: 123654,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "snehareddy@gmail.com",
    age: 26,
    phone: "7890123456",
    address: "21, Koramangala 4th Block, Bengaluru, Karnataka",
    city: "Bengaluru",
    zipCode: "560034",
    registrarId: 123789,
  },
  {
    id: 5,
    name: "Deepak Gupta",
    email: "deepakgupta@gmail.com",
    age: 31,
    phone: "9988776655",
    address: "56, Kondapur, Hyderabad, Telangana",
    city: "Hyderabad",
    zipCode: "500084",
    registrarId: 123890,
  },
  {
    id: 6,
    name: "Anjali Devi",
    email: "anjalidevi@gmail.com",
    age: 30,
    phone: "8877665544",
    address: "32, Beach Road, Visakhapatnam, Andhra Pradesh",
    city: "Visakhapatnam",
    zipCode: "530002",
    registrarId: 123901,
  },
  {
    id: 7,
    name: "Suresh Rao",
    email: "sureshrao@gmail.com",
    age: 44,
    phone: "7766554433",
    address: "99, Jayanagar 3rd Block, Bengaluru, Karnataka",
    city: "Bengaluru",
    zipCode: "560011",
    registrarId: 124012,
  },
  {
    id: 8,
    name: "Meena Kumari",
    email: "meenakumari@gmail.com",
    age: 36,
    phone: "9000011111",
    address: "10, Banjara Hills, Hyderabad, Telangana",
    city: "Hyderabad",
    zipCode: "500034",
    registrarId: 124123,
  },
  {
    id: 9,
    name: "Vikram Bose",
    email: "vikrambose@gmail.com",
    age: 55,
    phone: "9111100000",
    address: "15, M.G. Road, Vijayawada, Andhra Pradesh",
    city: "Vijayawada",
    zipCode: "520010",
    registrarId: 124234,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Ravi Sharma",
    email: "ravisharma@gmail.com",
    cost: "21.24",
    phone: "9876543210",
    date: "14/01/2022",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priyasingh@gmail.com",
    cost: "59.33",
    phone: "9123456789",
    date: "14/01/2022",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amitkumar@gmail.com",
    cost: "49.95",
    phone: "8765432109",
    date: "14/01/2022",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "snehareddy@gmail.com",
    cost: "55.00",
    phone: "7890123456",
    date: "14/01/2022",
  },
  {
    id: 5,
    name: "Deepak Gupta",
    email: "deepakgupta@gmail.com",
    cost: "10.00",
    phone: "9988776655",
    date: "14/01/2022",
  },
  {
    id: 6,
    name: "Anjali Devi",
    email: "anjalidevi@gmail.com",
    cost: "75.50",
    phone: "8877665544",
    date: "14/01/2022",
  },
  {
    id: 7,
    name: "Suresh Rao",
    email: "sureshrao@gmail.com",
    cost: "100.00",
    phone: "7766554433",
    date: "14/01/2022",
  },
  {
    id: 8,
    name: "Meena Kumari",
    email: "meenakumari@gmail.com",
    cost: "20.00",
    phone: "9000011111",
    date: "14/01/2022",
  },
  {
    id: 9,
    name: "Vikram Bose",
    email: "vikrambose@gmail.com",
    cost: "45.00",
    phone: "9111100000",
    date: "14/01/2022",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dce",
    user: "Ravi Sharma",
    date: "01/09/2021",
    cost: "21.24",
  },
  {
    txId: "03f6f1c",
    user: "Priya Singh",
    date: "01/09/2021",
    cost: "59.33",
  },
  {
    txId: "04e4e7e",
    user: "Amit Kumar",
    date: "01/09/2021",
    cost: "49.95",
  },
  {
    txId: "05e4dce",
    user: "Sneha Reddy",
    date: "01/09/2021",
    cost: "55.00",
  },
  {
    txId: "06e4e7e",
    user: "Deepak Gupta",
    date: "01/09/2021",
    cost: "10.00",
  },
  {
    txId: "07e4dce",
    user: "Anjali Devi",
    date: "01/09/2021",
    cost: "75.50",
  },
  {
    txId: "08f6f1c",
    user: "Suresh Rao",
    date: "01/09/2021",
    cost: "100.00",
  },
  {
    txId: "09e4e7e",
    user: "Meena Kumari",
    date: "01/09/2021",
    cost: "20.00",
  },
  {
    txId: "10e4dce",
    user: "Vikram Bose",
    date: "01/09/2021",
    cost: "45.00",
  },
];

export const mockBarData = [
  {
    country: "KA", // Karnataka
    "Hot Snacks": 120,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 50,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 180,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 15,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 18,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 4,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "TS", // Telangana
    "Hot Snacks": 220,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 300,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 110,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 50,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 25,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 6,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "AP", // Andhra Pradesh
    "Hot Snacks": 300,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 200,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 90,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 25,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 12,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 8,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "KL", // Kerala (example additional state)
    "Hot Snacks": 150,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 400,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 150,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 10,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 30,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 3,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "TN", // Tamil Nadu (example additional state)
    "Hot Snacks": 280,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 350,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 130,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 40,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 20,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 7,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "MH", // Maharashtra (example additional state)
    "Hot Snacks": 80,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 550,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 190,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 5,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 10,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 2,
    "Quick BitesColor": colors.greenAccent[600],
  },
  {
    country: "GJ", // Gujarat (example additional state)
    "Hot Snacks": 350,
    "Hot SnacksColor": colors.greenAccent[600],
    "Cold Beverages": 150,
    "Cold BeveragesColor": colors.greenAccent[600],
    "Indian Meals": 80,
    "Indian MealsColor": colors.greenAccent[600],
    "Desserts": 30,
    "DessertsColor": colors.greenAccent[600],
    "Breakfast Items": 40,
    "Breakfast ItemsColor": colors.greenAccent[600],
    "Quick Bites": 9,
    "Quick BitesColor": colors.greenAccent[600],
  },
];

export const mockPieData = [
  {
    id: "Bengaluru",
    label: "Bengaluru",
    value: 239,
    color: colors.greenAccent[500],
  },
  {
    id: "Hyderabad",
    label: "Hyderabad",
    value: 170,
    color: colors.greenAccent[500],
  },
  {
    id: "Vijayawada",
    label: "Vijayawada",
    value: 322,
    color: colors.greenAccent[500],
  },
  {
    id: "Visakhapatnam",
    label: "Visakhapatnam",
    value: 503,
    color: colors.greenAccent[500],
  },
  {
    id: "Guntur",
    label: "Guntur",
    value: 120,
    color: colors.greenAccent[500],
  },
];

export const mockLineData = [
  {
    id: "KA",
    color: colors.greenAccent[500], // Example color, adjust as needed
    data: [
      // Daily data (example for a week in January)
      {
        x: "01/Jan",
        y: 100,
      },
      {
        x: "02/Jan",
        y: 120,
      },
      {
        x: "03/Jan",
        y: 150,
      },
      {
        x: "04/Jan",
        y: 130,
      },
      {
        x: "05/Jan",
        y: 160,
      },
      {
        x: "06/Jan",
        y: 140,
      },
      {
        x: "07/Jan",
        y: 170,
      },
      // Weekly data (example for a month)
      {
        x: "Week 1",
        y: 800, // Sum of daily values for week 1
      },
      {
        x: "Week 2",
        y: 950,
      },
      {
        x: "Week 3",
        y: 1100,
      },
      {
        x: "Week 4",
        y: 1000,
      },
      // Monthly data (example for a year)
      {
        x: "Jan",
        y: 4500,
      },
      {
        x: "Feb",
        y: 4800,
      },
      {
        x: "Mar",
        y: 5200,
      },
      {
        x: "Apr",
        y: 4900,
      },
      {
        x: "May",
        y: 5500,
      },
      {
        x: "Jun",
        y: 5100,
      },
      {
        x: "Jul",
        y: 5800,
      },
      {
        x: "Aug",
        y: 5400,
      },
      {
        x: "Sep",
        y: 6000,
      },
      {
        x: "Oct",
        y: 5600,
      },
      {
        x: "Nov",
        y: 6200,
      },
      {
        x: "Dec",
        y: 5900,
      },
    ],
  },
  {
    id: "TS",
    color: colors.blueAccent[300], // Example color
    data: [
      // Daily data (example for a week in January)
      {
        x: "01/Jan",
        y: 80,
      },
      {
        x: "02/Jan",
        y: 95,
      },
      {
        x: "03/Jan",
        y: 110,
      },
      {
        x: "04/Jan",
        y: 100,
      },
      {
        x: "05/Jan",
        y: 125,
      },
      {
        x: "06/Jan",
        y: 115,
      },
      {
        x: "07/Jan",
        y: 130,
      },
      // Weekly data (example for a month)
      {
        x: "Week 1",
        y: 700,
      },
      {
        x: "Week 2",
        y: 850,
      },
      {
        x: "Week 3",
        y: 980,
      },
      {
        x: "Week 4",
        y: 900,
      },
      // Monthly data (example for a year)
      {
        x: "Jan",
        y: 3800,
      },
      {
        x: "Feb",
        y: 4000,
      },
      {
        x: "Mar",
        y: 4300,
      },
      {
        x: "Apr",
        y: 4100,
      },
      {
        x: "May",
        y: 4600,
      },
      {
        x: "Jun",
        y: 4400,
      },
      {
        x: "Jul",
        y: 4900,
      },
      {
        x: "Aug",
        y: 4700,
      },
      {
        x: "Sep",
        y: 5100,
      },
      {
        x: "Oct",
        y: 4800,
      },
      {
        x: "Nov",
        y: 5300,
      },
      {
        x: "Dec",
        y: 5000,
      },
    ],
  },
  {
    id: "AP",
    color: colors.redAccent[500], // Example color
    data: [
      // Daily data (example for a week in January)
      {
        x: "01/Jan",
        y: 150,
      },
      {
        x: "02/Jan",
        y: 160,
      },
      {
        x: "03/Jan",
        y: 170,
      },
      {
        x: "04/Jan",
        y: 155,
      },
      {
        x: "05/Jan",
        y: 180,
      },
      {
        x: "06/Jan",
        y: 165,
      },
      {
        x: "07/Jan",
        y: 190,
      },
      // Weekly data (example for a month)
      {
        x: "Week 1",
        y: 1000,
      },
      {
        x: "Week 2",
        y: 1100,
      },
      {
        x: "Week 3",
        y: 1200,
      },
      {
        x: "Week 4",
        y: 1050,
      },
      // Monthly data (example for a year)
      {
        x: "Jan",
        y: 6000,
      },
      {
        x: "Feb",
        y: 6300,
      },
      {
        x: "Mar",
        y: 6700,
      },
      {
        x: "Apr",
        y: 6400,
      },
      {
        x: "May",
        y: 7000,
      },
      {
        x: "Jun",
        y: 6600,
      },
      {
        x: "Jul",
        y: 7200,
      },
      {
        x: "Aug",
        y: 6900,
      },
      {
        x: "Sep",
        y: 7500,
      },
      {
        x: "Oct",
        y: 7100,
      },
      {
        x: "Nov",
        y: 7800,
      },
      {
        x: "Dec",
        y: 7300,
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