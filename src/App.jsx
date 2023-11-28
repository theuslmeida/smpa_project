import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scaneamento from "./pages/scaneamento/scaneamento";
import admin from "./pages/admin/admin";
import Segurança from "./pages/segurança/Segurança";
import Prof from "./pages/Professor/Professor";
import LogAluno from "./pages/LogarAluno/LogAluno";
import CadAluno from "./pages/CadAluno/CadAluno";
import Neg from "./componentes/negado/negado";
import Aprovado from "./componentes/aprovado/aprovado";
import AdmProf from "./componentes/adminProf/AdminProf";
import Sobre from "./pages/SobreNós/Sobre";
import Fotos from "./pages/imagens/imagens";
import ScanOnline from "./pages/ScanOnline/ScanOnline";
import FotosNegadas from "./pages/FotosNeg/FotosNegadas";
import Termos from "./pages/termos/termos";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LogAluno} />
          <Route path="/Termos" Component={Termos} />
          <Route path="/Segurança" Component={Segurança} />
          <Route path="/Professor" Component={Prof} />
          <Route path="/Sobre" Component={Sobre} />
          <Route path="/Admprofessor" Component={AdmProf} />
          <Route path="/Scanear" Component={Scaneamento} />
          <Route path="/admin" Component={admin} />
          <Route path="/Negado" Component={Neg} />
          <Route path="/Cadastramento" Component={CadAluno} />
          <Route path="/aprovado" Component={Aprovado} />
          <Route path="/Imagens" Component={Fotos} />
          <Route path="/Online" Component={ScanOnline} />
          <Route path="/ADMneg" Component={FotosNegadas} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
