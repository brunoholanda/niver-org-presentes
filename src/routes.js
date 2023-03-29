import Passeios from "components/Passeios";
import ScrollToTop from "components/ScrollToTop";
import CorpoPagina from "Pages/CorpoPagina";
import Inicio from "Pages/Inicio";
import PaginaDeErro from "Pages/PaginaDeErro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="/passeios" element={<Passeios />}/>
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;