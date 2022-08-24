import "./reset.css";
import "./style.css";
import { FaTrash } from "react-icons/fa";
import ButtonFilter from "../ButtonsFilter";
import { useContext } from "react";
import { UserContext } from "../../Context";

export default function List() {
  const { removeItem, listTransactions } = useContext(UserContext);

  return (
    <section className="sectionListar">
      <ButtonFilter />
      <ul>
        {listTransactions.map((elem, index) => (
          <li
            className={elem.type === "Entrada" ? "liLista" : "liListaDespesa"}
            key={index}
          >
            <div className="divInfoConta">
              <h2>{elem.description}</h2>
              <p>R${elem.value},00</p>
              <button
                onClick={() => removeItem(index)}
                className="buttonRemove"
              >
                <FaTrash />
              </button>
            </div>
            <p>{elem.type}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
