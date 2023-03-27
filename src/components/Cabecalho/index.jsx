import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import Menu from 'components/Menu';

export default function Cabecalho() {
    return (
        <section className={styles.cabecalho}>
            <Menu />
            <div className={styles.cabecalho__links}>
                <a href="#imoveis">A festa</a>
                <a href="#sobre">Presenteie</a>
                <a href="#contato">Contato</a>
            </div>
            <Link to="./">
                <img src={logo} alt="logo da festa" />
            </Link>
        </section>
    )
}
