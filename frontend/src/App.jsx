import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./layouts/Layout"
import LayoutPrincipal from "./layouts/LayoutPrincipal"
import Registrar from "./pages/Registrar"
import Evaluacion from "./pages/Evaluacion"
import ListarId from "./pages/ListarId"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutPrincipal />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="listar/:id" element={<ListarId />} />
          <Route path="evaluacion/:id" element={<Evaluacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
