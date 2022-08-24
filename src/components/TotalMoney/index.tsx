import { useContext } from "react";
import { UserContext } from "../../Context";
import "./style.css";
export default function TotalMoney() {
  const { listarPreco } = useContext(UserContext);

  return (
    <div className="valorTotal">
      <section>
        <h2 className="h2Total">Valor total:</h2>
        <h2 className="h2ValorTotal">{`R$${listarPreco()},00`}</h2>
      </section>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
