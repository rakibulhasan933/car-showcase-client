"use client";
import { CarProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
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
				</Dialog>
			</Transition>
		</>
	)
}

export default CarDetails