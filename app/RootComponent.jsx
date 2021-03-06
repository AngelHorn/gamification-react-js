import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'

import {Row, Col} from "antd";
import * as actions from './actions/actionsCreators.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import LeftNavComponent from './components/LeftNavComponent.jsx';


const RootComponent = React.createClass({
    getInitialState() {
        this.props.onFetchItems();
        this.props.onFetchQuests();
        this.props.onFetchSchedules();
        this.props.onFetchBagItems();
        window.onhashchange = () => this.props.onPutCurrentNavType();
        return {};
    },
    render () {
        return (
            <div>
                <HeaderComponent {...this.props}/>
                <Row>
                    <Col span="4">
                        <LeftNavComponent {...this.props}/>
                    </Col>
                    <Col span="20">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
})

function mapStateToProps(state) {
  return {
      current: state.current,
      bag_items: state.bag_items,
      items: state.items,
      quests: state.quests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPutCurrentNavType: () => dispatch(actions.putCurrentNavType()),
    onFetchBagItems: () => dispatch(actions.fetchBagItems()),
    onFetchItems: () => dispatch(actions.fetchItems()),
    onFetchSchedules: () => dispatch(actions.fetchSchedules()),
    onFetchAddSchedule: (formData) => dispatch(actions.fetchAddSchedule(formData)),
    onFetchAddQuest: (text,type,options) => dispatch(actions.fetchAddQuest(text,type,options)),
    onFetchQuests: () => dispatch(actions.fetchQuests())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent)
