
import ComponentSettings from '../components/component_settings.jsx'
import { connect } from 'react-redux'
import {
    toggleComponentSettings,
    clearComponentSettings,
    closeComponentSettings,
    updateComponent
} from '../actions/actionCreators'

const mapStateToProps = (state) => {
  return {
    componentSettings: state.componentSettings,
    authoring: state.layout.authoring
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleComponentSettings: () => {
      dispatch(toggleComponentSettings())
    },
    onCloseComponentSettings: () => {
      dispatch(closeComponentSettings())
    },
    onClearComponentSettings: () => {
      dispatch(clearComponentSettings())
    },
    onUpdateComponent: (componentId, data) => {
      dispatch(updateComponent(componentId, data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentSettings)
