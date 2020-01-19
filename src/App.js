import React, { useEffect, useState } from "react";
import api from "./services/api";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

//Conceitos do React
// componente: bloco isolado de HTML , CSS e JS que nao interfere no restante da aplicaçao
// estado: informações mantidas pelo componente (imutabilidade). Tota vez que há alteração do estado o componente é executado novamente.
// propriedade: informaçoes que um componente pai passa para um componente filho

function App() {
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
