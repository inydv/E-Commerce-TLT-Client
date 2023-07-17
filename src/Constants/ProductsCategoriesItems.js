import shirt from "../Assets/men/shirt.jpg";
import tshirt from "../Assets/men/tshirt.jpg";
import shoes from "../Assets/men/shoes.jpg";
import jacket from "../Assets/men/jacket.jpg";
import trouser from "../Assets/men/trouser.jpg";
import pullovers from "../Assets/men/pullovers.jpg";
import glasses from "../Assets/men/glasses.jpg";
import watches from "../Assets/men/watch.jpg";

import tops from "../Assets/women/tops.jpg";
import skirt from "../Assets/women/skirt.jpg";
import jeans from "../Assets/women/jeans.jpg";
import dress from "../Assets/women/dress.jpg";
import kurti from "../Assets/women/kurti.jpg";
import flats from "../Assets/women/flats.jpg";
import heels from "../Assets/women/heels.jpg";
import shoes2 from "../Assets/women/shoes.jpg";

import { routes } from "../Core/Routes";

export const MenItems = [
  {
    img: shirt,
    title: "Shirt",
    link: routes.shop + "?sub-category=shirt",
  },
  {
    img: tshirt,
    title: "T-Shirt",
    link: routes.shop + "?sub-category=t-shirt",
  },
  {
    img: shoes,
    title: "Shoes",
    link: routes.shop + "?sub-category=shoes",
  },
  {
    img: jacket,
    title: "Jacket",
    link: routes.shop + "?sub-category=jacket",
  },
  {
    img: trouser,
    title: "Trouser",
    link: routes.shop + "?sub-category=trouser",
  },
  {
    img: pullovers,
    title: "Pullovers",
    link: routes.shop + "?sub-category=pullovers",
  },
  {
    img: glasses,
    title: "Glasses",
    link: routes.shop + "?sub-category=glasses",
  },
  {
    img: watches,
    title: "Watches",
    link: routes.shop + "?sub-category=watches",
  },
];

export const WomenItems = [
  {
    img: tops,
    title: "Tops",
    link: routes.shop + "?sub-category=tops",
  },
  {
    img: skirt,
    title: "Skirt",
    link: routes.shop + "?sub-category=skirt",
  },
  {
    img: jeans,
    title: "Jeans",
    link: routes.shop + "?sub-category=jeans",
  },
  {
    img: dress,
    title: "Dresses",
    link: routes.shop + "?sub-category=dress",
  },
  {
    img: kurti,
    title: "Kurti",
    link: routes.shop + "?sub-category=kurti",
  },
  {
    img: flats,
    title: "Flats",
    link: routes.shop + "?sub-category=flats",
  },
  {
    img: heels,
    title: "Heels",
    link: routes.shop + "?sub-category=heels",
  },
  {
    img: shoes2,
    title: "Shoes",
    link: routes.shop + "?sub-category=shoes",
  },
];
