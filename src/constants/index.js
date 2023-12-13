import { brain, repairing, bow, rent } from "../assets/icons";
import { bow2, armguard, newbow, whitebow } from "../assets/images";
import { facebook, instragram, twitter } from "../assets/icons";
export const services = [
  {
    imgURL: bow,
    label: "Bow Tuning",
    subtext:
      "Our archery PROS perform basic bow setups and tune-ups to ensure proper arrow flight.Bow setups and tune-up are free with bow purchase",
  },
  {
    imgURL: rent,
    label: "Renting",
    subtext:
      "Archery PROS allows you to rent at convenient price.The bow is rented in 12 weeks in a cycle. The hirer will have an option to buy rented bow and accessories in 20% discount after end of rental cycle",
  },
  {
    imgURL: repairing,
    label: "Repairing",
    subtext:
      "Archery PROS 40 years of experience of repairing all types of bow and arrow. We are certified team of your choice. We repair re-curve bow, longbow and compound bow with confidence",
  },
  {
    imgURL: brain,
    label: "Training",
    subtext:
      "Archery PROS have team of expert trainers for our clients. We teach basic handling of bows and arrow. With 4 months of training we aim to set you to become pro athletes",
  },
];

export const products = [
  {
    imgURL: bow2,
    description: "German made high quality bow",
    price: "$1400",
    piece: "2 in stock",
  },
  {
    imgURL: newbow,
    description: "Made in Japan for professionals",
    price: "$1500",
    piece: "4 in stock",
  },
  {
    imgURL: whitebow,
    description: "Made in USA, Equality and Endurance",
    price: "$1200",
    piece: "1 in stock",
  },
  {
    imgURL: armguard,
    description: "Professional armguard made of pure lather",
    price: "$300",
    piece: "4 in stock",
  },
];

export const navLinks = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#products",
    label: "Products",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Shoe1", link: "/" },
      { name: "Shoe2", link: "/" },
      { name: "Shoe3", link: "/" },
      { name: "Shoe4", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Our privacy policy" },
      { name: "Our patents" },
      { name: "Terms and services" },
      { name: "Payment policy" },
    ],
  },
  {
    title: "Get in touch",
    links: [{ name: "customer123@gmail.com" }, { name: "773408730840" }],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instragram, alt: "instragram logo" },
];
