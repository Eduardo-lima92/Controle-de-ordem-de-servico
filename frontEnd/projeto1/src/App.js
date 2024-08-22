import { Routes, Route } from "react-router-dom"
import Inclusao from "./components/Inclusao";
import MenuSuperior from "./components/MenuSuperior";
import Edicao from "./components/edicao";
import Resumo from "./components/resumo";

const App = () => {
  return(
    <>
      <MenuSuperior/>
      <Routes>
        <Route path="/" element={<Inclusao />}/>
        <Route path="edicao" element={<Edicao />}/>
        <Route path="resumo" element={<Resumo />}/>
      </Routes>
      
    </>
  )
}
export default App;
