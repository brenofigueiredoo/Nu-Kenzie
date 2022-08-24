import { createContext, ReactNode } from "react";
import { useState } from "react";

interface IContextProps {
  children: ReactNode;
}

interface IListTransactions {
  description: string;
  type: string;
  value: number;
}

interface IUseContext {
  criarContas: (e: any) => void;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  listTransactions: IListTransactions[];
  setListTransactions: React.Dispatch<
    React.SetStateAction<IListTransactions[]>
  >;
  allList: IListTransactions[];
  setAllList: React.Dispatch<React.SetStateAction<IListTransactions[]>>;
  removeItem: (item: any) => void;
  listarTodos: () => void;
  listarEntradas: () => void;
  listarDespesas: () => void;
  listarPreco: () => void;
}

export const UserContext = createContext<IUseContext>({} as IUseContext);

export const ContextProvider = ({ children }: IContextProps) => {
  const [listTransactions, setListTransactions] = useState<IListTransactions[]>(
    [
      { description: "Salário recebido", type: "Entrada", value: 2500 },
      { description: "Conta de luz", type: "Despesa", value: -150 },
    ]
  );

  const [allList, setAllList] = useState<IListTransactions[]>(listTransactions);

  //Criar
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<string>("");

  function criarContas(e: any) {
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

  function removeItem(item: any) {
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
