import React from 'react'
import navigation from '../_nav.js'


import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import 'simplebar-react/dist/simplebar.min.css';

import CIcon from '@coreui/icons-react'
import SimpleBar from 'simplebar-react'
import { useSelector, useDispatch } from 'react-redux'

import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './UserSidenav.css'

import SidebarMenu from 'react-bootstrap-sidebar-menu';

const UserSidenav = () => {

    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
<div class="new7" id="sidebar-wrapper">
  <ul className="sidebar-nav" style={{marginLeft: 0}}>
    <li className="sidebar-brand">
      <a href="/userperforma" id="menu-toggle" style={{marginTop: 20, float: 'right'}}> STATISTICS<i className="fa fa-bars " style={{fontSize: '20px !Important'}} aria-hidden="true" /> 
      </a></li><a href="#menu-toggle" id="menu-toggle" style={{marginTop: 20, float: 'right'}}>
    </a><li><a href="#menu-toggle" id="menu-toggle" style={{marginTop: 20, float: 'right'}}>
      </a><a href="/userperforma"><i className="fa fa-sort-alpha-asc " aria-hidden="true"> </i> <span style={{marginLeft: 10}}>Recommender</span></a>
    </li>
    <li>
      <a href="/platformstats"> <i className="fa fa-play-circle-o " aria-hidden="true"> </i> <span style={{marginLeft: 10}}> Platform Stats</span> </a>
    </li>
    <li>
      <a href="/favourite"> <i className="fa fa-puzzle-piece" aria-hidden="true"> </i> <span style={{marginLeft: 10}}> Favourite Site</span> </a>
    </li>
    {/* <li>
      <a href="/useractivity"> <i className="fa fa-font" aria-hidden="true"> </i> <span style={{marginLeft: 10}}> User Activity</span> </a>
    </li> */}
    <li>
      <a href="/platformactivity"> <i className="fa fa-comment-o" aria-hidden="true"> </i> <span style={{marginLeft: 10}}>Feedback</span> </a>
    </li>
  </ul>
</div>

  )
}

export default UserSidenav