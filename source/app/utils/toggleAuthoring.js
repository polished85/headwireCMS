
import shortid from 'shortid'

function toggleAuthoring(components, editorActive){
    console.log('---------------')
    console.log('toggleAuthoring')
    var len = components.length
    var i
    for(i=0; i<len; i++){
        var component = components[i]
        
        // if editor is active and component has drop_zone set to true
        if(editorActive && component.drop_zone){
            component.components.push({
                id: shortid.generate(),
                type: 'DropZone'
            })
        } else if(!editorActive && component.drop_zone){
            component.components.pop()
        }
        
        // if component has children, use recursive function
        if(component.components){
            console.log('looping through child components')
            toggleAuthoring(component.components, editorActive)
        }
        
    }
    return components
}

export default toggleAuthoring
