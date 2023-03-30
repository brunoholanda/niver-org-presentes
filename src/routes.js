import Passeios from "components/Passeios";
import ScrollToTop from "components/ScrollToTop";
import Abadas from "Pages/Abadas";
import CorpoPagina from "Pages/CorpoPagina";
import Inicio from "Pages/Inicio";
import PaginaDeErro from "Pages/PaginaDeErro";
import SobreAFesta from "Pages/SobreAFesta";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="/passeios" element={<Passeios />}/>
                    <Route path="/abadas" element={<Abadas />}/>
                    <Route path="/sobre" element={<SobreAFesta />}/>
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;