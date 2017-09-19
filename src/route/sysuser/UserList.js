import React from 'react';
import {Table} from 'antd';

const columns = [{
  title: "姓名",
  dataIndex: "name",
}, {
  title: "手机号码",
  dataIndex: "phoneNo",
}, {
  title: "备注",
  dataIndex: "note",
}];

const rowKey = (record) => {
  return record.id;
};

class UserList extends React.Component {
  constructor(props) {
    super(props);

    console.log('[DEBUG] ---> UserList constructor, props: ', this.props);

    this.rowSelection = {
      type: 'radio',
      onSelect: this.props.updateUserSelection
    };

    console.log('[DEBUG] ---> UserList constructor, this: ', this);
  }

  render() {
    console.log('[DEBUG] ---> UserList render, props: ', this.props);
    let {users} = this.props;

    console.log('[DEBUG] ---> UserList this: ', this);

    return (
      <div>
        <Table size="small" bordered
               columns={columns} dataSource={users}
               rowKey={rowKey} rowSelection={this.rowSelection}
        />
      </div>
    );
  }
}

export default UserList;
