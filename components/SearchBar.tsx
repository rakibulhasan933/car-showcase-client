"use client"
import React, { useState } from 'react'
import { SearchManuFacturer } from './'
import Image from 'next/image';

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

export default SearchBar;


function SearchBarButton({ otherClasses }: { otherClasses: string }) {
	return (
		<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
			<Image src="/public/magnifying-glass.svg" alt='magnifying' width={40} height={40} className='object-contain' />
		</button>
	)
}
