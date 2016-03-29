
import ComponentMenu from '../components/component_menu.jsx'
import { connect } from 'react-redux'
import {
    setMenuPosition,
    setMenuDiff,
    toggleDragCanvas,
    toggleComponentMenu,
    toggleAuthoring,
    addComponent
} from '../actions/actionCreators'

const mapStateToProps = (state) => {
  return {
    componentMenu: state.componentMenu,
    authoring: state.layout.authoring
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleComponentMenu: () => {
      dispatch(toggleComponentMenu())
    },
    onToggleAuthoring: () => {
      dispatch(toggleAuthoring())
    },
    onSetMenuPosition: (left, top) => {
      dispatch(setMenuPosition(left, top))
    },
    onSetMenuDiff: (left, top) => {
      dispatch(setMenuDiff(left, top))
    },
    onToggleDragCanvas: () => {
        dispatch(toggleDragCanvas())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentMenu)
