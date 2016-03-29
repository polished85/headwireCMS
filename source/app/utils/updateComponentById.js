
function updateComponentById(components, id, data){
    console.log('---------------')
    console.log('updateComponentById', id)
    var len = components.length
    var i
    for(i=0; i<len; i++){
        var component = components[i]
        if(component.id === id){
            console.log('component found')
            component.editing = false
            component.data = data
            break
        } else if (component.components) {
            updateComponentById(component.components, id, data)
        } else if(i === len - 1){
            console.log('component NOT found and last item in array')
        }
    }
    console.log('components: ', components)
    return components
}

export default updateComponentById
