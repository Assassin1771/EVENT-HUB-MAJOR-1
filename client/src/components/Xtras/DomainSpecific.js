import React from 'react'
import {Container, Paper} from "@material-ui/core";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import  DocsCallout  from '../Analytics/DocsCallout.js'

import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
const DomainSpecific = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <Container  style={{marginLeft:"3cm",marginTop:"2cm"}}>
        <CCol xs={11}>
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
      </CCardBody>
    </CCard>
  </CCol></Container>
    
  )
}

export default DomainSpecific