import React from "react";

const Card = ({
  title = "Card title",
  imgUrl,
  buttonText = "Go Somewhere",
  content="Some quick example text to build on the card title and make up the bulk of the card's content."
}) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={imgUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
       {content}
      </p>
      <a href="#" className="btn btn-success">
        {buttonText}
      </a>
    </div>
  </div>
);

export default Card;