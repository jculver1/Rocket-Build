import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <div>
            <MDBFooter className="font-small pt-4 staticColor mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Contact Us</h5>
                            <ul>
                                <li className="list-unstyled">
                                    Hours of Operation: 7 a.m - 6 p.m daily
                </li>
                                <li className="list-unstyled">
                                    Address: 5000 East Alameda Avenue, Denver, Colorado 80249
                </li>
                                <li className="list-unstyled">
                                    Phone: (303)338-7012
                </li>
                                <li className="list-unstyled">
                                    <a href="edwards@augustanadenver.org">Email: edwards@augustanadenver.org</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Accreditation</h5>
                            <img className="accreditation" src="ECADAlogo.gif " alt="accreditation" height="100" width="100" />
                            <img className="accreditation" src="COShines_Accreditation.png" alt="accreditation" height="80" width="250" />
                            <img className="accreditation" src="COShines_Program Quality Rating_4 Diamonds.png" alt="accreditation" height="80" width="250" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        </div>
    );
}

export default FooterPage;

