import {
	MdOutlineRestaurant,
	MdLocalGasStation,
	MdLocalGroceryStore,
	MdLocalCafe,
	MdOutlineConnectingAirports,
	MdMuseum,
} from "react-icons/md";
import { BiSolidHotel, BiSolidBank, BiSolidDrink } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";

export const categories = [
	{ id: 1, name: "Hotels", icon: BiSolidHotel },
	{ id: 2, name: "Gas Station", icon: MdLocalGasStation },
	{ id: 3, name: "Grocery", icon: MdLocalGroceryStore },
	{ id: 4, name: "Cafe", icon: MdLocalCafe },
	{ id: 5, name: " Restaurants", icon: MdOutlineRestaurant },
	{ id: 6, name: "Banks", icon: BiSolidBank },
	{ id: 7, name: "Airport", icon: MdOutlineConnectingAirports },
	{ id: 8, name: "Bar", icon: BiSolidDrink },
	{ id: 9, name: "Parking", icon: BsFillCarFrontFill },
	{ id: 10, name: "Museum", icon: MdMuseum },
];
