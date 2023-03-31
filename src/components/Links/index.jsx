import { Link } from 'react-router-dom';
import styles from './Links.module.scss';

export default function Links() {
    return (
        <div className={styles.links}>
            <Link to="./">
                Inicio
            </Link>
            <Link to="./passeios">
                Presentear
            </Link>
            <Link to="./abadas">
                Abadá
            </Link>
            <Link to="./sobre">
                Sobre
            </Link>
        </div>
    )
}
