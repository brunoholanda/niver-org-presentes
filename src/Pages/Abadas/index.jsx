import styles from './Abadas.module.scss';

export default function Abadas() {
    const usernames = ['abada_customizado', 'abadarte_'];

    function renderInstagramEmbed(username) {
        return (
            <div className={styles.abadas__instagram}>
                <iframe
                    src={`https://www.instagram.com/${username}/embed/`}
                    title="Instagram Page"
                    width="350"
                    height="430"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                ></iframe>
            </div>
        );
    }

    return (
        <div className={styles.abadas}>
            <div className={styles.abadas__descricao}>
                <h2>Estilize seu Abada!</h2>
                <p>Nessa página decidi deixar pra vocês dois perfis do Instagram para vocês terem ideias para estilizar seu abada da melhor forma, espero que gostem!</p>
            </div>
            {usernames.map(username => renderInstagramEmbed(username))}
        </div>
    );
};