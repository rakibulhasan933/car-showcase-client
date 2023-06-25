"use client"
import React, { useState } from 'react'
import { SearchManuFacturer } from './'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
		<Image src="/magnifying-glass.svg" alt='magnifying' width={40} height={40} className='object-contain' />
	</button>
)

function SearchBar() {
	const [model, setModel] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (manufacturer === '' && model === '') {
			return alert("Please fill in the search bar")
		}
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model')
		}
		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer')
		}
		const newPathName = `${window.location.pathname}?${searchParams.toString()}`
		router.push(newPathName);
	}


	return (
		<form className='relative flex items-center justify-start w-full max-w-3xl max-sm:flex-col max-sm:gap-4' onSubmit={handleSearch}>
			<div className="relative flex items-center justify-start flex-1 max-sm:w-full">
				<SearchManuFacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<div className="relative flex items-center justify-start flex-1 max-sm:w-full">
				<Image src="/model-icon.png" alt='model' width={25} height={25} className=' absolute w-[20px] h-[20px] ml-4' />
				<input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className=" w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm" />
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	)
}

export default SearchBar;

