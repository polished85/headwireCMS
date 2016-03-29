
import componentLibrary from '../component-library'
import editComponentById from '../utils/editComponentById'
import updateComponentById from '../utils/updateComponentById'
import addComponentByParentId from '../utils/addComponentByParentId'
import toggleAuthoring from '../utils/toggleAuthoring'
import layouts from '../layouts/index'
import shortid from 'shortid'
import _ from 'lodash'
import deepFreeze from 'deep-freeze'

const initialLayout = {
    name: 'main',
    authoring: false,
    components: layouts.main
}

function layout(state = initialLayout, action) {
    
    // throw error if we attempt to mutate state 
    deepFreeze(state)
    
    switch (action.type) {

        /* add component ==================== */
        case 'ADD_COMPONENT':
            var layout = _.cloneDeep(state)
            
            // basic for loop
            var len = componentLibrary.length
            var newComponent; var i
            // loop through component library until we find the component we want to render
            for(i=0; i<len; i++){
                var componentItem = componentLibrary[i]
                if(componentItem.type === action.componentType){
                    console.log('drop zone?', componentItem.drop_zone)
                    // once we find a match
                    newComponent = {
                        id: shortid.generate(),
                        editing: false,
                        drop_zone: componentItem.drop_zone || false,
                        type: componentItem.type,
                    }
                    // if component drop_zone is true, add a drop zone to the component
                    if(componentItem.drop_zone){
                        newComponent.components = [
                            {
                                id: shortid.generate(),
                                type: 'DropZone'
                            }
                        ]
                    }
                    console.log('newComponent', newComponent)
                    // no need to continue the loop, we found the component we want
                    break
                }
            }
            
            // add new component into parent object using the parentId
            if(action.parentId === 'root'){
                layout.components.push(newComponent)
            } else {
                layout.components = addComponentByParentId(layout.components, action.parentId, newComponent)
            }
            
            console.log('----------------')
            console.log('ADD_COMPONENT: ', layout.components)
            console.log('parentId', action.parentId)
            console.log('component type: ', action.componentType)
            return layout
            break

        /* edit component ==================== */ 
        case 'EDIT_COMPONENT':
            console.log('----------------')
            console.log('EDIT_COMPONENT')
            console.log('componentId: ', action.componentId)
            
            var layout = _.cloneDeep(state)
            layout.components = editComponentById(layout.components, action.componentId)
            console.log('returned layout components: ', layout.components)
            return layout
            break

        /* update component ==================== */
        case 'UPDATE_COMPONENT':
            
            console.log('----------------')
            console.log('UPDATE_COMPONENT')
            console.log('componentId: ', action.componentId)
            console.log('data: ', action.data)
            
            var layout = _.cloneDeep(state)
            layout.components = updateComponentById(layout.components, action.componentId, action.data)
            return layout
            break
            
        /* toggle editing ==================== */
        case 'TOGGLE_AUTHORING':
            
            console.log('----------------')
            console.log('TOGGLE_AUTHORING')
            var layout = _.cloneDeep(state)
            layout.authoring = !layout.authoring
            layout.components = toggleAuthoring(layout.components, layout.authoring)
            // TODO: loop through components and add drop zone if component.drop_zone === true
            return layout
            break
         
         
        default:
            return state
    }
}

export default layout
