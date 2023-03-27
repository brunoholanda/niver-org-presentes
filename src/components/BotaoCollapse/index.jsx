import Pix from 'components/Pix';
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './BotaoCollapse.module.scss';

export default function BotaoCollapse({ id, pagamento }) {

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleButtonClick = () => {
    window.open(`${pagamento}`, '_blank');
  };

  return (
    <div className={styles.collapse}>
      <Button onClick={toggleOptions}>
        Dar de Presente
      </Button>
      <Collapse in={showOptions}>
        <div>
          <Pix></Pix>
          
          <Button onClick={handleButtonClick}>Cartão</Button>
         
        </div>
      </Collapse>
    </div>
  );
}

