import React, { Component } from 'react'
import { Link } from 'react-router'
import './stylefooter.css'

export default class Footer  extends Component {
  render() {
    return (
      <div className="foot">
        <p className="foot-p">本网站由<Link className="foot-a" to="/detail/2105"><strong>EasyVOA</strong></Link>开发上线 &copy; 2011-2014  <Link className="foot-a" to="/detail/2105">手机版EasyVOA</Link> </p>
        <p className="foot-p">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
        <p className="foot-p"><img src={require('../../../../statics/imgs/wen.gif')}/></p>
      </div>
    )
  }
}