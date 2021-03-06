import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';
import DataGridComponent from '../components/DataGridComponent.jsx'

const TodayContainer = React.createClass({
    render () {
        return (
            <div>
                <DataGridComponent {...this.props} />
            </div>
        )
    }
})

function mapStateToProps(state) {
    let quests = state.quests.filter((quest) => quest.type === 1 && quest.state === 0);
  return {
      quests,
      current: state.current
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchEditQuest: (quest) => dispatch(actions.fetchEditQuest(quest)),
    onFetchDeleteQuest: (quest) => dispatch(actions.fetchDeleteQuest(quest)),
    onFetchAddQuest: (text,type) => dispatch(actions.fetchAddQuest(text,type)),
    onCompleteQuest: (id) => dispatch(actions.completeQuest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayContainer)
