"use client";
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';

interface CarCardProps {
	car: CarProps
};

function CarCard({ car }: CarCardProps) {

	const [isOpen, setIsOpen] = useState(false);

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
			<div className="relative flex w-full mt-2">
				<div className="flex justify-between w-full text-gray-100 group-hover:invisible ">
					<div className="flex flex-col items-center justify-center gap-2 ">
						<Image src="/steering-wheel.svg" alt="steering" width={20} height={20} />
						<p className=" text-[14px] text-black">
							{car.transmission === 'a' ? 'Automatic' : 'Manual'}
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 ">
						<Image src="/tire.svg" alt="tire" width={20} height={20} />
						<p className=" text-[14px] text-black">
							{car.drive.toLocaleUpperCase()}
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 ">
						<Image src="/gas.svg" alt="gas" width={20} height={20} />
						<p className=" text-[14px] text-black">
							{car.city_mpg}MPG
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 z-10 hidden w-full group-hover:flex">
					<CustomButton
						tittle='View More'
						containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
						textStyles='text-white text-[14px] leading-[17px] font-bold'
						rightIcon='/right-arrow.svg'
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
		</div>
	)
}

export default CarCard