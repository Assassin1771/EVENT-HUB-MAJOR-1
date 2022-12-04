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
import UserSidenav from './UserSidenav';
const Favourite = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
    <UserSidenav/>
    <div  className="wrapper d-flex flex-column min-vh-100 ">
   
      <div style={{marginTop:"-111cm"}} className="body flex-grow-1 px-3">
      <CRow >
        <CCol xs={7}>
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
           </CCardBody>
         </CCard><br/><br/>
       </CCol>
       <CCol xs={7}>
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
         </CCard>
       </CCol>
       </CRow>
      </div>
    </div>
  </div>

    
        
   
  )
}

export default Favourite