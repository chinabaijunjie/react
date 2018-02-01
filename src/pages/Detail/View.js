import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeDetailAction } from './actionCreator'
import Shizhong from './Shizhong'
import './styledetail.css'

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <h1 className="detail-title">{this.props.title}</h1>
        <div className="detail-explain">
          <div className="detail-time">
            <div className="explain">时间：{this.props.pubdate}</div>
            <div className="explain">来源：{this.props.source}</div>
            <div className="explain">收听下载次数：{this.props.count}</div>
          </div>
        </div>
        <div className="detail-bottom">
          <div className="advertising">
            <Shizhong></Shizhong>
          </div>
          <div className="detail-con">
            <div className="detail-mp3">{this.props.mp3}</div>
            <div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
          </div>
        </div>
        <div className="detail-news">
          <div dangerouslySetInnerHTML={{__html:this.props.bottom}}></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getDetailInfo()
  }

  // componentDidUpdate() {
  //   const time = this.refs.canvas
  //   clock(time)
  // }
  getDetailInfo() {
    fetch('/api/detail.json?=' + this.props.params.id)
    .then((res) => res.json())
    .then(this.props.changeDetailInfo)
  }
}

const mapState = (state) => ({...state.detail})

const mapDispatch = (dispatch) => {
  return {
    changeDetailInfo(res) {
      const action = getChangeDetailAction(res.data)
      dispatch(action)
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)
