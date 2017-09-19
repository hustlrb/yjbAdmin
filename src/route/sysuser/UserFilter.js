import React from 'react';
import {Col, Input, Button} from 'antd';

const UserFilter = (props) => {
  return (
    <div style={{display: "flex", paddingBottom: "8px"}}>
      <Col span="8" style={{display: "flex"}}><label style={{display: "inline-block", whiteSpace: "nowrap"}}>姓名</label><Input maxLength="25" /></Col>
      <Col span="8" style={{display: "flex"}}><label style={{display: "inline-block", whiteSpace: "nowrap"}}>手机号码</label><Input /></Col>
      <Button style={{marginLeft: "auto"}}>查询</Button>
      <Button>重置</Button>
    </div>
  );
};

export default UserFilter;
