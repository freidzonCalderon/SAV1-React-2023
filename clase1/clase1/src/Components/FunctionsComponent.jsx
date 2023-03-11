import React, { useState } from "react";

const FunctionsComponent = () => {
	const [input, setInput] = useState({
		nombre: "",
		apellido: "",
	});

	return (
		<div>
			<input
				type="text"
				placeholder="Nombre"
				onChange={(e) => {
					setInput({ ...input, nombre: e.target.value });
				}}
			/>

			<input
				type="text"
				placeholder="Apellido"
				onChange={(e) => {
					setInput({ ...input, apellido: e.target.value });
				}}
			/>

			<h1>Hello: {input.nombre}</h1>
			<p>Apellido: {input.apellido}</p>
		</div>
	);
};

export default FunctionsComponent;
