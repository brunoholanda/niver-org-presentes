import BotaoCollapse from 'components/BotaoCollapse';
import styles from './Card.module.scss';

export default function Card({ id, imagem, nome, preco }) {

    return (
        <div className={styles.card}>
            <div className={styles.card__div} to={`${id}`}>
                <img src={imagem} alt={nome} />
                <div className={styles.card__descricao}>
                    <h1>{nome}</h1>
                    <h2>R$ {preco} Estalecas</h2>
                        <BotaoCollapse />  
                </div>
            </div>

        </div>
    )
}