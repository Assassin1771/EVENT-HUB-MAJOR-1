import React from 'react'
import {Container, Paper} from "@material-ui/core";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import  DocsCallout  from '../Analytics/DocsCallout.js'
import { Link } from 'react-router-dom';
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
const MostViewedPlatform = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <Container  style={{marginLeft:"6cm",marginTop:"1cm"}}>
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
    </Container>
   
  )
}

export default MostViewedPlatform