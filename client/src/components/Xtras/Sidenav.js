import React from 'react'

import navigation from '../_nav.js'


import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import 'simplebar-react/dist/simplebar.min.css';

import CIcon from '@coreui/icons-react'
import SimpleBar from 'simplebar-react'
import { useSelector, useDispatch } from 'react-redux'

import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";


import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Icon, {
  EllipsisOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Sidenav.css";




const Sidenav = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)
   

  return (
    
   <div id="sidebar-wrapper">
  <ul className="sidebar-nav" style={{marginLeft: 0}}>
    <li className="sidebar-brand">
      <a href="/analytics" id="menu-toggle" style={{marginTop: 20, float: 'right'}}>STATISTICS <i className="fa fa-bars " style={{fontSize: '20px !Important'}} aria-hidden="true" /> 
      </a></li><a href="#menu-toggle" id="menu-toggle" style={{marginTop: 20, float: 'right'}}>
    </a><li><a href="#menu-toggle" id="menu-toggle" style={{marginTop: 20, float: 'right'}}>
      </a><a href="/admin"><i className="fa fa-sort-alpha-asc " aria-hidden="true"> </i> <span style={{marginLeft: 10}}>Stats</span></a>
    </li>
    <li>
      <a href="/userstats"> <i className="fa fa-play-circle-o " aria-hidden="true"> </i> <span style={{marginLeft: 10}}> User Stats</span> </a>
    </li>
 
    <li>
      <a href="#"> <i className="fa fa-comment-o" aria-hidden="true"> </i> <span style={{marginLeft: 10}}> Section</span> </a>
    </li>
  </ul>
</div>


  
  )
}


export default Sidenav