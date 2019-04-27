import React, { Component } from "react";


const SENDGRID_API_KEY='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';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'jculver1900@gmail.com',
  from: 'jculver1900@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

class ParentResources extends Component {
    render(){
        return(
        <div class='container'>
            <div class='row'>
            <div class='col-3'></div>
            <div class='col-6'>
            <h1 class='mb-5'>Parent Resources</h1>
            <a href="html_images.asp">
            <h3 class='mb-4'>Year Enrollment Packet</h3>
            </a>
            <a href="html_images.asp">
            <h3 class='mb-4'>Summer Enrollment Packet</h3>
            </a>
            <h3>Waitlist Registration</h3>
            <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname"/>
            <label for="lname">Child's Name</label>
            <input type="text" id="lname" name="lname"/>
            <label for="lname">Child's Birthday</label>
            <input type="text" id="lname" name="lname"/>
            <label for="lname">Parent/Guardian Information</label>
            <label for="lname">Name</label>
            <input type="text" id="lname" name="lname"/>
            <label for="lname">Relationship</label>
            <input type="text" id="lname" name="lname"/>
            </form>
            </div>
            <div class='col-3'></div>
                    </div>  
                </div>     
  

        )
    }
}

export default ParentResources;

