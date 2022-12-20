import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Container, Paper} from "@material-ui/core";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  
  
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CWidgetStatsA,
  } from '@coreui/react'
  import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
  import {
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
  } from '@coreui/react-chartjs'
  import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCardFooter,
    CProgress,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
  } from '@coreui/icons'
  import SchoolIcon from '@material-ui/icons/School';
  import StarIcon from '@material-ui/icons/Star';
  import WorkIcon from '@material-ui/icons/Work';
  import { CCallout, CLink } from '@coreui/react'
  import  DocsCallout  from '../Analytics/DocsCallout.js'
  import '../Analytics/Analytics.css'


  import { CCollapse ,CBadge} from '@coreui/react'
  import { CSmartTable } from '@coreui/react-pro'

  import UserSidenav from './UserSidenav';
const UserActivity = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
    const dispatch = useDispatch()
  return (
    <div>
    <UserSidenav/>
    <Container style={{marginLeft:"6.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <CCol xs={11}>
       <br />
      
         <DocsCallout
           name="Chart"
           href="components/chart"
           content="Content Goes Here"
         /><br />
 
       </CCol>
      <div className="body flex-grow-1 px-3">
      <CRow>
 
 <CCol xs={6}>
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

 <CCol xs={5}>
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
      </div>
    </Container>
  </div>
  )
}

export default UserActivity