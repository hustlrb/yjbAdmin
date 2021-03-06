/**
 * Created by yangyang on 2017/9/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Layout,
  Breadcrumb,
  Menu,
  Dropdown,
  Icon,
} from 'antd'
import {Link, Route, withRouter, Switch} from 'react-router-dom'
import ContentRouter from './ContentRouter'
import {fakeAuth} from '../../util/auth'
import SiderMenu from '../../component/SiderMenu'
import style from './style.module.scss'

const {Header, Footer, Sider, Content} = Layout

class Home extends Component {
  constructor(props) {
    super(props)
  }

  userMenuOnClick = ({key}) => {
    let history = this.props.history
    if (key == 'logout') {
      console.log('user logout')
      fakeAuth.signout(() => history.push('/login'))
    }
  }

  renderUserLoginMenu() {
    return (
      <Menu onClick={this.userMenuOnClick}>
        <Menu.Item key="profile">
          个人信息
        </Menu.Item>
        <Menu.Item key="logout">
          注销
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    let {match} = this.props
    return (
      <Layout style={{height: "100%"}}>
        <Sider width={224} className={style.siderMenu}>
          <div className={style.logo}>
            <img src={require('../../asset/image/logo.jpg')} />
            <span>绿蚁网络</span>
          </div>
          <SiderMenu />
        </Sider>
        <Layout className={style.main}>
          <Header className={style.header}>
            <div className={style.headerTitle}>后台管理系统Demo</div>
            <div>
              <Dropdown overlay={this.renderUserLoginMenu()}>
                <a className="ant-dropdown-link" href="#">
                  <Icon type="user" /> username <Icon type="caret-down" />
                </a>
              </Dropdown>
            </div>
          </Header>
          <Content>
            <Breadcrumb className={style.bread}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.container}>
              <div className={style.content}>
                <ContentRouter match={match}/>
              </div>
            </div>
          </Content>
          <Footer className={style.footer}>版权所有 © 长沙绿蚁网络科技有限公司 2017</Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
