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


  import { CCollapse ,CBadge} from '@coreui/react'
  import { CSmartTable } from '@coreui/react-pro'


const AdminStats = () => {
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
   <div style={{marginTop:"1cm",marginLeft:"5cm"}}  >
   <Container><br/>
   
   <CRow>
       <CCol sm={6} lg={3}>
         <CWidgetStatsA
           className="mb-4"
           color="primary"
           value={
             <>
               26{' '}
               <span className="fs-6 fw-normal">
                 (+2.4% <CIcon icon={cilArrowBottom} />)
               </span>
             </>
           }
           title="Visited Users"
         
           chart={
             <CChartLine
               className="mt-3 mx-3"
               style={{ height: '70px' }}
               data={{
                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                 datasets: [
                   {
                     label: 'Users',
                     backgroundColor: 'transparent',
                     borderColor: 'rgba(255,255,255,.55)',
                     pointBackgroundColor: getStyle('--cui-primary'),
                     data: [1, 18, 9, 17, 34, 22, 11],
                   },
                 ],
               }}
               options={{
                 plugins: {
                   legend: {
                     display: false,
                   },
                 },
                 maintainAspectRatio: false,
                 scales: {
                   x: {
                     grid: {
                       display: false,
                       drawBorder: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                   y: {
                     min: -33,
                     max: 39,
                     display: false,
                     grid: {
                       display: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                 },
                 elements: {
                   line: {
                     borderWidth: 1,
                     tension: 0.1,
                   },
                   point: {
                     radius: 4,
                     hitRadius: 10,
                     hoverRadius: 4,
                   },
                 },
               }}
             />
           }
         />
       </CCol>
       <CCol sm={6} lg={3}>
         <CWidgetStatsA
           className="mb-4"
           color="info"
           value={
             <>
               20{' '}
               <span className="fs-6 fw-normal">
                 (4.9% <CIcon icon={cilArrowTop} />)
               </span>
             </>
           }
           title="Registered Users"
          
           chart={
             <CChartLine
               className="mt-3 mx-3"
               style={{ height: '70px' ,color:"whitesmoke"}}
               data={{
                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                 datasets: [
                   {
                     label: 'Users',
                     backgroundColor: 'transparent',
                     borderColor: 'rgba(255,255,255,.55)',
                     pointBackgroundColor: getStyle('--cui-info'),
                     data: [6, 18, 19, 17, 13, 22, 25],
                   },
                 ],
               }}
               options={{
                 plugins: {
                   legend: {
                     display: false,
                   },
                 },
                 maintainAspectRatio: false,
                 scales: {
                   x: {
                     grid: {
                       display: false,
                       drawBorder: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                   y: {
                     min: -9,
                     max: 39,
                     display: false,
                     grid: {
                       display: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                 },
                 elements: {
                   line: {
                     borderWidth: 1,
                   },
                   point: {
                     radius: 4,
                     hitRadius: 10,
                     hoverRadius: 4,
                   },
                 },
               }}
             />
           }
         />
       </CCol>
       <CCol sm={6} lg={3}>
         <CWidgetStatsA
           className="mb-4"
           color="warning"
           value={
             <>
               2.49{' '}
               <span className="fs-6 fw-normal">
                 (84.7% <CIcon icon={cilArrowTop} />)
               </span>
             </>
           }
           title="Conversion Rate"
          
           chart={
             <CChartLine
               className="mt-3"
               style={{ height: '70px' }}
               data={{
                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                 datasets: [
                   {
                     label: 'Users',
                     backgroundColor: 'rgba(255,255,255,.2)',
                     borderColor: 'rgba(255,255,255,.55)',
                     data: [78, 81, 80, 45, 34, 12, 40],
                     fill: true,
                   },
                 ],
               }}
               options={{
                 plugins: {
                   legend: {
                     display: false,
                   },
                 },
                 maintainAspectRatio: false,
                 scales: {
                   x: {
                     display: false,
                   },
                   y: {
                     display: false,
                   },
                 },
                 elements: {
                   line: {
                     borderWidth: 2,
                     tension: 0.4,
                   },
                   point: {
                     radius: 0,
                     hitRadius: 10,
                     hoverRadius: 4,
                   },
                 },
               }}
             />
           }
         />
       </CCol>
       <CCol sm={6} lg={3}>
         <CWidgetStatsA
           className="mb-4"
           color="danger"
           value={
             <>
               44K{' '}
               <span className="fs-6 fw-normal">
                 (-23.6% <CIcon icon={cilArrowBottom} />)
               </span>
             </>
           }
           title="Sessions"
         
           chart={
             <CChartBar
               className="mt-3 mx-3"
               style={{ height: '70px' }}
               data={{
                 labels: [
                   'January',
                   'February',
                   'March',
                   'April',
                   'May',
                   'June',
                   'July',
                   'August',
                   'September',
                   'October',
                   'November',
                   'December',
                   
                 ],
                 datasets: [
                   {
                     label: 'Users',
                     backgroundColor: 'rgba(255,255,255,.2)',
                     borderColor: 'rgba(255,255,255,.55)',
                     data: [randomise(23,25), 81, randomise(13,19), 45, 34, randomise(9,19), 40, 85, randomise(20,22), 23, randomise(26,32), 98, 34, 84, 67, 82],
                     barPercentage: 0.6,
                   },
                 ],
               }}
               options={{
                 maintainAspectRatio: false,
                 plugins: {
                   legend: {
                     display: false,
                   },
                 },
                 scales: {
                   x: {
                     grid: {
                       display: false,
                       drawTicks: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                   y: {
                     grid: {
                       display: false,
                       drawBorder: false,
                       drawTicks: false,
                     },
                     ticks: {
                       display: false,
                     },
                   },
                 },
               }}
             />
           }
         />
       </CCol>
     </CRow><br/><br/>
     <CCardBody>
           <CRow>
             <CCol sm={5}>
               <h4 id="traffic" className="card-title mb-0" style={{color:"white"}}>
                 Traffic
               </h4>
               <div style={{color:"white"}}>January - Nov 2022</div>
             </CCol>
             <CCol sm={7} className="d-none d-md-block">
               <CButton color="primary" className="float-end">
                 <CIcon icon={cilCloudDownload} />
               </CButton>
          
             </CCol>
           </CRow>
           <CChartLine
             style={{ height: '300px', marginTop: '40px' ,color:"white"}}
             data={{
               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
               'September',
               'October',
               'November',
               'December',],
               datasets: [
                 {
                   label: 'Users',
                   backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                   borderColor: getStyle('--cui-info'),
                   pointHoverBackgroundColor: getStyle('--cui-info'),
                   borderWidth: 2,
                   data: [
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                   ],
                   fill: true,
                 },
                 {
                   label: 'My Second dataset',
                   backgroundColor: 'transparent',
                   borderColor: getStyle('--cui-success'),
                   pointHoverBackgroundColor: getStyle('--cui-success'),
                   borderWidth: 2,
                   data: [
                     random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                    random(),
                   ],
                 },
                 {
                   label: 'My Third dataset',
                   backgroundColor: 'transparent',
                   borderColor: getStyle('--cui-danger'),
                   pointHoverBackgroundColor: getStyle('--cui-danger'),
                   borderWidth: 1,
                   borderDash: [8, 5],
                   data: [65, 65, 65, 65, 65, 65, 65,65, 65, 65, 65,65],
                 },
               ],
             }}
             options={{
               maintainAspectRatio: false,
               plugins: {
                 legend: {
                   display: false,
                 },
               },
               scales: {
                 x: {
                   grid: {
                     drawOnChartArea: true,
                   },
                   title: {
                     display: true,
                     text: 'Month',
                     color:"white",
                     
 
                   }
                 },
                 y: {
                   ticks: {
                     beginAtZero: true,
                     maxTicksLimit: 5,
                     stepSize: Math.ceil(250 / 5),
                     max: 250,
                   },
                   title: {
                     display: true,
                     text: 'Users',
                     color:"white"
                   }
                 },
                
               },
               elements: {
                 line: {
                   tension: .4,
                 },
                 point: {
                   radius: 0,
                   hitRadius: 10,
                   hoverRadius: 4,
                   hoverBorderWidth: 3,
                 },
               },
             }}
           />
         </CCardBody>
         <CCardFooter>
           <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center" style={{color:"whitesmoke"}}>
             {progressExample.map((item, index) => (
               <CCol className="mb-sm-2 mb-0" key={index}>
                 <div style={{color:"whitesmoke"}}>{item.title}</div>
                 <strong style={{color:"gray"}}>
                   {item.value} ({item.percent}%)
                 </strong>
                 <CProgress thin className="mt-2" color={item.color} value={item.percent} />
               </CCol>
             ))}
           </CRow>
         </CCardFooter>
   </Container>
 </div>
    </div>
  )
}

export default AdminStats;