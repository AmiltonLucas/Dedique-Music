import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Error404 from "./Errors/Error404";
import ReacaoGravadaPage from "./Pages/ContentPages/ReacaoGravada";
import ReconciliacaoFemPage from "./Pages/ContentPages/ReconciliacaoFem";
import ReconciliacaoMasPage from "./Pages/ContentPages/ReconciliacaoMas";
import DelaracaoMasPage from "./Pages/ContentPages/DeclaracaoMas";
import DelaracaoFemPage from "./Pages/ContentPages/DeclaracaoFem";
import AniversarioRomanticoPage from "./Pages/ContentPages/AniversarioRomantico";
import AniversarioEsposoAPage from "./Pages/ContentPages/AniversarioEsposo&A";
import AniversarioEspecialPage from "./Pages/ContentPages/AniversarioEspecial";
import AniversarioMaePage from "./Pages/ContentPages/AniversarioMae";
import AniversarioPaiPage from "./Pages/ContentPages/AniversarioPai";
import AniversarioFilhaPage from "./Pages/ContentPages/AniversarioFilha";
import AniversarioFilhoPage from "./Pages/ContentPages/AniversarioFilho";
import AniversarioAmigoPage from "./Pages/ContentPages/AniversarioAmigo";
import AniversarioAmigaPage from "./Pages/ContentPages/AniversarioAmiga";
import AniversarioIrmaPage from "./Pages/ContentPages/AniversarioIrma";
import AniversarioIrmaoPage from "./Pages/ContentPages/AniversarioIrmao";
import AniversarioTiosPage from "./Pages/ContentPages/AniversarioTios";
import DiaDosPaisPage from "./Pages/ContentPages/DiaDosPais";
import DiaDasMaesPage from "./Pages/ContentPages/DiaDasMaes";
import DiaDosNamoradosFPage from "./Pages/ContentPages/DiaDosNamoradosF";
import DiaDosNamoradosMPage from "./Pages/ContentPages/DiaDosNamoradosM";
import AniversarioPadrinhosPage from "./Pages/ContentPages/AniversarioPadrinhos";
import AniversarioAvosPage from "./Pages/ContentPages/AniversarioAvos";
import AniversarioSobrinhosPage from "./Pages/ContentPages/AniversarioSobrinhos";
import AniversarioNoraGenroPage from "./Pages/ContentPages/AniversarioNoraGenro";
import AniversarioSogrosPage from "./Pages/ContentPages/AniversarioSogros";
import AniversarioCasamentoPage from "./Pages/ContentPages/AniversarioCasamento";
import AniversarioNamoroPage from "./Pages/ContentPages/AniversarioNamoro";
import DiaDaMulherPage from "./Pages/ContentPages/DiaDaMulher";
import DiaDosAvosPage from "./Pages/ContentPages/DiaDosAvos";
import MensagensNatalPage from "./Pages/ContentPages/MensagensNatal";
import MensagensAmizadePage from "./Pages/ContentPages/MensagensAmizade";
import ConquistasPage from "./Pages/ContentPages/Conquistas";
import PedidoDeCasamentoPage from "./Pages/ContentPages/PedidoDeCasamento";
import PedidoDeNamoroPage from "./Pages/ContentPages/PedidoDeNamoro";
import OtimismoPage from "./Pages/ContentPages/Otimismo";
import SaudadesPage from "./Pages/ContentPages/Saudades";
import RomanticasEvangelicasPage from "./Pages/ContentPages/RomanticasEvangelicas";
import RomanticasSuavesPage from "./Pages/ContentPages/RomanticasSuaves";
import DesculpasGeralPage from "./Pages/ContentPages/DesculpasGeral";
import AgradecimentosPage from "./Pages/ContentPages/Agradecimentos";
import HomenagensPage from "./Pages/ContentPages/Homenagens";
import DicasDeRelacionamentoPage from "./Pages/ContentPages/DicasDeRelacionamento";
import RomanticasAnivDoExPage from "./Pages/ContentPages/RomanticasAnivDoEx";
import AniversarioComadrePage from "./Pages/ContentPages/AniversarioComadre";
import AniversarioGeralPage from "./Pages/ContentPages/AniversarioGeral";
import RomanticaPorTelPage from "./Pages/ContentPages/RomanticaPorTel";
import AniversarioCunhadosPage from "./Pages/ContentPages/AniversarioCunhados";
import RomanticaDistantePage from "./Pages/ContentPages/RomanticaDistante";
import DiaDoAmigoPage from "./Pages/ContentPages/DiaDoAmigo";
import OpniaoDeClientesPage from "./Pages/ContentPages/OpiniaoDeClientes";
import FormaDePagamentoPage from "./Pages/ContentPages/FormaDePagamento";
import ContatosAgendamentoPage from "./Pages/ContentPages/Contato&Agendamento";
import ScrollToHash from "./Components/ScrollToHash/ScrollToHash";
import DedicationFormPage from "./Pages/DedicationForm";

export default function AppRoutes() {
  return (
    <>
      {/* Configurações de rotas */}
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          {/* Users routes */}
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registra-se" element={<RegisterPage />}></Route>
          <Route
            path="/form-detication"
            element={<DedicationFormPage />}
          ></Route>
          <Route path="/reacao-gravada" element={<ReacaoGravadaPage />}></Route>
          <Route
            path="/reconciliacaoF"
            element={<ReconciliacaoFemPage />}
          ></Route>
          <Route
            path="/reconciliacaoM"
            element={<ReconciliacaoMasPage />}
          ></Route>
          <Route
            path="/declaracao-amor-masc"
            element={<DelaracaoMasPage />}
          ></Route>
          <Route
            path="/declaracao-amor-fem"
            element={<DelaracaoFemPage />}
          ></Route>
          <Route
            path="/aniversario-romantico"
            element={<AniversarioRomanticoPage />}
          ></Route>
          <Route
            path="/aniversario-esposo-esposa"
            element={<AniversarioEsposoAPage />}
          ></Route>
          <Route
            path="/aniversario-especial"
            element={<AniversarioEspecialPage />}
          ></Route>
          <Route
            path="/aniversario-mae"
            element={<AniversarioMaePage />}
          ></Route>
          <Route
            path="/aniversario-pai"
            element={<AniversarioPaiPage />}
          ></Route>
          <Route
            path="/aniversario-filha"
            element={<AniversarioFilhaPage />}
          ></Route>
          <Route
            path="/aniversario-filho"
            element={<AniversarioFilhoPage />}
          ></Route>
          <Route
            path="/aniversario-amigo"
            element={<AniversarioAmigoPage />}
          ></Route>
          <Route
            path="/aniversario-amiga"
            element={<AniversarioAmigaPage />}
          ></Route>
          <Route
            path="/aniversario-irma"
            element={<AniversarioIrmaPage />}
          ></Route>
          <Route
            path="/aniversario-irmao"
            element={<AniversarioIrmaoPage />}
          ></Route>
          <Route
            path="/aniversario-tios"
            element={<AniversarioTiosPage />}
          ></Route>
          <Route path="/dia-dos-pais" element={<DiaDosPaisPage />}></Route>
          <Route path="/dia-das-maes" element={<DiaDasMaesPage />}></Route>
          <Route
            path="/dia-dos-namorados-f"
            element={<DiaDosNamoradosFPage />}
          ></Route>
          <Route
            path="/dia-dos-namorados-m"
            element={<DiaDosNamoradosMPage />}
          ></Route>
          <Route
            path="/aniversario-padrinhos"
            element={<AniversarioPadrinhosPage />}
          ></Route>
          <Route
            path="/aniversario-avos"
            element={<AniversarioAvosPage />}
          ></Route>
          <Route
            path="/aniversario-sobrinhos"
            element={<AniversarioSobrinhosPage />}
          ></Route>
          <Route
            path="/aniversario-nora-genro"
            element={<AniversarioNoraGenroPage />}
          ></Route>
          <Route
            path="/aniversario-sogros"
            element={<AniversarioSogrosPage />}
          ></Route>
          <Route
            path="/aniversario-casamento"
            element={<AniversarioCasamentoPage />}
          ></Route>
          <Route
            path="/aniversario-namoro"
            element={<AniversarioNamoroPage />}
          ></Route>
          <Route
            path="/dia-internacional-mulher"
            element={<DiaDaMulherPage />}
          ></Route>
          <Route path="/dia-dos-avos" element={<DiaDosAvosPage />}></Route>
          <Route path="/feliz-natal" element={<MensagensNatalPage />}></Route>
          <Route
            path="/mensagens-amizade"
            element={<MensagensAmizadePage />}
          ></Route>
          <Route path="/conquistas" element={<ConquistasPage />}></Route>
          <Route
            path="/pedido-casamento"
            element={<PedidoDeCasamentoPage />}
          ></Route>
          <Route path="/pedido-namoro" element={<PedidoDeNamoroPage />}></Route>
          <Route path="/otimismo" element={<OtimismoPage />}></Route>
          <Route path="/saudades" element={<SaudadesPage />}></Route>
          <Route
            path="/romanticas-evangelicas"
            element={<RomanticasEvangelicasPage />}
          ></Route>
          <Route
            path="/romanticas-suaves"
            element={<RomanticasSuavesPage />}
          ></Route>
          <Route
            path="/romanticas-suaves"
            element={<RomanticasSuavesPage />}
          ></Route>
          <Route
            path="/desculpas-geral"
            element={<DesculpasGeralPage />}
          ></Route>
          <Route
            path="/agradecimentos"
            element={<AgradecimentosPage />}
          ></Route>
          <Route path="/homenagens" element={<HomenagensPage />}></Route>
          <Route
            path="/dicas-relacionamento"
            element={<DicasDeRelacionamentoPage />}
          ></Route>
          <Route
            path="/romanticas-ex"
            element={<RomanticasAnivDoExPage />}
          ></Route>
          <Route
            path="/aniversario-comadre"
            element={<AniversarioComadrePage />}
          ></Route>
          <Route
            path="/aniversario-geral"
            element={<AniversarioGeralPage />}
          ></Route>
          <Route
            path="/romantica-por-tel"
            element={<RomanticaPorTelPage />}
          ></Route>
          <Route
            path="/aniversario-cunhados"
            element={<AniversarioCunhadosPage />}
          ></Route>
          <Route
            path="/romantica-distantes"
            element={<RomanticaDistantePage />}
          ></Route>
          <Route path="/dia-do-amigo" element={<DiaDoAmigoPage />}></Route>
          <Route
            path="/opiniao-clientes"
            element={<OpniaoDeClientesPage />}
          ></Route>
          <Route
            path="/forma-pagamento"
            element={<FormaDePagamentoPage />}
          ></Route>
          <Route
            path="/contatos-agendamento"
            element={<ContatosAgendamentoPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
