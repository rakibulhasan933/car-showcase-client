"use client"

import { CustomFilterProps } from "@/types"
import { useState } from "react"


function CustomFilter({ title, options }: CustomFilterProps) {
	const [selected, setSelected] = useState(options[0])
	return (
		<div>CustomFilter</div>
	)
}

export default CustomFilter