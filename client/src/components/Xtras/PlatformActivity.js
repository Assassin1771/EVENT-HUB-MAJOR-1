import React from 'react'
import {Container, Paper} from "@material-ui/core";
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
import  DocsCallout  from '../Analytics/DocsCallout.js'
import UserSidenav from './UserSidenav';
const PlatformActivity = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
    <UserSidenav/>
    <div  className="wrapper d-flex flex-column min-vh-100 ">
   
      <div style={{marginTop:"-113cm"}} className="body flex-grow-1 px-3">
      <CRow >
      <CRow>
      <CCol xs={12}>
       <br />
      
         <DocsCallout
           name="Chart"
           href="components/chart"
           content="Content Goes Here"
         /><br />
 
       </CCol>
       <CCol xs={8}>
         <CCard className="mb-4">
           <CCardHeader>Site Traffic </CCardHeader>
           <CCardBody>
             <CChartBar
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'AtCoder', 'Hackerrank', 'Hackerearth', 'CSES'],
                 datasets: [
                   {
                     label: 'Events',
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     data:[random(), random(), random(), random(), random(), random(), random()],
                   },
                  
                 ],
               }}
               labels="CodingPlatform"
             />
           </CCardBody>
         </CCard>
       </CCol>
  
       <CCol xs={8}>
         <CCard className="mb-4">
           <CCardHeader>Topic Specific Stats</CCardHeader>
           <CCardBody>
             <CChartDoughnut
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'AtCoder', 'Hackerrank', 'Hackerearth', 'CSES'],
              datasets: [
                   {
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     data: [55, 45, 67, 78, 20, 11, 69],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       </CRow>
       </CRow>
      </div>
    </div>
  </div>
  )
}

export default PlatformActivity