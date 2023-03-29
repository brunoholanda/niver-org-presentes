import styles from './Abadas.module.scss';

export default function Abadas() {
    const username1 = 'abada_customizado';
    const username2 = 'abadarte_';
    
    return (
        <div className={styles.abadas}>
            <div className={styles.abadas__descricao}>
                <h2>Estilize seu Abada!</h2>
                <p>Nessa página decidi deixar pra vocês dois perfis do Instagram para vocês terem ideias para estilizar seu abada da melhor forma, espero que gostem!</p>
            </div>
            <div className={styles.abadas__instagram}>
                <iframe
                    src={`https://www.instagram.com/${username1}/embed/`}
                    title="Instagram Page"
                    width="350"
                    height="430"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                ></iframe>
            </div>
            <div className={styles.abadas__instagram}>
                <iframe
                    src={`https://www.instagram.com/${username2}/embed/`}
                    title="Instagram Page"
                    width="350"
                    height="430"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                ></iframe>
            </div>
        </div>
    );
};