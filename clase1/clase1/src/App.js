import Clases from "./Clases";
import Funciones from "./Funciones";
import FunctionsComponent from "./Components/FunctionsComponent";
import ListaEstudiantes from "./Components/ListaEstudiantes";

const listaEstudiantes = ["Jose", "Juan", "Luis"];

function App() {
	return (
		<div>
			<ListaEstudiantes listaEstudiantes={listaEstudiantes} />
			{/*<FunctionsComponent >*/}
			{/*<Clases /> */}
			{/*<Funciones /> */}
		</div>
	);
}

export default App;
