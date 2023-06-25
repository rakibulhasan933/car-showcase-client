"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";


export default function CustomFilter({ title, options }: CustomFilterProps) {
	const [selected, setSelected] = useState(options[0]); // State for storing the selected option


	return (
		<div className='w-fit'>
			<Listbox
				value={selected}
				onChange={(e) => {
					setSelected(e); // Update the selected option in state
				}}
			>
				<div className='relative z-10 w-fit'>
					{/* Button for the listbox */}
					<Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border'>
						<span className='block truncate'>{selected.title}</span>
						<Image src='/chevron-up-down.svg' width={20} height={20} className='object-contain ml-4' alt='chevron_up-down' />
					</Listbox.Button>
					{/* Transition for displaying the options */}
					<Transition
						as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{/* Map over the options and display them as listbox options */}
							{options.map((option) => (
								<Listbox.Option
									key={option.title}
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-gray-900"
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
												{option.title}
											</span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}