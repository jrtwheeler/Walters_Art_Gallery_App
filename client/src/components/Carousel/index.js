import React, {useState} from "react";
import {Carousel} from "react-bootstrap";
import image1 from '../../images/walters-interior1.png';
import image2 from '../../images/walters-interior2.png';
import image3 from '../../images/walters-interior3.png';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={image1}
            alt="The Walters Museum"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={image2}
            alt="The Walters Museum"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={image3}
            alt="The Walters Museum"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;