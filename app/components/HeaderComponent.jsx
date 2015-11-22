import React, { PropTypes } from 'react'
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

const HeaderComponent = React.createClass({
    getInitialState() {
      return {
        date: ''
      };
    },
    handleChange(value) {
      message.info('您选择的日期是: ' + value.toString());
      this.setState({
        date: value
      });
    },
    render() {
      return (
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              theme={this.state.theme}
              mode="horizontal">
              <Menu.Item key="mail">
                  <Icon type="mail" />
                  导航一
              </Menu.Item>
              <Menu.Item key="app">
                  <Icon type="appstore" />
                  导航二
              </Menu.Item>
              <SubMenu title={
                      <span>
                          <Icon type="setting" />
                          导航 - 子菜单
                      </span>
                  }>
                  <Menu.Item key="setting:1">选项1</Menu.Item>
                  <Menu.Item key="setting:2">选项2</Menu.Item>
                  <Menu.Item key="setting:3">选项3</Menu.Item>
                  <Menu.Item key="setting:4">选项4</Menu.Item>
              </SubMenu>
              <Menu.Item key="alipay">
                  <a href="http://www.alipay.com/" target="_blank">
                      导航四 - 链接
                  </a>
              </Menu.Item>
          </Menu>
      )
    }
})

export default HeaderComponent
