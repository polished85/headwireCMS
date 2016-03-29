
import deepFreeze from 'deep-freeze'
const initState = { 
    isOpen: false,
    activeComponent: 'none',
    activeComponentId: 0,
    activeComponentData: ''
}
function componentSettings(state = initState, action) {
    
    // throw error if we attempt to mutate state 
    deepFreeze(state)
    
    switch (action.type) {
        case 'TOGGLE_COMPONENT_SETTINGS':
            var componentSettings = Object.assign({}, state)
            componentSettings.isOpen = !componentSettings.isOpen
            return componentSettings

        case 'OPEN_COMPONENT_SETTINGS':
            var componentSettings = Object.assign({}, state)
            if(!componentSettings.isOpen){
                componentSettings.isOpen = true
            }
            return componentSettings

        case 'CLOSE_COMPONENT_SETTINGS':
            var componentSettings = Object.assign({}, state)
            if(componentSettings.isOpen){
                componentSettings.isOpen = false
            }
            return componentSettings

        case 'CLEAR_COMPONENT_SETTINGS':

            var componentSettings = Object.assign({}, state, {
                activeComponent: 'none',
                activeComponentId: 0,
                activeComponentData: ''
            })
            console.log('--------------------------')
            console.log('CLEAR_COMPONENT_SETTINGS: ')
            console.log('componentSettings state: ', state)
            console.log('componentSettings new state: ', componentSettings)
            return componentSettings

        case 'EDIT_COMPONENT_SETTINGS':
            var componentSettings = Object.assign({}, state)
            console.log('--------------------------')
            console.log('EDIT_COMPONENT_SETTINGS: ')
            console.log('active component id: ', action.componentId)
            console.log('active component type: ', action.componentType)
            console.log('active component data: ', action.componentData)
            
            componentSettings.activeComponent = action.componentType,
            componentSettings.activeComponentId = action.componentId
            componentSettings.activeComponentData = action.componentData
            return componentSettings
        
        default:
            return state
    }
}

export default componentSettings
