import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import { Outlet } from "react-router-dom";

function CorpoPagina() {
    return (
        <main>
            <Cabecalho />
            <Banner />
            <Outlet /> 
        </main>
    )
}

export default CorpoPagina;