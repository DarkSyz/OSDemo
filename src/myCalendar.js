import React, { Component } from 'react';
import { Checkbox, Badge, Button, Card, Table, Pagination, Menu, Link, Icon } from 'antd';
import moment from 'moment';
import Calendar from 'rc-calendar';
import FullCalendar from 'rc-calendar/lib/FullCalendar.js';
import 'rc-calendar/assets/index.css';

export default class MyCalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment()
    }
  }
  zerofixed(v) {
    if (v < 10) {
      return `0${v}`;
    }
    return `${v}`;
  }
  dateCellRender = (value) => {
    return (
      <div className='rc-calendar-date'>
        <Badge dot={value.date() === moment().date()}>{this.zerofixed(value.date())}</Badge>
      </div>
    );
  }
  render() {
    let columns = [
      {
        title: 'Period',
        dataIndex: 'period',
        key: 'period',
        width: 150
      },
      {
        title: 'Reserved By',
        dataIndex: 'reservedBy',
        key: 'reservedBy',
        render: (text, record) => <a href={`mailto:${record.mailto}`}>{text}</a>,
        width: 150
      },
      {
        title: 'OS Tag',
        dataIndex: 'OSTag',
        key: 'OSTag',
        render: text => <a href='#'>{text}</a>,
        width: 150
      },
      {
        title: 'System Nick Name',
        dataIndex: 'systemNickName',
        key: 'systemNickName',
        width: 150
      },
      {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
        width: 300
      },
    ];
    let dataSource = [
      {
        period: 'All-day',
        reservedBy: 'Speh Christoph',
        mailto: 'ben.chen@perkinelmer.com',
        OSTag: '99900011',
        systemNickName: '00011',
        comments: 'Allday expeiment'
      },
      {
        period: '9:00AM - 11:00AM',
        reservedBy: 'Ben Chen',
        mailto: 'ben.chen@perkinelmer.com',
        OSTag: '99960564',
        systemNickName: '60564',
        comments: 'expeiment'
      },
      {
        period: '2:00PM - 4:00PM',
        reservedBy: 'Ben Chen',
        mailto: 'ben.chen@perkinelmer.com',
        OSTag: '99960564',
        systemNickName: '60564',
        comments: 'expeiment'
      },
      {
        period: '[start time] - [end time]',
        reservedBy: '[someone]',
        mailto: 'ben.chen@perkinelmer.com',
        OSTag: '[tag number]',
        systemNickName: '[system nick name]',
        comments: '[Comments, at most 200 characters]'
      },
    ]

    return (
      <div style={{ display: 'flex', justifyContent: '1 1 auto', height: '100%' }}>

        <div>
          <Menu defaultSelectedKeys={['Calendar']} mode="vertical">
            <Menu.Item key="Calendar"><Icon type='calendar' />Calendar</Menu.Item>
            <Menu.Item key="Favorites"><Icon type='heart-o' />Favorites</Menu.Item>
          </Menu>
        </div>

        <div>
          <Calendar
            showDateInput={false}
            Select={() => null}
            showToday={false}
            onSelect={date => this.setState({ currentDate: date })}
          />
          <Card title='Location'>
            <div style={{display:'flex', flexDirection:'column'}}>
              <Checkbox>BOSTOM</Checkbox>
              <Checkbox defaultChecked>DEMO1</Checkbox>
              <Checkbox>DEMO10</Checkbox>
              <Checkbox>DEMO11</Checkbox>
              <Checkbox>DEMO12</Checkbox>
              <Checkbox>DEMO2</Checkbox>
              <Checkbox>DEMO3</Checkbox>
              <Checkbox>DEMO4</Checkbox>
              <Checkbox>DEMO5</Checkbox>
              <Checkbox>DEMO6</Checkbox>
              <Checkbox>DEMO7</Checkbox>
              <Checkbox>DEMO8</Checkbox>                            
              <Checkbox>DEMO9</Checkbox>                            
            </div>
          </Card>
        </div>
        {/*   

        <div style={{ margin: 24, border: '1px solid #d9d9d9', borderRadius: 4 }} >
          <FullCalendar
            showHeader={false}
            Select={() => null}
            dateCellRender={this.dateCellRender}
            onSelect={date => this.setState({ currentDate: date })}
          />
        </div>
*/}
        <Card title='Scheduled'>
          <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 10 }} />
        </Card>

      </div>
    );
  }
};

