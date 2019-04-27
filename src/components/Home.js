import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const HomePage = () => {
  return (
    <div>
      <div className="row">
        <MDBContainer className="img-fluid container">
          < MDBCarousel
            activeItem={1}
            length={5}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 homeCarousel"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block carouselImage  w-100"
                    src={process.env.PUBLIC_URL + '/bicycleboy.jpg'}
                    alt="First slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">"Light mask"</h3>
                  <p>-Parent</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block carouselImage1 w-100"
                    src={process.env.PUBLIC_URL + '/playground.jpg'}
                    alt="Second slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block carouselImage w-100"
                    src={process.env.PUBLIC_URL + '/tunnelkids.jpg'}
                    alt="Third slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight Mast</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    className="d-block carouselImage1 w-100"
                    src={process.env.PUBLIC_URL + '/frontdoor.jpg'}
                    alt="Fourth slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight Mast</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="5">
                <MDBView>
                  <img
                    className="d-block carouselImage w-100"
                    src={process.env.PUBLIC_URL + '/lunchboysmile.jpg'}
                    alt="Fifth slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight Mast</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel >
        </MDBContainer >
      </div>
      <div className="aboutMe">
        <h1 className="row justify-content-center">About Us</h1>
        <div className="about row">
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center">The Augustana Day Care Center opened its doors on May 1, 1971, fulfilling a long held dream of the congregation's Social Ministry Committee. Since its inception the Center was welcomed children
without regard to faith, culture or ethnicity.</p>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center">Seen as a congregational ministry to the broader community the Center has always had some
spaces available to lower income families, providing assistance for those in need. The goal of the Center has been to provide care for children in a clean, safe,
and nurturing environment that promotes learning and enhances the child's well-being.</p>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center">
            Believing that a balance of good nutrition, adequate rest, and ample opportunity for exploration and learning in developmentally appropriate ways is critical to the child's well-being.</p>
          <div className="col-lg-2"></div>

        </div>

        <div className=" row justify-content-center">
          <button class="btn btn-primary " type="button" data-toggle="collapse" data-target="#mission"
            aria-expanded="false" aria-controls="multiCollapseExample2">Our Mission</button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#vision"
            aria-expanded="false" aria-controls="multiCollapseExample2">Our Vision</button>
        </div>

        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="mission">
              <div class="card card-body">
                Augustana Early Learning Center serves children and their families through high quality, affordable care and education. We welcome children from diverse cultures, faith traditions, socioeconomic backgrounds, and national origins. We provide learning experiences that foster developmentally-appropriate growth to teach children to love themselves and others.
      </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="vision">
              <div class="card card-body">
                Augustana Early Learning Center is a community outreach ministry of Augustana Lutheran Church with a vision to love children and inspire them to become engaged, emotionally-intelligent, and curious learners.
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;