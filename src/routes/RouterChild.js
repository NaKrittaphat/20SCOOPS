import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import UserInfo from '../component/User_Information';
import Mian from '../component/Mian';

export default class RouterChild extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Mian} />
        <Route path="/user_info" component={UserInfo} />
      </div>
    )
  }
}
