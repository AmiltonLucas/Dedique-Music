import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/Pages/Home";
import LoginPage from "./src/Pages/Login";
import RegisterPage from "./src/Pages/Register";
import Error404 from "./src/Errors/Error404";
import ReacaoGravadaPage from "./src/Pages/ContentPages/ReacaoGravada";
import ReconciliacaoFemPage from "./src/Pages/ContentPages/ReconciliacaoFem";
import ReconciliacaoMasPage from "./src/Pages/ContentPages/ReconciliacaoMas";
import DelaracaoMasPage from "./src/Pages/ContentPages/DeclaracaoMas";
import DelaracaoFemPage from "./src/Pages/ContentPages/DeclaracaoFem";
import AniversarioRomanticoPage from "./src/Pages/ContentPages/AniversarioRomantico";
import AniversarioEsposoAPage from "./src/Pages/ContentPages/AniversarioEsposo&A";
import AniversarioEspecialPage from "./src/Pages/ContentPages/AniversarioEspecial";
import AniversarioMaePage from "./src/Pages/ContentPages/AniversarioMae";
import AniversarioPaiPage from "./src/Pages/ContentPages/AniversarioPai";
import AniversarioFilhaPage from "./src/Pages/ContentPages/AniversarioFilha";
import AniversarioFilhoPage from "./src/Pages/ContentPages/AniversarioFilho";
import AniversarioAmigoPage from "./src/Pages/ContentPages/AniversarioAmigo";
import AniversarioAmigaPage from "./src/Pages/ContentPages/AniversarioAmiga";
import AniversarioIrmaPage from "./src/Pages/ContentPages/AniversarioIrma";
import AniversarioIrmaoPage from "./src/Pages/ContentPages/AniversarioIrmao";
import AniversarioTiosPage from "./src/Pages/ContentPages/AniversarioTios";
import DiaDosPaisPage from "./src/Pages/ContentPages/DiaDosPais";
import DiaDasMaesPage from "./src/Pages/ContentPages/DiaDasMaes";
import DiaDosNamoradosFPage from "./src/Pages/ContentPages/DiaDosNamoradosF";
import DiaDosNamoradosMPage from "./src/Pages/ContentPages/DiaDosNamoradosM";
import AniversarioPadrinhosPage from "./src/Pages/ContentPages/AniversarioPadrinhos";
import AniversarioAvosPage from "./src/Pages/ContentPages/AniversarioAvos";
import AniversarioSobrinhosPage from "./src/Pages/ContentPages/AniversarioSobrinhos";
import AniversarioNoraGenroPage from "./src/Pages/ContentPages/AniversarioNoraGenro";
import AniversarioSogrosPage from "./src/Pages/ContentPages/AniversarioSogros";
import AniversarioCasamentoPage from "./src/Pages/ContentPages/AniversarioCasamento";
import AniversarioNamoroPage from "./src/Pages/ContentPages/AniversarioNamoro";
import DiaDaMulherPage from "./src/Pages/ContentPages/DiaDaMulher";
import DiaDosAvosPage from "./src/Pages/ContentPages/DiaDosAvos";
import MensagensNatalPage from "./src/Pages/ContentPages/MensagensNatal";
import MensagensAmizadePage from "./src/Pages/ContentPages/MensagensAmizade";
import ConquistasPage from "./src/Pages/ContentPages/Conquistas";
import PedidoDeCasamentoPage from "./src/Pages/ContentPages/PedidoDeCasamento";
import PedidoDeNamoroPage from "./src/Pages/ContentPages/PedidoDeNamoro";
import OtimismoPage from "./src/Pages/ContentPages/Otimismo";
import SaudadesPage from "./src/Pages/ContentPages/Saudades";
import RomanticasEvangelicasPage from "./src/Pages/ContentPages/RomanticasEvangelicas";
import RomanticasSuavesPage from "./src/Pages/ContentPages/RomanticasSuaves";
import DesculpasGeralPage from "./src/Pages/ContentPages/DesculpasGeral";
import AgradecimentosPage from "./src/Pages/ContentPages/Agradecimentos";
import HomenagensPage from "./src/Pages/ContentPages/Homenagens";
import DicasDeRelacionamentoPage from "./src/Pages/ContentPages/DicasDeRelacionamento";
import RomanticasAnivDoExPage from "./src/Pages/ContentPages/RomanticasAnivDoEx";
import AniversarioComadrePage from "./src/Pages/ContentPages/AniversarioComadre";
import AniversarioGeralPage from "./src/Pages/ContentPages/AniversarioGeral";
import RomanticaPorTelPage from "./src/Pages/ContentPages/RomanticaPorTel";
import AniversarioCunhadosPage from "./src/Pages/ContentPages/AniversarioCunhados";
import RomanticaDistantePage from "./src/Pages/ContentPages/RomanticaDistante";
import DiaDoAmigoPage from "./src/Pages/ContentPages/DiaDoAmigo";
import OpniaoDeClientesPage from "./src/Pages/ContentPages/OpiniaoDeClientes";
import FormaDePagamentoPage from "./src/Pages/ContentPages/FormaDePagamento";
import ContatosAgendamentoPage from "./src/Pages/ContentPages/Contato&Agendamento";
import ScrollToHash from "./src/Components/ScrollToHash/ScrollToHash";
import DedicationFormPage from "./src/Pages/DedicationForm";

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
