import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted bg-black'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {['facebook-f', 'twitter', 'google', 'instagram', 'linkedin', 'github'].map((icon, idx) => (
            <a key={idx} href='#!' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon={icon} />
            </a>
          ))}
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                NextGen Resume
              </h6>
              <p>
                Empowering students and professionals with modern, ATS-optimized resumes for future-ready placements.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Features</h6>
              <p><a href='#!' className='text-reset'>Resume Builder</a></p>
              <p><a href='#!' className='text-reset'>ATS Checker</a></p>
              <p><a href='#!' className='text-reset'>Templates</a></p>
              <p><a href='#!' className='text-reset'>AI Assistant</a></p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p><a href='#!' className='text-reset'>Pricing</a></p>
              <p><a href='#!' className='text-reset'>Profile</a></p>
              <p><a href='#!' className='text-reset'>Support</a></p>
              <p><a href='#!' className='text-reset'>Feedback</a></p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><MDBIcon color='secondary' icon='home' className='me-2' /> Kerala, India</p>
              <p><MDBIcon color='secondary' icon='envelope' className='me-3' /> tharunkrishnachoolikattil@gmail.com</p>
              <p><MDBIcon color='secondary' icon='phone' className='me-3' /> +91 9778585423</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} <strong>NextGen Resume</strong>. All rights reserved.
      </div>
    </MDBFooter>
  );
}
