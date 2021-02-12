import React from "react";
import Card from "react-bootstrap/Card";
import banner from "../../assets/banner.jpg";

export default function Cardd() {
  return (
    <div>
      <Card>
        <Card.Img src={banner} alt='Card image' className='banner' />
        <Card.ImgOverlay>
          <div className='texto'>
            <h1>Entregando cargas e sonhos</h1>
            <p>
              Desde 1980 entregando cargas e fazemos pessoas negocios sorriem e
              se realizarem
            </p>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
