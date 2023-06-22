"use client"
import React, { useState } from 'react'
import { SearchManuFacturer } from './'

function SearchBar() {
	const handleSearch = () => {
		console.log("search working");
	}

	const [manufacturer, setManufacturer] = useState('');
	return (
		<form className='relative flex items-center justify-start w-full max-w-3xl max-sm:flex-col max-sm:gap-4' onSubmit={handleSearch}>
			<SearchManuFacturer
				manufacturer={manufacturer}
				setManufacturer={setManufacturer}
			/>
		</form>
	)
}

export default SearchBar