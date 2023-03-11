import React from "react";

const ListaEstudiantes = ({ listaEstudiantes }) => {
	return (
		<React.Fragment>
			{listaEstudiantes.map((estudiante) => (
				<p>{estudiante}</p>
			))}
		</React.Fragment>
	);
};

export default ListaEstudiantes;
