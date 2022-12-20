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
import  DocsCallout  from '../Analytics/DocsCallout.js'
import UserSidenav from './UserSidenav';
const PlatformStats = () => {
  const random = () => Math.round(Math.random() * 50)+1
  const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
    <UserSidenav/>
    <Container style={{marginLeft:"6.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <CCol xs={11}>
       <br />
      
         <DocsCallout
           name="Chart"
           href="components/chart"
           content="Domain Specific Stats graph gives us insights about each platform and the domain they focuses on.
           Spontanity referes to the frequency of amount of events posted on different platforms.
           "
         /><br />
 
       </CCol>
      <div className="body flex-grow-1 px-3">
      <CRow >
        
        <CCol xs={5}>
         <CCard className="mb-3">
           <CCardHeader>Domain Specific Stats</CCardHeader>
           <CCardBody>
             <CChartRadar
               data={{
                 labels: ['Competetive Programming', 'Development', 'Interview Problems', 'Data Strcture', 'Algorithm', 'Core CS ', 'Logical & Analytical Thinking','Hiring CHallanges'],   
                 datasets: [
                   {
                     label: 'Codeforces',
                     backgroundColor: 'rgba(220, 220, 220, 0.2)',
                     borderColor: 'purple',
                     pointBackgroundColor: 'black',
                     pointBorderColor: 'black',
                     pointHighlightFill: 'black',
                     pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                     data: [75, 59, 40, 41, 56, 55, 40,55],
                   },
                   {
                    label: 'Codechef',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'brown',
                    pointBackgroundColor: 'black',
                    pointBorderColor: 'black',
                    pointHighlightFill: 'black',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 49, 50, 51, 56, 55, 20,33],
                  },
                  {
                    label: 'Leetcode',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'yellow',
                    pointBackgroundColor: 'black',
                    pointBorderColor: 'black',
                    pointHighlightFill: 'black',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [20, 33, 90, 81, 76, 45, 50,88],
                  },
                  {
                    label: 'Hackerrank',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'lightgreen',
                    pointBackgroundColor: 'black',
                    pointBorderColor: 'black',
                    pointHighlightFill: 'black',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [25, 29, 40, 51, 56, 59, 40,58],
                  },
                  {
                    label: 'Hackerearth',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'skyblue',
                    pointBackgroundColor: 'black',
                    pointBorderColor: 'black',
                    pointHighlightFill: 'black',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [25, 29, 83, 81, 66, 45, 50,92],
                  },

                   {
                     label: 'CSES',
                     backgroundColor: 'rgba(151, 187, 205, 0.2)',
                     borderColor: 'pink',
                     pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                     pointBorderColor: 'black',
                     pointHighlightFill: 'black',
                     pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                     data: [25, 69, 90, 81, 46, 45, 10,66],
                   },
                 ],
               }}
             />
              <Link to="/domainspecific"><p>Depth Analysis</p></Link>
           </CCardBody>
         </CCard>
       </CCol>
     
    <CCol  xs={6}>
         <CCard style={{height:"14cm"}} className="mb-4">
           <CCardHeader>Spontanity</CCardHeader>
           <CCardBody>
             <CChartLine
               data={{
                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                 datasets: [
                   {
                     label: 'Codeforces',
                     backgroundColor: 'purple',
                     borderColor: 'purple',
                     pointBackgroundColor: 'purple',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Codechef',
                     backgroundColor: 'brown',
                     borderColor: 'brown',
                     pointBackgroundColor: 'brown',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Leetcode',
                     backgroundColor: 'yellow',
                     borderColor: 'yellow',
                     pointBackgroundColor: 'yellow',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Atcoder',
                     backgroundColor: 'red',
                     borderColor: 'red',
                     pointBackgroundColor: 'red',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },{
                     label: 'Hackerrank',
                     backgroundColor: 'lightgreen',
                     borderColor: 'lightgreen',
                     pointBackgroundColor: 'lightgreen',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Hackerearth',
                     backgroundColor: 'skyblue',
                     borderColor: 'skyblue',
                     pointBackgroundColor: 'skyblue',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'CSES',
                     backgroundColor: 'pink',
                     borderColor: 'pink',
                     pointBackgroundColor: 'pink',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                 ],
               }}
             />
              <Link to="/spontanity"><p>Depth Analysis</p></Link>
           </CCardBody>
         </CCard>
       </CCol>
       </CRow>
      </div>
    </Container>
  </div>
  )
}

export default PlatformStats