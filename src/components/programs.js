import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

class ProgramsPage extends Component {
render(){
return(
    <div>
     <h2 className="h1-responsive font-weight-bold text-center my-5">
          Programs We Offer
    </h2>
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Curriculum</strong>
            </h3>
            <p>
               The Creative Curriculum is a
                comprehensive, research based curriculum that
                features exploration and discovery as a way of
                learning, enabling children to develop confidence,
                creativity and lifelong critical thinking skills.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Outdoor Learning Experience</strong>
            </h3>
            <p>
            Our Fairy Garden
            is natural play learning environment and living
            classroom collaboration with Originative Holistic
            Designs that incorporates tinkering, sustainable
            gardening, wild and domesticated plant taxonomy,
            and bio-sculpture within an emergent science and
            emotional development curriculum.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Music Program</strong>
            </h3>
            <p>
              The Music Together curriculum
            contains weekly music classes that are an artfully
            conceived flow of playful, developmentally
            appropriate activities that include singing,
            movement, finger plays and instrument jams.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    
    </div>
)
}
}

export default ProgramsPage;
