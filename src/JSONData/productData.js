import product1 from "../assets/images/beauty.png";
import product2 from "../assets/images/hangover.png";
import product3 from "../assets/images/renewme.png";
import product4 from "../assets/images/immunity.png";
// const getRandomRating = () => (Math.random() * 1.5 + 3.5).toFixed(1);

const productsData = [
  {
    id: 1,
    image: product1,
    name: "Glo (Beauty) Drip",
    price: "$200.00",
    description:
      "Beauty starts from within…and we’re not just talking about personality! Our GLO Drip contains a specially formulated blend of vitamins and antioxidants to heal your skin, increase collagen production, and bring back that vibrant glow!. Get the ultimate beauty boost from the inside out with this perfect blend of hydration, high-dose glutathione, biotin and multi-trace elements. No tricks or angles, just 100% vitamin and antioxidant absorption to keep your hair, skin, and nails looking pristine.",
    ingredients:
      "Biotin, Vitamin C, ALA, Taurine, Vitamin B12, Glutathione (high dose), Electrolytes​",
    upgradePlan:
      "Upgrade to our Super Glo Drip: 2,000mg of Glutathione for double the detox and double the glow!  (+$30)",
  },
  {
    id: 2,
    image: product2,
    name: "Hangover Cure",
    price: "$210.00",
    description:
      "Take on the day after you partied all night with the Hangover Drip. This infusion helps by reducing headaches, nausea, body aches, and fatigue after a long night on the town. Rehydrate and rejuvenate your body so you can power through work or tackle your daily errands. Our treatment rehydrates your body, helps you flush out toxins, restores nutrients lost during a night of heavy drinking, and cleanses your system. Our formula includes anti-nausea and anti-inflammatory medications to rid nausea, aches & pains, and provide fast relief so you’ll be back to feeling normal in no time. Super Hangover Cure: This adds a high dose Glutathione Boost, a powerful antioxidant that aids in detoxification and gives an extra boost to help protect the liver and kidneys.",
    ingredients:
      "Toradol, Zofran, Pepcid, Vitamin B12, B-Complex, Electrolytes, Glutathione (Add $30)​​",
    upgradePlan:
      "Upgrade to our Super Hangover Cure: 1,000mg of Glutathione, a powerful antioxidant that detoxifies your liver and leaves your skin with a radiant glow!  (+$30)",
  },
  {
    id: 3,
    image: product3,
    name: "RenewMe Drip",
    price: "$240.00",
    description:
      "Our most popular drip is this “all in one” vitamin concoction that specializes in optimizing your physical performance and neurological functions. It simultaneously expands your immune support, facilitates a detox, keeps you feeling energized and refreshed. Our signature drip is rich in antioxidants and anti-aging benefits, including a push of high dose glutathione for glowing skin. Boost your immune system and your mental & physical performance with a drip engineered to combat executive stress and leave you looking and feeling Renewed.",
    ingredients:
      "Vitamin B12, B-Complex, Carnitine, Vitamin C, Glutathione, Electrolytes",
    upgradePlan: null,
  },
  {
    id: 4,
    image: product4,
    name: "Immunity Drip",
    price: "$220.00",
    description:
      "Give your body the fuel it needs to stay healthy and on the go. The Immunity Drip is a cold and flu booster, and improves both immune health and mental clarity. Our powerful blend contains powerful antioxidants that deliver a high dose of Vitamin C to fight off bugs and rev your immune system into high gear! The Immunity drip is effective at the first sign of symptoms, while fighting a bug, and even for prevention. This drip is highly recommended for anyone recovering from surgery, during flu season, at the onset of a cold/sickness, or anyone that is always on the go!",
    ingredients:
      "Vitamin C (5,000 mg), Zinc, B-Complex, Arginine, Minerals, Electrolytes",
    upgradePlan:
      "Upgrade to our Super Immunity Drip: 20,000 mg of Vitamin C for a powerful immunity boost (+$40)",
  },
  // {
  //   id: 5,
  //   image: product1,
  //   name: "Uplifting Serum5",
  //   price: "$34.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 6,
  //   image: product2,
  //   name: "Uplifting Serum6",
  //   price: "$36.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 7,
  //   image: product3,
  //   name: "Uplifting Serum7",
  //   price: "$37.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 8,
  //   image: product4,
  //   name: "Uplifting Serum8",
  //   price: "$38.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 9,
  //   image: product1,
  //   name: "Uplifting Serum9",
  //   price: "$39.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 10,
  //   image: product2,
  //   name: "Uplifting Serum10",
  //   price: "$40.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 11,
  //   image: product3,
  //   name: "Uplifting Serum11",
  //   price: "$41.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 12,
  //   image: product4,
  //   name: "Uplifting Serum12",
  //   price: "$42.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 13,
  //   image: product1,
  //   name: "Uplifting Serum13",
  //   price: "$43.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 14,
  //   image: product2,
  //   name: "Uplifting Serum14",
  //   price: "$44.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 15,
  //   image: product3,
  //   name: "Uplifting Serum15",
  //   price: "$45.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 16,
  //   image: product4,
  //   name: "Uplifting Serum16",
  //   price: "$46.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 17,
  //   image: product1,
  //   name: "Uplifting Serum17",
  //   price: "$47.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 18,
  //   image: product2,
  //   name: "Uplifting Serum18",
  //   price: "$48.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 19,
  //   image: product3,
  //   name: "Uplifting Serum19",
  //   price: "$49.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 20,
  //   image: product4,
  //   name: "Uplifting Serum20",
  //   price: "$50.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 21,
  //   image: product1,
  //   name: "Uplifting Serum21",
  //   price: "$51.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 22,
  //   image: product2,
  //   name: "Uplifting Serum22",
  //   price: "$52.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 23,
  //   image: product3,
  //   name: "Uplifting Serum22",
  //   price: "$53.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 24,
  //   image: product4,
  //   name: "Uplifting Serum23",
  //   price: "$54.00",
  //   rating: getRandomRating(),
  // },
  // {
  //   id: 25,
  //   image: product1,
  //   name: "Uplifting Serum24",
  //   price: "$55.00",
  //   rating: getRandomRating(),
  // },

  // {
  //   id: 26,
  //   image: product2,
  //   name: "Uplifting Serum25",
  //   price: "$56.00",
  //   rating: getRandomRating(),
  // },
];

export default productsData;
