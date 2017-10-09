/**
 * Created by yangyang on 2017/9/11.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from '../../component/Dashboard'
import SysConfig from '../../component/SysConfig'
import {BackendUser} from '../backenduser/'
import StationManager from '../station/StationManage'
import Order, {Recharge} from '../Order'
import Device from '../device'
import InvestorManager from '../station/InvestorManage'
import ShowStation from '../station/ShowStation'
import EditStation from '../station/EditStation'
import AddStation from '../station/AddStation'

const ContentRouter = ({match}) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Dashboard}/>
      <Route exact path="/device/list" component={Device} />
      <Route exact path="/system/user" component={BackendUser} />
      <Route exact path="/site/list" component={StationManager} />
      <Route exact path="/order/list" component={Order} />
      <Route exact path="/order/recharge" component={Recharge} />
      <Route exact path="/site/showStation/:id" component={ShowStation} />
      <Route exact path="/site/editStation/:id" component={EditStation} />
      <Route exact path="/site/addStation" component={AddStation} />
      <Route exact path="/site/investor" component={InvestorManager} />
    </Switch>
  )
}

export default ContentRouter
