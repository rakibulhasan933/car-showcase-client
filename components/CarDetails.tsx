import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
	isOpen: boolean;
	closeModel: () => void;
	car: CarProps;
}

function CarDetails({ isOpen, closeModel, car }: CarDetailsProps) {
	return (
		<div>CarDetails</div>
	)
}

export default CarDetails