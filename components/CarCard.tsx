import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image';
import React from 'react'

interface CarCardProps {
	car: CarProps
};

function CarCard({ car }: CarCardProps) {

	const carRent = calculateCarRent(car.city_mpg, car.year);

	return (
		<div className='flex flex-col items-start justify-center p-6 text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl cursor-pointer group-[]:'>
			<div className="flex items-start justify-between w-full gap-2 ">
				<h2 className="text-[22px] leading-[26px] font-bold capitalize">
					{car.make} {car.model}
				</h2>
			</div>
			<p className=" flex mt-6 text-[32px] font-extrabold">
				<span className=" self-start text-[14px] font-semibold">
					$
				</span>
				{carRent}
				<span className=" self-end text-[14px] font-medium">
					/day
				</span>
			</p>
			<div className="relative object-contain w-full h-40 my-3 ">
				<Image src="/hero.png" alt={car.model} fill priority className='object-contain ' />
			</div>
		</div>
	)
}

export default CarCard