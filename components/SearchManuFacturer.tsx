"use client"
import { manufacturers } from '@/constants'
import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useState, Fragment } from 'react'

function SearchManuFacturer({ manufacturer, setManufacturer }: SearchManuFacturerProps) {
	const [query, setQuery] = useState('');

	const filterManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));
	return (
		<div className="flex items-center justify-start flex-1 max-sm:w-full">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full">
					<Combobox.Button className=" absolute top-[14px]">
						<Image src="/car-logo.svg" alt='car logo' width={20} height={20} />
					</Combobox.Button>
					<Combobox.Input className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm" placeholder='Volkswagen'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options>
							{filterManufacturers.map((item) => (
								<Combobox.Option
									key={item}
									className={({ active }) => ` relative cursor-default select-none py-2 pl-10 pr-4 ${active ? ' bg-primary-blue text-white' : ' text-gray-900'}`}
									value={item}
								>
									{({ selected, active }) => (
										<>
											<span className={` block truncate ${selected ? ' font-medium' : ' font-normal'}`}></span>
										</>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>

				</div>
			</Combobox>
		</div>
	)
}

export default SearchManuFacturer