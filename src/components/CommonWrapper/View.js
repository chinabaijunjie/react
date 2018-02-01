import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { getChangeListAction } from './actionCreator'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import Footer from './components/Footer/View.js'
import './style.css'

class CommonWrapper extends Component {

  render() {
    return (
      <div className="common">
        <Row>
          <Col span={6}><img alt='' onClick={() => {browserHistory.push('/')}} className='common-logo' src={require('../../statics/imgs/newlogo.png')}/></Col>
          <Col span={18}>
            <Menu mode="horizontal">
              {
                this.props.list.map((value) => {
                  return (
                    <Menu.Item key={value.id}>
                      <Link to={value.link}>{value.title}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Col>
        </Row>
        <div className="nav">
          <div className="nav-top">
            <div className="nav-top-left nav-h">常速英语</div>
            <div className="nav-top-center nav-h">慢速英语（中级）</div>
            <div className="nav-top-right nav-h">英语教学（初级）</div>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-left">
              {
                this.props.nav.standard.map((value) => {
                  return (
                    <li className="navlist" key={value.id}><Link className="navlist-a" to={value.link}>{value.title}</Link></li>
                  )
                })
              }
            </div>
            <div className="nav-bottom-center">
              {
                this.props.nav.special.map((value) => {
                  return (
                    <li className="navlist" key={value.id}><Link className="navlist-a" to={value.link}>{value.value}</Link></li>
                  )
                })
              }
            </div>
            <div className="nav-bottom-right">
              {
                this.props.nav.teach.map((value) => {
                  return (
                    <li className="navlist" key={value.id}><Link className="navlist-a" to={value.link}>{value.value}</Link></li>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="label">
          <p  className="label-de label1">热门标签：</p>
          <div className="label-de label-word">广告Google</div>
          <div className="label-de label-good">下载英语听力</div>
          <div className="label-de label-good">Voa在线收听</div>
          <div className="label-de label-good">听力在线</div>
        </div>
        <div className="child">{this.props.children}</div>
        <Footer />
      </div>)
  }
  componentDidMount() {
    this.getCommonInfo()   
  }
  getCommonInfo() {
    fetch('/api/common.json')
      .then((res) => res.json())
      .then(this.props.changeData)
  }
}
  const mapStateToProps = (state) => {
    console.log(state.common.nav)
    return {
      ...state.common
      }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      changeData(res) {
        const action = getChangeListAction(res.data)
        dispatch(action)
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CommonWrapper)