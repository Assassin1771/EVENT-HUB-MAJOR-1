import React from 'react'

import navigation from '../_nav.js'


import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import 'simplebar-react/dist/simplebar.min.css';

import CIcon from '@coreui/icons-react'
import SimpleBar from 'simplebar-react'
import { useSelector, useDispatch } from 'react-redux'

import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Sidenav.css'

import SidebarMenu from 'react-bootstrap-sidebar-menu';




const Sidenav = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    
<div style={{height:"114cm"}} class="sidebar sidebar-show">
  <ul class="sidebar-nav">
    <li class="nav-title">STATISTICS</li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> Stats
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/UserStats">
        <i class="nav-icon cil-speedometer"></i> User Stats
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> Platform Stats
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/timeline">
        <i class="nav-icon cil-speedometer"></i> Timeline
      </a>
    </li>
    
    <li class="nav-item mt-auto">
      <a class="nav-link nav-link-success" href="https://coreui.io">
        <i class="nav-icon cil-cloud-download"></i> Download CoreUI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-danger" href="https://coreui.io/pro/">
        <i class="nav-icon cil-layers"></i> Try CoreUI
        <strong>PRO</strong>
      </a>
    </li>
  </ul>
  {/* <button class="sidebar-toggler" type="button"></button> */}
</div>

  
  )
}

export default Sidenav