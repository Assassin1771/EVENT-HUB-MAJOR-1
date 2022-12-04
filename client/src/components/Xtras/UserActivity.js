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
    <div  className="wrapper d-flex flex-column min-vh-100 ">
   
      <div style={{marginTop:"-21cm"}} className="body flex-grow-1 px-3">
      
      </div>
    </div>
  </div>
  )
}

export default UserActivity