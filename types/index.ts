import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	tittle: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}