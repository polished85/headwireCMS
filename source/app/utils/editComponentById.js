
function editComponentById(components, id){
    console.log('---------------')
    console.log('editComponentById', id)
    var len = components.length
    var i
    for(i=0; i<len; i++){
        var component = components[i]
        if(component.id === id){
            console.log('component found')
            component.editing = true
            break
        } else if (component.components) {
            editComponentById(component.components, id)
        } else if (i === len - 1){
            console.log('component NOT found and last item in array')
        }
    }
    console.log('components: ', components)
    return components
}

export default editComponentById
