import { PropertyProps } from "@/interfaces";
import { CategoryProps } from "@/interfaces";

export const CATEGORIES: CategoryProps[] = [
  { src: "/assets/categories/rooms.svg", alt: "Rooms" },
  { src: "/assets/categories/mansion.svg", alt: "Mansion" },
  { src: "/assets/categories/countryside.svg", alt: "Countryside" },
  { src: "/assets/categories/villa.svg", alt: "Villa" },
  { src: "/assets/categories/tropical.svg", alt: "Tropical" },
  { src: "/assets/categories/new.svg", alt: "New" },
  { src: "/assets/categories/amazing-pool.svg", alt: "Amazing pool" },
  { src: "/assets/categories/beach-house.svg", alt: "Beach house" },
  { src: "/assets/categories/island.svg", alt: "Island" },
  { src: "/assets/categories/camping.svg", alt: "Camping" },
  { src: "/assets/categories/apartment.svg", alt: "Apartment" },
  { src: "/assets/categories/house.svg", alt: "House" },
  { src: "/assets/categories/lakefront.svg", alt: "Lakefront" },
  { src: "/assets/categories/farmhouse.svg", alt: "Farm house" },
  { src: "/assets/categories/tree-house.svg", alt: "Treehouse" },
  { src: "/assets/categories/cabins.svg", alt: "Cabins" },
  { src: "/assets/categories/castles.svg", alt: "Castles" },
];

export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Villa Arrecife Beach House",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    price: 2450,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image 2.jpg",
    images: [
      "/assets/images/Arrecife 2.jpg",
      "/assets/images/Arrecife 3.jpg",
      "/assets/images/Arrecife 4.jpg"
    ],
    discount: 60,
    description: "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views. ",
    reviews: [
      {
        name: "Kerry",
        avatar: "/assets/avatars/kerry.jpg",
        date: new Date("2024-03-12T00:00:00Z"),
        rating: 4.5,
        comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    },
    {
        name: "Pooja",
        avatar: "/assets/avatars/pooja.jpg",
        date: new Date("2024-03-21T00:00:00Z"),
        rating: 4,
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    },
    {
        name: "Cindy & Ben",
        avatar: "/assets/avatars/cindy.jpg",
        date: new Date("2023-08-10T00:00:00Z"),
        rating: 4,
        comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    },
    {
        name: "Marnie",
        avatar: "/assets/avatars/marnie.jpg",
        date: new Date("2023-01-03T00:00:00Z"),
        rating: 4.5,
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    }
    ]
  },
  {
    name: "Entire cabin",
    address: {
      state: "Nova",
      city: "Friburgo",
      country: "Brazil"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    price: 62,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/assets/images/Image 3.jpg",
    images: [],
    discount: 0,
    description: "",
    reviews: [
      {
        name: "",
        avatar: "",
        date: new Date("2025-10-31T00:00:00Z"),
        rating: 0,
        comment: "",
    }
    ]
  },
  {
    name: "Earthen home",
    address: {
      state: "",
      city: "Santa Marta",
      country: "Colombia"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],    
    price: 386,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "6"
    },
    image: "/assets/images/Image 4.jpg",
    images: [],
    discount: 0,
    description: "",
    reviews: [
      {
        name: "",
        avatar: "",
        date: new Date("2025-10-31T00:00:00Z"),
        rating: 0,
        comment: "",
    }
    ]
  },
  {
    name: "Private room",
    address: {
      state: "",
      city: "Moeda",
      country: "Brazil"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    price: 134,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/images/Image 5.jpg",
    images: [],
    discount: 15,
    description: "",
    reviews: [
      {
        name: "",
        avatar: "",
        date: new Date("2025-10-31T00:00:00Z"),
        rating: 0,
        comment: "",
    }
    ]
  },
  {
    name: "Gokce Gemile Estate",
    address: {
      state: "",
      city: "Kayaköy",
      country: "Turkey"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    price: 980,
    offers: {
      bed: "6",
      shower: "6",
      occupants: "12"
    },
    image: "/assets/images/Image 6.jpg",
    images: [],
    discount: 20,
    description: "",
    reviews: [
      {
        name: "",
        avatar: "",
        date: new Date("2025-10-31T00:00:00Z"),
        rating: 0,
        comment: "",
    }
    ]
  },
  {
    name: "Luxury 1000 sqm Villa...",
    address: {
      state: "",
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.76,
    category: ["Top Villa", "Self CheckIn", "Free Reschedule"],
    price: 1430,
    offers: {
      bed: "6",
      shower: "6",
      occupants: "12"
    },
    image: "/assets/images/Image 7.jpg",
    images: [],
    discount: 0,
    description: "",
    reviews: [
      {
        name: "",
        avatar: "",
        date: new Date("2025-10-31T00:00:00Z"),
        rating: 0,
        comment: "",
    }
    ]
  },
  // {
  //   name: "Lakeside Chalet",
  //   address: {
  //     state: "Banff",
  //     city: "Alberta",
  //     country: "Canada"
  //   },
  //   rating: 4.65,
  //   category: ["Lakeside", "Mountain View", "Hiking Trails"],
  //   price: 2300,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-5"
  //   },
  //   image: "https://example.com/image7.jpg",
  //   discount: "10",
  //   description: ""
  // },
  // {
  //   name: "Tropical Garden Villa",
  //   address: {
  //     state: "Koh Samui",
  //     city: "Surat Thani",
  //     country: "Thailand"
  //   },
  //   rating: 4.80,
  //   category: ["Garden", "Free Parking", "Self Checkin"],
  //   price: 2750,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "5-6"
  //   },
  //   image: "https://example.com/image8.jpg",
  //   discount: "25",
  //   description: ""
  // },
  // {
  //   name: "Urban Loft",
  //   address: {
  //     state: "Berlin",
  //     city: "Berlin",
  //     country: "Germany"
  //   },
  //   rating: 4.60,
  //   category: ["City Center", "Free WiFi", "24h Checkin"],
  //   price: 2000,
  //   offers: {
  //     bed: "2",
  //     shower: "1",
  //     occupants: "2-3"
  //   },
  //   image: "https://example.com/image9.jpg",
  //   discount: "",
  //   description: ""
  // },
  // {
  //   name: "Secluded Forest Cabin",
  //   address: {
  //     state: "Whistler",
  //     city: "British Columbia",
  //     country: "Canada"
  //   },
  //   rating: 4.72,
  //   category: ["Secluded", "Hot Tub", "Self Checkin"],
  //   price: 2600,
  //   offers: {
  //     bed: "4",
  //     shower: "2",
  //     occupants: "5-7"
  //   },
  //   image: "https://example.com/image10.jpg",
  //   discount: "40",
  //   description: ""
  // },
  // {
  //   name: "Cliffside Villa",
  //   address: {
  //     state: "Amalfi",
  //     city: "Salerno",
  //     country: "Italy"
  //   },
  //   rating: 4.93,
  //   category: ["Cliffside", "Infinity Pool", "Sea View"],
  //   price: 6000,
  //   offers: {
  //     bed: "4",
  //     shower: "4",
  //     occupants: "6-8"
  //   },
  //   image: "https://example.com/image11.jpg",
  //   discount: "50",
  //   description: ""
  // },
  // {
  //   name: "Coastal Escape Villa",
  //   address: {
  //     state: "Noosa",
  //     city: "Queensland",
  //     country: "Australia"
  //   },
  //   rating: 4.83,
  //   category: ["Beachfront", "Pet Friendly", "Free Parking"],
  //   price: 3400,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-6"
  //   },
  //   image: "https://example.com/image12.jpg",
  //   discount: "",
  //   description: ""
  // },
  // {
  //   name: "Historical Villa",
  //   address: {
  //     state: "Florence",
  //     city: "Tuscany",
  //     country: "Italy"
  //   },
  //   rating: 4.67,
  //   category: ["Historical", "Free Breakfast", "Self Checkin"],
  //   price: 2700,
  //   offers: {
  //     bed: "2",
  //     shower: "2",
  //     occupants: "2-4"
  //   },
  //   image: "https://example.com/image13.jpg",
  //   discount: "35",
  //   description: ""
  // },
  // {
  //   name: "Downtown Apartment",
  //   address: {
  //     state: "Tokyo",
  //     city: "Tokyo",
  //     country: "Japan"
  //   },
  //   rating: 4.81,
  //   category: ["City Center", "Free WiFi", "Public Transport"],
  //   price: 2200,
  //   offers: {
  //     bed: "1",
  //     shower: "1",
  //     occupants: "2"
  //   },
  //   image: "https://example.com/image14.jpg",
  //   discount: "",
  //   description: ""
  // },
  // {
  //   name: "Luxury Safari Lodge",
  //   address: {
  //     state: "Serengeti",
  //     city: "Mara",
  //     country: "Tanzania"
  //   },
  //   rating: 4.97,
  //   category: ["Safari", "Guided Tours", "Free Breakfast"],
  //   price: 4500,
  //   offers: {
  //     bed: "4",
  //     shower: "4",
  //     occupants: "6-8"
  //   },
  //   image: "https://example.com/image15.jpg",
  //   discount: "20",
  //   description: ""
  // },
  // {
  //   name: "Countryside Cottage",
  //   address: {
  //     state: "Cotswolds",
  //     city: "Gloucestershire",
  //     country: "UK"
  //   },
  //   rating: 4.58,
  //   category: ["Countryside", "Fireplace", "Self Checkin"],
  //   price: 1800,
  //   offers: {
  //     bed: "2",
  //     shower: "1",
  //     occupants: "2-4"
  //   },
  //   image: "https://example.com/image16.jpg",
  //   discount: "25",
  //   description: ""
  // },
  // {
  //   name: "Riverfront Mansion",
  //   address: {
  //     state: "Paris",
  //     city: "Île-de-France",
  //     country: "France"
  //   },
  //   rating: 4.86,
  //   category: ["Riverfront", "Private Garden", "Self Checkin"],
  //   price: 5000,
  //   offers: {
  //     bed: "4",
  //     shower: "3",
  //     occupants: "6-8"
  //   },
  //   image: "https://example.com/image17.jpg",
  //   discount: "30",
  //   description: ""
  // },
  // {
  //   name: "Ski Chalet",
  //   address: {
  //     state: "Zermatt",
  //     city: "Valais",
  //     country: "Switzerland"
  //   },
  //   rating: 4.75,
  //   category: ["Mountain View", "Ski Access", "Fireplace"],
  //   price: 3900,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-5"
  //   },
  //   image: "https://example.com/image18.jpg",
  //   discount: "",
  //   description: ""
  // },
  // {
  //   name: "Island Paradise Villa",
  //   address: {
  //     state: "Mahe",
  //     city: "Victoria",
  //     country: "Seychelles"
  //   },
  //   rating: 4.98,
  //   category: ["Beachfront", "Private Pool", "Chef Service"],
  //   price: 6500,
  //   offers: {
  //     bed: "5",
  //     shower: "5",
  //     occupants: "8-10"
  //   },
  //   image: "https://example.com/image19.jpg",
  //   discount: "60",
  //   description: ""
  // },
  // {
  //   name: "Clifftop Retreat",
  //   address: {
  //     state: "Cape Town",
  //     city: "Western Cape",
  //     country: "South Africa"
  //   },
  //   rating: 4.78,
  //   category: ["Ocean View", "Private Pool", "Self Checkin"],
  //   price: 4100,
  //   offers: {
  //     bed: "3",
  //     shower: "3",
  //     occupants: "4-5"
  //   },
  //   image: "https://example.com/image20.jpg",
  //   discount: "",
  //   description: ""
  // }
];