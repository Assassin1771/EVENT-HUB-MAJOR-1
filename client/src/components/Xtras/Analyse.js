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
  // import '../Analytics/Analytics.css'
import './Analyse.css'

  import { CCollapse ,CBadge} from '@coreui/react'
  import { CSmartTable } from '@coreui/react-pro'

  import UserSidenav from './UserSidenav';

import './User.scss'

const Analyse = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
    <UserSidenav/>
    <Container class="new6" style={{marginLeft:"6.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <CCol xs={11}>
       <br />
      
         <DocsCallout
           name="Chart"
           href="components/chart"
           content="Graph shows your weakness/ areas you need to work on"
         /><br />
 
       </CCol>
      <Container style={{marginLeft:"2.5cm"}} className="body flex-grow-1 px-3">
      <CCol xs={9}>
         <CCard className="mb-4">
           <CCardHeader>Domain Specific Stats</CCardHeader>
           <CCardBody>
             <CChartRadar
               data={{
                 labels: ['Competetive Programming', 'Development', 'Interview Problems', 'Data Strcture', 'Algorithm', 'Core CS ', 'Logical & Analytical Thinking','Hiring CHallanges'],   
                 datasets: [
                   {
                     label: 'User',
                     backgroundColor: 'rgba(220, 220, 220, 0.2)',
                     borderColor: 'purple',
                     pointBackgroundColor: 'black',
                     pointBorderColor: 'black',
                     pointHighlightFill: 'black',
                     pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                     data: [random(), random(), random(), random(), random(), random(), random(),random()],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
      </Container>
    </Container>
  </div>
  )
}

export default Analyse