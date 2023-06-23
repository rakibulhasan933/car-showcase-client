"use client"
import { manufacturers } from '@/constants'
import { SearchManuFacturerProps } from '@/types'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
import React, { useState } from 'react'

function SearchManuFacturer({ manufacturer, setManufacturer }: SearchManuFacturerProps) {
	const [query, setQuery] = useState('');

	const filterManufacturer = query === "" ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));
	return (
		<div className="flex items-center justify-start flex-1 max-sm:w-full">
			<Combobox>
				<div className="relative w-full">
					<Combobox.Button className=" absolute top-[14px]">
						<Image src="/car-logo.svg" alt='car logo' width={20} height={20} />
					</Combobox.Button>
					<Combobox.Input className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm" placeholder='Volkswagen'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					>

					</Combobox.Input>
				</div>
			</Combobox>
		</div>
	)
}

export default SearchManuFacturer