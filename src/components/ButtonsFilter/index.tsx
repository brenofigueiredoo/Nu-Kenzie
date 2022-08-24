import { useContext } from "react";
import { UserContext } from "../../Context";

export default function ButtonFilter() {
  const { listarTodos, listarEntradas, listarDespesas } =
    useContext(UserContext);

  return (
    <div className="divFiltros">
      <div className="divH2">
        <h2>Resumo financeiro</h2>
      </div>
      <div className="divButtonFiltros">
        <button onClick={listarTodos} className="buttonsFiltro filtrarTodos">
          Todos
        </button>
        <button
          onClick={listarEntradas}
          className="buttonsFiltro filtrarEntradas"
        >
          Entradas
        </button>
        <button
          onClick={listarDespesas}
          className="buttonsFiltro filtrarDespesas"
        >
          Despesas
        </button>
      </div>
    </div>
  );
}
