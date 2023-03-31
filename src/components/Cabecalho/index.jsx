import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import Menu from 'components/Menu';
import Links from 'components/Links';

export default function Cabecalho() {
    return (
        <section className={styles.cabecalho}>
            <div className={styles.cabecalho__hamburguer}>
                <Menu />
            </div>

            <Link to="./">
                <img src={logo} alt="logo da festa" />
            </Link>
            <div className={styles.cabecalho__desktop}>
                <Links />
            </div>
        </section>
    )
}
