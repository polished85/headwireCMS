
import Layout from '../components/layout.jsx'
import { connect } from 'react-redux'
import {
    editComponent,
    updateComponent,
    addComponent,
    editComponentSettings,
    openComponentSettings
} from '../actions/actionCreators'

/* connect redux store (state and dispatch) with component */
const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditComponent: (componentId) => {
      dispatch(editComponent(componentId))
    },
    onUpdateComponent: (componentId, data) => {
      dispatch(updateComponent(componentId, data))
    },
    onAddComponent: (componentType, parentId) => {
      dispatch(addComponent(componentType, parentId))
    },
    onEditComponentSettings: (componentId, componentType, componentData) => {
      dispatch(editComponentSettings(componentId, componentType, componentData))
    },
    onOpenComponentSettings: () => {
      dispatch(openComponentSettings())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
