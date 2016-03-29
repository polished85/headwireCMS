
function addComponentByParentId(components, parentId, newComponent){
    console.log('---------------')
    console.log('addComponentByParentId', parentId)
    var len = components.length
    var i
    for(i=0; i<len; i++){
        var component = components[i]
        if(component.id === parentId){
            console.log('component found')
            // temp remove drop zone which is always last item in array
            var dropZone = component.components.pop()
            component.components.push(newComponent)
            // add drop zone back into array after new component has been added
            component.components.push(dropZone)
            break
        } else if (component.components) {
            addComponentByParentId(component.components, parentId, newComponent)
        }
    }
    console.log('components: ', components)
    return components
}

export default addComponentByParentId
