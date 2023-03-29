import Card from 'components/Card';
import { useEffect, useState } from 'react';
import styles from './Passeios.module.scss';

export default function Passeios() {

    const [passeios, setPasseios] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/niver-nay-api/passeios')
            .then(resposta => resposta.json())
            .then(dados => {
                setPasseios(dados)

            })
    }, [])


    return (
        <section className={styles.passeios}>
            <div className={styles.passeios__descricao}>
                <h2>Como todos sabem eu amo viajar ✈️ Em outubro vou a Foz do Iguaçu e você pode contribuir para deixar minha viagem incrível</h2>
                <h3>Opções de presentes🎁</h3>
            </div>
            {passeios.map((passeios) => {
                return <Card {...passeios} key={passeios.id} />
            })}

        </section>
    )
}