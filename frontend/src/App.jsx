import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Layout from "./layouts/Layout"
import LayoutPrincipal from "./layouts/LayoutPrincipal"
import Registrar from "./pages/Registrar"
import Listar from "./pages/Listar"
import Evaluacion from "./pages/Evaluacion"
import ListarId from "./pages/ListarId"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutPrincipal />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="listar" element={<Listar />} />
          <Route path="listar/:id" element={<ListarId />} />
          <Route path="evaluacion/:id" element={<Evaluacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
