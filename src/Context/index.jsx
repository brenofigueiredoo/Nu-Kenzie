import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: -150 },
  ]);

  const [allList, setAllList] = useState(listTransactions);

  //Criar
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [type, setType] = useState();

  function criarContas(e) {
    e.preventDefault();

    const objResultDespesa = {
      description,
      value: value * -1,
      type,
    };

    const objResultEntrada = {
      description,
      value,
      type,
    };

    if (description && value && type !== undefined && type === "Entrada") {
      setListTransactions([...listTransactions, objResultEntrada]);
      setAllList([...listTransactions, objResultEntrada]);
    } else if (
      description &&
      value &&
      type !== undefined &&
      type === "Despesa"
    ) {
      setListTransactions([...listTransactions, objResultDespesa]);
      setAllList([...listTransactions, objResultDespesa]);
    }
  }

  function removeItem(item) {
    const indiceEncontrado = allList.filter((elem, index) => index !== item);
    setAllList(indiceEncontrado);
    setListTransactions(indiceEncontrado);
  }

  function listarTodos() {
    const filtrolistarTodos = allList.filter((elem) => elem);
    setListTransactions(filtrolistarTodos);
  }

  function listarEntradas() {
    const filtroListarEntradas = allList.filter(
      (elem, index) => elem.type === "Entrada"
    );
    setListTransactions(filtroListarEntradas);
  }

  function listarDespesas() {
    const filtroListarDespesas = allList.filter(
      (elem, index) => elem.type === "Despesa"
    );
    setListTransactions(filtroListarDespesas);
  }

  function listarPreco() {
    return listTransactions.reduce((acc, currentValue) => {
      return currentValue.value + acc;
    }, 0);
  }

  return (
    <UserContext.Provider
      value={{
        criarContas,
        setDescription,
        setValue,
        setType,
        removeItem,
        listTransactions,
        setListTransactions,
        allList,
        setAllList,
        listarTodos,
        listarEntradas,
        listarDespesas,
        listarPreco,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
