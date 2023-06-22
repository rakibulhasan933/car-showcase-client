"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ tittle, containerStyles, handleClick }: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={"button"}
			className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>
				{tittle}
			</span>
		</button>
	)
}

export default CustomButton