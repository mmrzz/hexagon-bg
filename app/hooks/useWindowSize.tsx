"use client";
import { useState, useEffect } from "react";

export function useWindowSize() {
	const size = 60;

	const [dims, setDims] = useState({ cols: 0, rows: 0 });

	useEffect(() => {
		function updateSize() {
			const vw = window.innerWidth;
			const vh = window.innerHeight;

			// Each column adds 1.25*hexWidth
			const cols = Math.ceil(vw / (size * 1.25)) + 1;
			// Each row adds hexHeight/2
			const rows = Math.ceil(vh / ((size * 0.86) / 2)) + 1;

			setDims({ cols, rows });
		}

		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return dims;
}
