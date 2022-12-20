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
const MostLikedPlatform = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <Container  style={{marginLeft:"3cm",marginTop:"2cm"}}> <CCol xs={9}>
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
  </CCol></Container>
   
  )
}

export default MostLikedPlatform