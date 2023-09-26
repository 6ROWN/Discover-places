"use client";
import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { useUserSearchContext } from "@/context/userSearchContext";

const Searchbar = () => {
	const [queryValue, setQueryValue] = useState<string>("");
	const { searchInput, setSearchInput } = useUserSearchContext();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (queryValue.trim() !== "") {
			setSearchInput(queryValue.trim());
		}
	};

	return (
		<form onSubmit={onSubmit} className="relative">
			<input
				className="w-full py-2 rounded-md px-4 outline-none border-none text-gray-600"
				placeholder="Search places"
				value={queryValue}
				onChange={(e) => setQueryValue(e.target.value)}
			/>
			<button
				type="submit"
				// onClick={onSubmit}
				className="absolute right-0 top-0 text-blue-500 p-2 hover:text-gray-500"
			>
				<BiSearch size={24} />
			</button>
		</form>
	);
};

export default Searchbar;
