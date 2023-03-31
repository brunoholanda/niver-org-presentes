import Botao from 'components/Botao';
import styles from './SobreAFesta.module.scss';

export default function SobreAFesta() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.437711443508!2d-34.895206451416016!3d-7.275717258453369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1651d3ec10d3%3A0x138536f5a9382b98!2sUniversidade%20Federal%20da%20Para%C3%ADba%20-%20Centro%20de%20Ci%C3%AAncias%20Humanas%2C%20Letras%20e%20Artes!5e0!3m2!1spt-BR!2sbr!4v1659137366027!5m2!1spt-BR!2sbr";

    return (
        <div className={styles.sobre}>
            <h2>A festa!</h2>
            <p>BBB da Nay é minha festa de aniversário de 30 anos, que decidi
                alugar uma chácara e convidar meus melhores amigos para um dia
                muito especial com DJ, música ao vivo, comida boa e bons drinks
            </p>
            <h2>Localização</h2>
            <a href="https://www.google.com/maps/place/7%C2%B016'32.6%22S+34%C2%B053'42.7%22W/@-7.2757222,-34.8973831,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.2757222!4d-34.8951944?hl=pt-BR">
            <Botao>Ver no Google Maps</Botao>
            </a>
            <div>
                <iframe
                    title="Mapa"
                    width="340"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={mapUrl}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

