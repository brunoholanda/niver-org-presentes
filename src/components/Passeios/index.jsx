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
            <h1>Opções de presentes</h1>
            {passeios.map((passeios) => {
                return <Card {...passeios} key={passeios.id} />
            })}

        </section>
    )
}