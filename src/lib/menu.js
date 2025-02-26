import { colors } from "./color.js"; 

export const menu = {
  item1: {
    id: "tiramisu-cups",
    title: "$5 | Tiramisu Cups",
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "menu-items/tiramisu.png",
    position: "left",
    hoverColor: colors.item1Hover, 
  },
  item2: {
    id: "vegan-brownies",
    title: "$4 | Vegan Brownies",
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "menu-items/brownie.png",
    position: "right",
    hoverColor: colors.item2Hover,
  },
  item3: {
    id: "cheesecakes",
    title: "$4 | Cheesecakes",
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "menu-items/cheesecakes.png",
    position: "left",
    hoverColor: colors.item3Hover,
  },
  item4: {
    id: "vegan-cookies",
    title: "$5 | Vegan Chocolate Chip Cookies",
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "menu-items/cookie.png",
    position: "right",
    hoverColor: colors.item4Hover,
  }
};
