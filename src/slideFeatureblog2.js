import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import pic1 from "./images/f1.png";
import pic2 from "./images/f2.png";
import pic3 from "./images/f3.png";
import pic4 from "./images/f4.png";
import pic5 from "./images/f5.png";
import "./slideFeatureblog2.css";

const CarouselPage2 = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        interval={1700}
        activeItem={1}
        length={5}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        onHoverStop={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="blog__image__2" src={pic1} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="blog__image__2" src={pic2} alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="blog__image__2" src={pic3} alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="blog__image__2" src={pic4} alt="Fourth slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="blog__image__2" src={pic5} alt="Fifth slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage2;
