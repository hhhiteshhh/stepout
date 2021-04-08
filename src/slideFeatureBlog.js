import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import pic1 from "./images/5.jpg";
import pic2 from "./images/blog2.jpeg";
import pic3 from "./images/blog3.jpeg";
import pic4 from "./images/blog4.jpg";
import "./slideFeatureBlog.css";

const CarouselPage1 = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        interval={1700}
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        onHoverStop={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="blog__image" src={pic1} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="blog__image" src={pic2} alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="blog__image" src={pic3} alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="blog__image" src={pic4} alt="Fourth slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage1;
