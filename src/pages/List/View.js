import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actionCreator'
import { Link } from 'react-router'
import './stylelist.css'

class List extends Component {
  render() {
    return (
      <div className="list-big">
        <div className="list-top">
          <div className="list-top-img">
            <img className="top-left" alt="" src={require('../../statics/imgs/list1.png')}/>
            <img className="top-right" alt="" src={require('../../statics/imgs/list2.gif')}/>
          </div>
          <div className="list-top-nav">
            <div className="nav-tabone"></div>
            <div className="nav-tab ">大家说英语</div>
            <div className="nav-tab">空中英语教室</div>
            <div className="nav-tab">彭蒙惠英语</div>
          </div>
        </div>
        <div className="list-con">
          <div className="con-left">
            <img className="con-logo" src={require('../../statics/imgs/listlogo.png')}/>
            <div className="con-top">
              <img className="con-top-img" alt="" src={require('../../statics/imgs/list3.jpg')}/>
              <img className="con-top-img" alt="" src={require('../../statics/imgs/list4.jpg')}/>
              <img className="con-top-img" alt="" src={require('../../statics/imgs/list5.jpg')}/>
            </div>
            <div className="con-list">
              <p className="con-list-p"><strong>往期试听：</strong></p>
              <div className="con-list-table">
                <ul>
                  {
                    this.props.listleft.map((value) => {
                      return (
                        <li className="table-li" key={value.id}><Link to={value.link}>{value.title}</Link></li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="con-right">
            <div className="right-img">
              <p className="right-img-p">杂志展示:</p>
              <img className="right-img-img" alt="" src={require('../../statics/imgs/list6.png')}/>
            </div>
            <div className="right-title">
              <p className="right-title-p">视频展示:</p>
              <div dangerouslySetInnerHTML={{__html:this.props.listright}}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if(!this.props.listleft.length) {
      this.props.actions.getActionList()
    }
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.list
  }
  
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(List)