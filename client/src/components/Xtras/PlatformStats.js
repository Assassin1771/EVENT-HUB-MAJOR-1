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
const PlatformStats = () => {
  const random = () => Math.round(Math.random() * 50)+1
  const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
    <UserSidenav/>
    <div  className="wrapper d-flex flex-column min-vh-100 ">
   
      <div style={{marginTop:"-111cm"}} className="body flex-grow-1 px-3">
      <CRow >
      <CCol xs={6}>
         <CCard className="mb-4">
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
                     pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                     pointBorderColor: '#fff',
                     pointHighlightFill: '#fff',
                     pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                     data: [75, 59, 40, 41, 56, 55, 40,55],
                   },
                   {
                    label: 'Codechef',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'brown',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 49, 50, 51, 56, 55, 20,33],
                  },
                  {
                    label: 'Leetcode',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'yellow',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [20, 33, 90, 81, 76, 45, 50,88],
                  },
                  {
                    label: 'Hackerrank',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'lightgreen',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [25, 29, 40, 51, 56, 59, 40,58],
                  },
                  {
                    label: 'Hackerearth',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'skyblue',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [25, 29, 83, 81, 66, 45, 50,92],
                  },

                   {
                     label: 'Coding Ninjas',
                     backgroundColor: 'rgba(151, 187, 205, 0.2)',
                     borderColor: 'pink',
                     pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                     pointBorderColor: '#fff',
                     pointHighlightFill: '#fff',
                     pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                     data: [25, 69, 90, 81, 46, 45, 10,66],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <span >
    <CCol sm={6}>
         <CCard className="mb-4">
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
           </CCardBody>
         </CCard>
       </CCol>
    </span>
       </CRow>
      </div>
    </div>
  </div>
  )
}

export default PlatformStats