import Botao from 'components/Botao';
import Pix from 'components/Pix';
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

export default function Card({ id, imagem, nome, preco, pagamento }) {

    
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

    return (
        <div className={styles.card}>
            <div className={styles.card__div} to={`${id}`}>
                <img src={imagem} alt={nome} />
                <div className={styles.card__descricao}>
                    <h1>{nome}</h1>
                    <p>R$ {preco} Estalecas</p>
                    <div className={styles.collapse}>
                        <Button onClick={toggleOptions}>
                            Dar de Presente
                        </Button>
                        <Collapse in={showOptions}>
                            <div>
                                <Pix></Pix>
                                <Link to={pagamento}>
                                    <Botao>Cartão & Boleto</Botao>
                                </Link>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

        </div>
    )
}