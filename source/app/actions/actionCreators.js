
import {
    GET_PAGE_MODEL,
    INIT_LAYOUT,
    TOGGLE_AUTHORING,

    
    SET_MENU_POSITION,
    SET_MENU_DIFF,
    TOGGLE_DRAG_CANVAS,

    TOGGLE_COMPONENT_SETTINGS,
    OPEN_COMPONENT_SETTINGS,
    CLOSE_COMPONENT_SETTINGS,
    EDIT_COMPONENT_SETTINGS,
    CLEAR_COMPONENT_SETTINGS,

    ADD_COMPONENT,
    EDIT_COMPONENT,
    UPDATE_COMPONENT,
    DELETE_COMPONENT

} from './actionTypes'

export function getPageModel(){
    return {
        type: GET_PAGE_MODEL
    }
}

export function initLayout(text){
    return {
        type: INIT_LAYOUT,
        text: 'main'
    }
}

export function toggleAuthoring(){
    return {
        type: TOGGLE_AUTHORING
    }
}




export function setMenuPosition(left, top){
    return {
        type: SET_MENU_POSITION,
        left,
        top
    }
}

export function setMenuDiff(left, top){
    return {
        type: SET_MENU_DIFF,
        left,
        top
    }
}

export function toggleDragCanvas(){
    return {
        type: TOGGLE_DRAG_CANVAS
    }
}





export function toggleComponentSettings(){
    return {
        type: TOGGLE_COMPONENT_SETTINGS
    }
}

export function openComponentSettings(){
    return {
        type: OPEN_COMPONENT_SETTINGS
    }
}

export function closeComponentSettings(){
    return {
        type: CLOSE_COMPONENT_SETTINGS
    }
}

export function editComponentSettings(componentId, componentType, componentData){
    return {
        type: EDIT_COMPONENT_SETTINGS,
        componentId,
        componentType,
        componentData
    }
}

export function clearComponentSettings(){
    return {
        type: CLEAR_COMPONENT_SETTINGS
    }
}




export function addComponent(componentType, parentId){
    return {
        type: ADD_COMPONENT,
        componentType,
        parentId
    }
}

export function editComponent(componentId){
    return {
        type: EDIT_COMPONENT,
        componentId
    }
}

export function updateComponent(componentId, data){
    return {
        type: UPDATE_COMPONENT,
        componentId,
        data
    }
}

export function deleteComponent(componentId, parentId){
    return {
        type: DELETE_COMPONENT,
        componentId,
        parentId
    }
}
