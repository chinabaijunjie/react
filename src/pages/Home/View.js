import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { List, Avatar } from 'antd'
import { connect } from 'react-redux'
import * as actions from './actionCreator'
import { Link } from 'react-router'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="list">
          <List
            style={{marginTop: '6px'}}
            bordered={true}
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={ item.link}>{item.title}</Link>}
                  description={ item.category + item.pubdate}
                />
              </List.Item>
            )}
          />
        </div>
        <div className="blogroll">
          <div className="blogroll-top">
            voa友情链接
          </div>
          <div className="blogroll-bottom">
            <ul className="blogroll-ul">
              {
                this.props.word.map((value) => {
                  return (
                    <li className="blogroll-word" key={value.id}><Link className="blogroll-a" to={value.link}>{value.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if(!this.props.list.length) {
      this.props.actions.getActionList()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.home
  }
  
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)