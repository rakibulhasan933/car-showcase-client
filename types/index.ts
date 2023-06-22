import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	tittle: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}