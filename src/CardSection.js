import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success pb-4">
      <div className="container">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card imgUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="col-4">
            <Card imgUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="col-4">
            <Card imgUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
