"use client";
import { useState, useEffect } from "react";

type props = {
	row: number;
	col: number;
};

function Hexagon({ row, col }: props) {
	const [hovered, setHovered] = useState(false);
	const size = 60;

	const radius = size / 2;
	const points: string[] = [];

	for (let i = 0; i < 6; i++) {
		const angle = (i * Math.PI) / 3;
		const x = radius + radius * Math.cos(angle);
		const y = radius * 0.866 + radius * Math.sin(angle);
		//0.866 is cos(30) and it's here so the hexagon starts at the top and not be just in the middle
		points.push(`${x},${y}`);
	}

	const handleMouseEnter = () => {
		setHovered(true);
		console.log(row, col);
		setTimeout(() => setHovered(false), 800);
	};

	const x = col * (radius * 3);
	const y = (row - 1) * (radius * 0.86);
	const offsetX = row % 2 === 0 ? 0 : radius * -1.5;

	const style = {
		left: `${x + offsetX}px`,
		top: `${y}px`,
	};
	return (
		<svg
			onMouseEnter={handleMouseEnter}
			width={size}
			height={size * 0.86}
			className={`hexagon absolute transition-transform duration-900 ${
				hovered ? "scale-50 rotate-y-270 rotate-300" : "scale-90"
			}`}
			style={style}>
			{" "}
			{/*  again 0.866 makes it fit the hexagon */}
			<defs>
				<linearGradient id='grad'>
					<stop offset='0' stopColor='#333' />
					<stop offset='1' stopColor='#000' />
				</linearGradient>
			</defs>
			<polygon points={points.join(" ")} fill='currentColor' />
		</svg>
	);
}

export default Hexagon;
