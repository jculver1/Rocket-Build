import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const HomePage = () => {
  return (
    <MDBContainer className="col-lg-12  container">
      < MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 ml-none mr-none "
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/bicycleboy.jpg'}
                alt="First slide"
              />
              <MDBMask />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/playground.jpg'}
                alt="Second slide"
              />
              <MDBMask />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/tunnelkids.jpg'}
                alt="Third slide"
              />
              <MDBMask />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel >
    </MDBContainer >
  );
}

export default HomePage;