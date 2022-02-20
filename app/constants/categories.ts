import { Categories } from "app/app-types";
import guitar from "public/images/example/gi.jpg";
import example3 from "public/images/example/3.jpg";
import example4 from "public/images/example/4.jpg";
import example5 from "public/images/example/5.jpg";
import example6 from "public/images/example/6.jpg";
import example7 from "public/images/example/7.jpg";
import li from "public/images/example/li.jpg";
import dj from "public/images/example/dj.jpg";
import mi from "public/images/example/mi.jpg";
import vi from "public/images/example/vi.jpg";
import bl from "public/images/example/bl.jpg";
import tr from "public/images/example/tr.jpg";
import no from "public/images/example/no.jpg";
import ca from "public/images/example/ca.jpg";
import ka from "public/images/example/ka.jpg";
import zu from "public/images/example/zu.jpg";
import sp from "public/images/example/sp.jpg";

const CATEGORIES: Categories[] = [
  {
    image: guitar,
    name: "Guit/Bass",
    longName: "Guitars and Basses",
  },
  {
    image: example3,
    name: "Drums",
    longName: "Drums and Percussion",
  },
  {
    image: example4,
    name: "Keys",
    longName: "Keys",
  },
  {
    image: example5,
    name: "Studio",
    longName: "Studio and Recording Equipment",
  },
  {
    image: example6,
    name: "Software",
    longName: "Software",
  },
  {
    image: example7,
    name: "PA",
    longName: "PA Equipment",
  },
  {
    image: li,
    name: "Lighting",
    longName: "Lighting and Stage",
  },
  {
    image: dj,
    name: "DJ",
    longName: "DJ Equipment",
  },
  {
    image: vi,
    name: "Video",
    longName: "Broadcast & Video",
  },
  {
    image: mi,
    name: "Microphones",
    longName: "Microphones",
  },
  {
    image: bl,
    name: "Brass",
    longName: "Wind Instruments",
  },
  {
    image: tr,
    name: "Traditional",
    longName: "Traditional Instruments",
  },
  {
    image: no,
    name: "Sheet",
    longName: "Sheet Music",
  },
  {
    image: ca,
    name: "Cases",
    longName: "Cases, Racks and Bags",
  },
  {
    image: ka,
    name: "Cables",
    longName: "Cables and Connectors",
  },
  {
    image: zu,
    name: "Accessories",
    longName: "Accessories",
  },
  {
    image: sp,
    name: "Signal Proc.",
    longName: "Effect and Signal Processors",
  },
];

export default CATEGORIES;
