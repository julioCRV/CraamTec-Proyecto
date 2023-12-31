import Styles from "./Card.module.css";
import React from "react";
import Button from 'react-bootstrap/Button';

function Card({ imagen, titulo, descripcion, trabajos, celular }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardContent}>
        <img src={imagen} alt="" />
        <div className={Styles.deslizantee}>
          <h2>{titulo}</h2>
          <div className={Styles.descripcion}>{descripcion}</div>
          <h3>Trabajos</h3>
          <div className={Styles.textdescripcion}>{trabajos}</div>
        </div>

        <div className={Styles.btnn}>
          <a href={celular} target="_blank" rel="noopener noreferrer">
            <Button className="custom-button">
              <span>Contactanos</span>
            </Button>
          </a>
        </div>


      </div>
    </div >
  );
}

export default Card;
