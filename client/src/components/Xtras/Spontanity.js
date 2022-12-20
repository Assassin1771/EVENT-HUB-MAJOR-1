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
const Spontanity = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <Container style={{marginLeft:"3cm",marginTop:"2cm"}} >
       
 <CCol xs={11}>
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
    </Container>
   
  )
}

export default Spontanity