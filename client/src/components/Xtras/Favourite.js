import React from 'react'
import {Container, Paper} from "@material-ui/core";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { Link } from 'react-router-dom';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import UserSidenav from './UserSidenav';

import  DocsCallout  from '../Analytics/DocsCallout.js'


const Favourite = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
      <UserSidenav  />
      <Container style={{marginLeft:"8.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <CCol style={{marginLeft:"-2cm"}} xs={11}>
       <br />
      
         <DocsCallout
           name="Chart"
           href="components/chart"
           content="Most Viewed and Most Liked platforms as the name suggests shows a pie chart about which platform was most used and most liked by the users of Event Hub."
         /><br />
 
       </CCol>
   
      <div  className="body flex-grow-1 px-3">
      <CRow >
        <CCol xs={5}>
         <CCard className="mb-4">
           <CCardHeader>Most viewed Platform</CCardHeader>
           <CCardBody>
             <CChartPie
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],   
                 datasets: [
                   {
                     data: [random(), random(), random(), random(), random(), random(), random()],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                   },
                 ],
               }}
             />
             <Link to="mostviewed"><p>Depth Analysis</p></Link>
           </CCardBody>
         </CCard><br/><br/>
       </CCol>
       <CCol xs={5}>
         <CCard className="mb-4">
           <CCardHeader>Most Liked Platform</CCardHeader>
           <CCardBody>
             <CChartPolarArea
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'Hackerearth', 'CSES'],   
                 datasets: [
                   {
                     data: [random(), random(), random(), random(), random(), random(), random()],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                   },
                 ],
               }}
             />
           </CCardBody>
           <Link to="mostliked"><p>Depth Analysis</p></Link>
         </CCard>
       </CCol>
       </CRow>
      </div>
    </Container>
  </div>

    
        
   
  )
}

export default Favourite