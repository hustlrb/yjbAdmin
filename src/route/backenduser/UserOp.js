import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {action, selector} from './redux';
import style from './UserOp.module.scss';

class UserOp extends React.Component {
  constructor(props) {
    super(props);
  }

  onDetail = () => {
    this.props.showUserDetailModal({});
  };

  onCreate = () => {
    this.props.showUserCreateModal({});
  };

  onEdit = () => {

  };

  onDelete = () => {

  };

  onRefresh = () => {

  };

  render() {
    return (
      <div className={style.UserOp}>
        <Button.Group>
          <Button icon="info-circle-o"
                  disabled={this.props.selectedUserIds.length !== 1}
                  onClick={this.onDetail}>
            查看
          </Button>
          <Button icon="plus-circle-o"
                  onClick={this.onCreate}>
            新增
          </Button>
          <Button icon="edit"
                  disabled={this.props.selectedUserIds.length !== 1}
                  onClick={this.onEdit}>
            编辑
          </Button>
          <Button type="danger"
                  icon="minus-circle-o"
                  disabled={this.props.selectedUserIds.length < 1}
                  onClick={this.onDelete}>
            删除
          </Button>
          <Button icon="reload"
                  onClick={this.onRefresh}>
            刷新
          </Button>
        </Button.Group>
      </div>
    );
  }
}

const mapStateToProps = (appState, ownProps) => {
  const selectedUserIds = selector.selectSelectedUserIds(appState);
  const checkedUserRoles = selector.selectCheckedUserRoles(appState);

  return {
    selectedUserIds,
    checkedUserRoles,
  };
};

const mapDispatchToProps = {
  ...action,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOp);
