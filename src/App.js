import React, { Component } from 'react';

import onesource_logo from './onesource_logo.svg';
import sanofi_logo from './sanofi_logo.svg';
import notification_icon from './notification.png';
import favorite_icon from './favorite.png';
import logout_icon from './logout.png';
import triangle_icon from './triangle.png';

import './App.css';
import { Menu, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const Logos = (props) =>
  <span className="logobar">
    <img src={onesource_logo} className="logo" />
    <div className="v-separator" />
    <img src={props.customer_logo} className="logo" />
  </span>

const HeadMenuItem = (props) =>
  <span className="header_menu_item">{props.title}<img src={props.icon} className="header_menu_icon" /></span>

class MainMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeys : "welcome"
    }
  }
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={[this.state.selectedKeys]} mode="horizontal" style={{width:"100%", backgroundColor:"#09488a"}}>
        <Menu.Item key="welcome">WELCOME</Menu.Item>
        <Menu.SubMenu key="new-request" title="NEW REQUEST">
          <Menu.Item key="new-request:service-request" style={{backgroundColor:"#09488a"}}>New Service Request</Menu.Item>
          <Menu.Item key="new-request:add-equipment-request" style={{backgroundColor:"#09488a"}}>Add Equipment Request</Menu.Item>
          <Menu.Item key="new-request:change-equipment-request" style={{backgroundColor:"#09488a"}}>Change Equipment Request</Menu.Item>
          <Menu.Item key="new-request:move-equipment-request" style={{backgroundColor:"#09488a"}}>Remove Equipment Request</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="reports" title="REPORTS">
          <Menu.Item key="reports:service-data" style={{backgroundColor:"#09488a"}}>Service Data Report</Menu.Item>
          <Menu.Item key="reports:adc-request" style={{backgroundColor:"#09488a"}}>ARC Request Report</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="program_information">PROGRAM INFORMATION</Menu.Item>
        <Menu.Item key="analytics">ANALYTICS</Menu.Item>
        <Menu.Item key="user_management">USER MANAGEMENT</Menu.Item>
        <Menu.SubMenu key="help" title="?">
          <Menu.Item key="help:web-portal" style={{backgroundColor:"#09488a"}}>OneSource Web Portal</Menu.Item>
          <Menu.Item key="help:dashboard" style={{backgroundColor:"#09488a"}}>OneSource Dashboard</Menu.Item>
          <Menu.Item key="help:mobile-app" style={{backgroundColor:"#09488a"}}>OneSource Mobile App</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="my" title="MY">
          <Menu.Item key="my:favorites" style={{backgroundColor:"#09488a"}}>My Favorites</Menu.Item>
          <Menu.Item key="my:calendar" style={{backgroundColor:"#09488a"}}>My Calendar</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="banner">
          <Logos customer_logo={sanofi_logo} />
          <span className="header_menu">
          {/*}
            <HeadMenuItem title={"Notification"} icon={notification_icon} />
            <HeadMenuItem title={"Favorite"} icon={favorite_icon} />
            */}
            <HeadMenuItem title={"Speh Christoph"} icon={triangle_icon} />
            <HeadMenuItem title={"Logout"} icon={logout_icon} />
          </span>
        </div>
        <MainMenu/>
      </div>
    );
  }
}

export default App;
