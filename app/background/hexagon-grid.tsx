"use client";
import Hexagon from "./components/hexagon";
import { useState } from "react";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import styles from "./background.module.css";

export default function Background() {
	const { rows, cols } = useWindowSize();

	return (
		<div
			className={`fixed inset-0 -z-10 overflow-hidden text-black bg-gradient-45 pointer-events-auto`}>
			{Array.from({ length: rows }).map((_, row) =>
				Array.from({ length: cols }).map((_, col) => {
					return (
						<Hexagon key={`${row}-${col}`} row={row} col={col} />
					);
				})
			)}
		</div>
	);
}
