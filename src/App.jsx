import { useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import MeuHeader from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { UserContext } from "./Context";

function App() {
  const { allList } = useContext(UserContext);

  return (
    <>
      <header>
        <MeuHeader />
      </header>
      <main>
        <section>
          <Form />
          {allList.length > 0 && <TotalMoney />}
        </section>

        {allList.length > 0 ? (
          <List />
        ) : (
          <h2>Você ainda não possui nenhum lançamento</h2>
        )}
      </main>
    </>
  );
}

export default App;
