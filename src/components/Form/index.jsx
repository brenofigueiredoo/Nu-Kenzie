import { useContext } from "react";
import { UserContext } from "../../Context";
import "./style.css";

export default function Form() {
  const { criarContas, setDescription, setValue, setType } =
    useContext(UserContext);

  return (
    <div className="divForm">
      <form onSubmit={criarContas}>
        <div>
          <p>Descrição</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="inputFormDescricao"
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <p className="pExemplo">Ex: Compra de roupas</p>
        </div>
        <div className="divP">
          <p>Valor</p>
          <p>Tipo de valor</p>
        </div>
        <div className="divFormInput">
          <input
            onChange={(e) => setValue(+e.target.value)}
            className="inputFormValor"
            type="text"
            placeholder="R$"
          />
          <select
            onChange={(e) => setType(e.target.value)}
            className="selectForm"
            name=""
            id=""
          >
            <option value=""></option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
        <div className="divButtonInserir">
          <button className="buttonInserir" type="submit">
            Inserir valor
          </button>
        </div>
      </form>
    </div>
  );
}
