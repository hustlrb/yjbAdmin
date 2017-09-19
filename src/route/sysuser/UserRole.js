import React from 'react';
import {Checkbox} from 'antd';
import style from './UserRole.module.scss';

const UserRole = (props) => {
  const {id, roles} = props;
  const kRoles = ['平台管理员', '服务点管理员', '服务点投资人', '服务单位'];

  console.log('[DEBUG] ---> UserRole props: ', props);
  return (
    <div className={style.UserRole}>
      <Checkbox.Group options={kRoles} value={roles} disabled={id === -1} />
    </div>
  );
};

export default UserRole;
