
import deepFreeze from 'deep-freeze'

const initialState = { 
    isOpen: true, 
    drag_canvas: false, 
    left: 100,
    top: 10, 
    diff_left: 0,
    diff_top: 0   
}
function componentMenu(state = initialState, action) {
    
    // throw error if we attempt to mutate state 
    deepFreeze(state)
    
    switch (action.type) {
        case 'TOGGLE_COMPONENT_MENU':
            var componentMenu = Object.assign({}, state)
            componentMenu.isOpen = !componentMenu.isOpen
            return componentMenu
            
        case 'SET_MENU_POSITION':
            var componentMenu = Object.assign({}, state, {
                left: action.left,
                top: action.top
            })
            return componentMenu
            
        case 'SET_MENU_DIFF':
            var componentMenu = Object.assign({}, state, {
                diff_left: action.left,
                diff_top: action.top
            })
            return componentMenu
            
        case 'TOGGLE_DRAG_CANVAS':
            var componentMenu = Object.assign({}, state, {
                drag_canvas: !state.drag_canvas
            })
            return componentMenu
        
        default:
            return state
    }
}

export default componentMenu
