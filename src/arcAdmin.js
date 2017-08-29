import React, { Component } from 'react';
import { Row, Col, Transfer, Input, Tabs, Radio, Checkbox, Button, Card, Table, Pagination, Menu, Link, Icon, Select } from 'antd';
import './App.css';

const Option = Select.Option;
const TabPane = Tabs.TabPane;

export default class ARCAdminComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{width:'50%', margin: 24}}>
        <div style={{marginBottom: 24 }}><span style={{marginRight: 8 }}>Customer: </span>
          <Select style={{ width: 200 }}>
            <Option value='demo'>Demo US Company</Option>
            <Option value='demo3'>J&J</Option>
            <Option value='demo2'>GSK</Option>
            <Option value='demo1'>Sanofi</Option>
          </Select>
        </div>
        <Tabs>
          <TabPane tab='General' key='1'>
            <Row type='flex' style={{marginBottom: 16 }}>
              <Col span={6}>Process Name:</Col>
              <Col span={12}><Input/></Col>
            </Row>
            <Row type='flex'style={{marginBottom: 24 }}>
            <Col span={6}>Notes:</Col>
            <Col span={12}><Input.TextArea rows={4} /></Col>
          </Row>
          <Row type='flex'>
          <Card title={<Checkbox>Automatic SAP Syncs</Checkbox>}>
              <Checkbox>Department</Checkbox>
              <Checkbox>Building</Checkbox>
              <Checkbox>Floor</Checkbox>
              <Checkbox>Room</Checkbox>
            </Card>
            </Row>
          </TabPane>
          <TabPane tab='Status' key='2'>
            <div>Open</div>
            <div><Input   style={{ width: 200 }}/><Radio>internal</Radio><Radio>external</Radio><Radio>Both</Radio><Button>Linked Groups</Button></div>
            <div><Input   style={{ width: 200 }}/><Radio>internal</Radio><Radio>external</Radio><Radio>Both</Radio><Button>Linked Groups</Button></div>
            <div><Button>Add</Button></div>
            <div>Complete</div>
          </TabPane>
          <TabPane tab='Groups' key='3'>
          </TabPane>
          <TabPane tab='Attachment Templates' key='4'>
          </TabPane>
          <TabPane tab='Misc' key='5'>
          </TabPane>
        </Tabs>
      </div>
    );
  }
};

