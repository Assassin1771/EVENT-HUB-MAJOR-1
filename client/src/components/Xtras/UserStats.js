import React ,{useState} from 'react'
import { CCollapse ,CBadge} from '@coreui/react'
import { CSmartTable } from '@coreui/react-pro'


import Sidenav from './Sidenav.js'

import './UserStats.css'

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

  import { CCallout, CLink } from '@coreui/react'
  import  DocsCallout  from '../Analytics/DocsCallout.js'
  import '../Analytics/Analytics.css'











const UserStats = () => {
    const [details, setDetails] = useState([])
    const columns = [
      {
        key: 'name',
        _style: { width: '40%' },
        _props: { color: 'primary', className: 'fw-semibold' },
      },
      'Visit',
      { key: 'role', filter: false, sorter: false, _style: { width: '10%' } },
      { key: 'status', _style: { width: '20%' } },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
        _props: { color: 'primary', className: 'fw-semibold' },
      },
    ]
    const usersData = [
      { id: 0, name: 'Abhishek', Visit: '2022/01/01', role: 'Guest', status: 'Active' },
      {
        id: 1,
        name: 'Abhinav',
        Visit: '2022/01/01',
        role: 'Member',
        status: 'Banned',
        _props: { color: 'primary', align: 'middle' },
      },
      {
        id: 2,
        name: 'Shreya',
        Visit: '2022/02/07',
        role: 'Member',
        status: 'Active',
        _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      },
      {
        id: 22,
        name: 'Abhishek Thakur',
        Visit: '2022/02/07',
        role: 'Member',
        status: 'Active',
        _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      },
      { id: 3, name: 'Kartike', Visit: '2022/02/07', role: 'Admin', status: 'Active' },
      {
        id: 4,
        name: 'Tushar',
        Visit: '2022/03/19',
        role: 'Admin',
        status: 'Active',
      },
      { id: 5, name: 'Riya', Visit: '2022/01/21', role: 'Admin', status: 'Active' },
      { id: 6, name: 'Yogi', Visit: '2022/01/01', role: 'Guest', status: 'Active' },
      {
        id: 7,
        name: 'Shwetank',
        Visit: '2022/02/07',
        role: 'Member',
        status: 'Banned',
        _props: { color: 'warning', align: 'middle' },
      },
      { id: 8, name: 'Ishaan', Visit: '2022/02/07', role: 'Member', status: 'Inactive' },
      { id: 9, name: 'Lakshay', Visit: '2022/03/19', role: 'Member', status: 'Pending' },
      { id: 10, name: 'Varun Mittal', Visit: '2022/01/21', role: 'Member', status: 'Active' },
      { id: 11, name: 'Radhey', Visit: '2022/01/01', role: 'Member', status: 'Active' },
      { id: 12, name: 'Anushka', Visit: '2022/02/07', role: 'Member', status: 'Banned' },
      { id: 13, name: 'Om', Visit: '2022/02/07', role: 'Member', status: 'Inactive' },
      {
        id: 14,
        name: 'Ajay',
        Visit: '2022/03/19',
        role: 'Member',
        status: 'Pending',
      },
      { id: 15, name: 'Ayush', Visit: '2022/01/21', role: 'Member', status: 'Active' },
      { id: 16, name: 'Priya', Visit: '2022/01/01', role: 'Guest', status: 'Active' },
      { id: 17, name: 'Parul', Visit: '2022/02/07', role: 'Member', status: 'Banned' },
      {
        id: 18,
        name: 'Manan',
        Visit: '2022/02/07',
        role: 'Guest',
        status: 'Inactive',
      },
      {
        id: 19,
        name: 'Ganesha ',
        Visit: '2022/03/19',
        role: 'Member',
        status: 'Pending',
      },
      { id: 20, name: 'Hritesh', Visit: '2022/01/21', role: 'Member', status: 'Active' },
      { id: 21, name: 'Vishnu ', Visit: '2022/01/01', role: 'Member', status: 'Active' },
      
    ]
    const getBadge = (status) => {
      switch (status) {
        case 'Active':
          return 'success'
        case 'Inactive':
          return 'secondary'
        case 'Pending':
          return 'warning'
        case 'Banned':
          return 'danger'
        default:
          return 'primary'
      }
    }
    const toggleDetails = (index) => {
      const position = details.indexOf(index)
      let newDetails = details.slice()
      if (position !== -1) {
        newDetails.splice(position, 1)
      } else {
        newDetails = [...details, index]
      }
      setDetails(newDetails)
    }

  return (
<div class="new4">
<Sidenav/>
<Container style={{marginLeft:"6.5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
    <CCol xs={11}>
       <br />
      
         <br />
 
       </CCol>   
   <div  className="body flex-grow-1 px-3">
   <CCard  style={{width:"30cm"}} className="mb-4">
 <CSmartTable 
    activePage={3}
    cleaner
    clickableRows
    columns={columns}
    columnFilter
    columnSorter
    footer
    items={usersData}
    itemsPerPageSelect
    itemsPerPage={5}
    pagination
    scopedColumns={{
      status: (item) => (
        <td>
          <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
        </td>
      ),
      show_details: (item) => {
        return (
          <td className="py-2">
            <CButton
              color="primary"
              variant="outline"
              shape="square"
              size="sm"
              onClick={() => {
                toggleDetails(item._id)
              }}
            >
              {details.includes(item._id) ? 'Hide' : 'Show'}
            </CButton>
          </td>
        )
      },
      details: (item) => {
        return (
          <CCollapse visible={details.includes(item._id)}>
            <CCardBody>
              <h4>{item.username}</h4>
              <p style={{color:'black'}} >User since: {item.Visit}</p>
            </CCardBody>
          </CCollapse>
        )
      },
    }}
    selectable
    sorterValue={{ column: 'name', state: 'asc' }}
    tableFilter
    tableHeadProps={{
      color: 'danger',
    }}
    tableProps={{
      striped: true,
      hover: true,
    }}
  />
  </CCard>
   
   </div>
 </Container>


  </div>
  )
}

export default UserStats