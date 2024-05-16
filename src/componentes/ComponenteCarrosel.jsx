
import { Carousel } from "react-bootstrap";

import Image1 from "../assets/images/banner_img.webp"
import Image2 from "../assets/images/banner_img2.webp"
import Image3 from "../assets/images/banner_img3.png"




function ComponenteCarrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Second slide" />
      </Carousel.Item>

           
    </Carousel>
  );
}

export  { ComponenteCarrosel };