"use client";
import { CarProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'

interface CarDetailsProps {
	isOpen: boolean;
	closeModel: () => void;
	car: CarProps;
}

function CarDetails({ isOpen, closeModel, car }: CarDetailsProps) {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment} >
				<Dialog as='div' className="relative z-10" onClose={closeModel} >
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto ">
						<div className="flex items-center justify-center p-4 text-center min-h-min">
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel
									className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col gap-5"
								>
									<button
										type="button"
										className='absolute z-10 p-2 rounded-full top-2 w-fit bg-primary-blue-100'
										onClick={closeModel}
									>
										<Image src="/close.svg" width={20} height={20} alt="close" className='object-contain ' />
									</button>
									<div className="flex flex-col flex-1 gap-3">
										<div className="relative w-full h-40 bg-center bg-cover rounded-lg bg-pattern">
											<Image src="/hero.png" alt={car.model} fill priority className='object-contain ' />
										</div>
										<div className="flex gap-3">
											<div className="relative flex w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image src="/hero.png" alt={car.model} fill priority className='object-contain ' />
											</div>
											<div className="relative flex w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image src="/hero.png" alt={car.model} fill priority className='object-contain ' />
											</div>
											<div className="relative flex w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image src="/hero.png" alt={car.model} fill priority className='object-contain ' />
											</div>
										</div>
										<div className="flex flex-col flex-1 gap-2">
											<h2 className="text-xl font-semibold capitalize">{car.make} {car.model}</h2>
											<div className="flex flex-wrap gap-4 mt-3">
												{Object.entries(car).map(([key, value]) => (
													<div className="flex justify-between w-full gap-5 text-right" key={key}>
														<h4 className="capitalize text-gray">{key.split("_").join(" ")}</h4>
														<p className="font-semibold text-black-100">{value}</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default CarDetails