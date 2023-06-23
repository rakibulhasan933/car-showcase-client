import { CarProps } from '@/types'
import React from 'react'

interface CarCardProps {
	car: CarProps
};

function CarCard({ car }: CarCardProps) {
	return (
		<div>
			<h2>{car.class}</h2>
		</div>
	)
}

export default CarCard