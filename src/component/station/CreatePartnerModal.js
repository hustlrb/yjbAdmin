/**
 * Created by lilu on 2017/9/25.
 */

import AV from 'leancloud-storage'
import React, {PropTypes, Component} from 'react'
import {Form, Input, InputNumber, Radio, Modal, Checkbox, Upload, Table, Icon, Button, Select} from 'antd'

//import {checkBox} from '../../common/checkBox'
const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group
const Option = Select.Option
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}
class CreatePartnerModal extends Component {
  constructor(props) {
    super(props)

    // console.log('rednder')
    this.state = {
      color: '#000000',
      pickerOpen: false,
      count: -1,
      visible: false,
      fileList: [],
      imageList: [],
      selectedRowKeys: [],
      selectTags: [],
      tagList: [],
      newTag: ''
    }
  }

  componentWillReceiveProps(newProps) {
  }

  componentDidMount() {
    // console.log('data', this.props.data
  }

  userList() {
    if (this.props.userList && this.props.userList.length > 0) {
      let userList = this.props.userList.map((item, key)=> {
        return <Option key={key} value={item.id}>{item.nickname}</Option>
      })
      return userList
    } else {
      return null
    }
  }

  stationList() {
    if (this.props.stationList && this.props.stationList.length > 0) {
      let stationList = this.props.stationList.map((item, key)=> {
        return <Option key={key} value={item.id}>{item.name}</Option>
      })
      return stationList
    } else {
      return null
    }
  }


  handleOk() {

    this.props.form.validateFields((errors) => {
      if (errors) {
        return
      }
      // console.log('=======>',{...this.props.form.getFieldsValue()})
      let data = this.props.form.getFieldsValue()
      // console.log('data======>',data)
      // let count = this.state.count - 1
      this.props.onOk(data)
    })
  }


  render() {
    return (
      <Modal
        title='新建分成方'
        visible={this.props.modalVisible}
        onOk={()=> {
          this.handleOk()
        }}
        onCancel={()=> {
          this.setState({})
          this.props.onCancel()
        }}
        wrapClassName='vertical-center-modal'
        key={this.props.modalKey}
      >
        <Form layout="horizontal">
          <FormItem label='分成方' hasFeedback {...formItemLayout}>
            {this.props.form.getFieldDecorator('userId', {
              // getValueFromEvent:(e)=>{
              //  let value=this.setTrimValue(e.target.value)
              //  return value
              //},
              rules: [
                {
                  required: true,
                  message: '分成方未选择'
                }
              ]
            })(
              <Select allowClear={true} style={{width: 140}}>
                {this.userList()}
              </Select>
            )}
          </FormItem>
          <FormItem label='分成比例：' hasFeedback {...formItemLayout}>
            {this.props.form.getFieldDecorator('royalty', {
              initialValue: 0,
              rules: [
                {
                  required: true,
                  message: '投资金额未填写'
                }
              ]
            })(<InputNumber />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}


export default Form.create()(CreatePartnerModal)
