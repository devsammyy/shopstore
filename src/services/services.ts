import { img1, img2, img3, img4, img5 } from "../assets/index";

interface CartData {
  id: number;
  category: string;
  cartImg: string;
  description: string;
  price: string;
  details: string;
}

export const data: CartData[] = [
  {
    id: 1,
    category: "",
    cartImg: img1,
    description: "Groceries",
    price: "3000",
    details: "23",
  },
  {
    id: 2,
    category: "",
    cartImg: img2,
    description: "Shoes",
    price: "30000",
    details: "44",
  },
  {
    id: 3,
    category: "",
    cartImg: img3,
    description: "Kitchen",
    price: "45000",
    details: "12",
  },
  {
    id: 4,
    category: "",
    cartImg: img4,
    description: "Electronics",
    price: "84000",
    details: "78",
  },
  {
    id: 5,
    category: "",
    cartImg: img5,
    description: "Accessories",
    price: "14300",
    details: "29",
  },
];
