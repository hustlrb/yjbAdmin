/**
 * Created by yangyang on 2017/6/28.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'
import {requestPosition} from './action'
import {selectLocation, selectDomain} from './selector'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        主内容页面
        <div>
          <Button type="primary" onClick={() => {this.props.requestPosition()}}>获取地理位置</Button>
        </div>
        <div>
          {this.props.location ? this.props.location.address : ""}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: selectLocation(state),
    domain: selectDomain(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestPosition,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)