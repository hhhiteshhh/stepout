import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import pic1 from "./images/CZ1.png"
import pic2 from "./images/CZ2.png"
import pic3 from "./images/CZ3.png"
import pic4 from "./images/CZ4.png"
import "./slideFeature.css"

const CarouselPage = () => {
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
              <img
                className="home__image"
                src={pic1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="home__image"
                src={pic2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="home__image"
                src={pic3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="home__image"
                src={pic4}
                alt="Fourth slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

 export default CarouselPage;