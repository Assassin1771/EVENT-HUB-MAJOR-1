import React from 'react'
import {Container, Paper} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import "./PlatformActivity.css"
import  DocsCallout  from '../Analytics/DocsCallout.js'
import UserSidenav from './UserSidenav';
const PlatformActivity = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div class="ddd">
    <UserSidenav/>
    <Container style={{marginLeft:"6.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <br/>
<br/>   
      <div className="body flex-grow-1 px-3">
      <CRow >
     <Container style={{marginLeft:"5cm", width:"17cm"}}>
  <CCard  className="card">
    <div  className="card-header bg-primary">
      <h5 className="card-title text-white mt-2" id="exampleModalLabel">Feedback Form</h5>
    </div><br/>
    <div className="modal-body">
      <div className="text-center">
       
        <p>
          <strong>Your opinion matters</strong>
        </p>
        <p>
          Have some ideas how to improve our product? 
          <strong> Give us your feedback.</strong>
        </p>
      </div>
      <hr />
      <form className="px-4" action>
        <p className="text-center"><strong>Your rating:</strong></p>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
          <label class="vvv"  htmlFor="radio3Example1">
            Very good
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
          <label class="vvv" htmlFor="radio3Example2">
            Good
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
          <label class="vvv" htmlFor="radio3Example3">
            Medicore
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
          <label class="vvv" htmlFor="radio3Example4">
            Bad
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
          <label class="vvv" htmlFor="radio3Example5">
            Very bad
          </label>
        </div>
        <p className="text-center"><strong>What could we improve?</strong></p>
        {/* Message input */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} /><br/>
          {/* <label className="form-label" htmlFor="form4Example3">Your feedback</label> */}
        </div>
      </form>
    </div>
    <div className="card-footer text-end">
      <Link to="/"><button type="button" className="btn btn-primary">Submit</button></Link>
    </div>
  </CCard>
</Container>


       </CRow>
      </div>
    </Container>
  </div>
  )
}

export default PlatformActivity