import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import "../../styles/home.css";

const Card = ({ name, children }) => (
  <div className="card text-start flex-shrink-0 me-4 mb-4" style={{ width: "18rem" }}>
    <img src="" className="card-img-top" alt={name} width="400px" height="200px" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      {children}
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-outline-primary">
          Learn more!
        </a>
        <button type="button" class="btn btn-outline-warning">
        <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  </div>
);

export default Card;