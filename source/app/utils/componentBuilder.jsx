
import componentLibrary from '../component-library'
import _ from 'lodash'
import shortid from 'shortid'

function buildComponentNodes(
    components, 
    authoring, 
    onEditComponent, 
    onUpdateComponent, 
    onAddComponent, 
    onEditComponentSettings, 
    onOpenComponentSettings,
    parentId = 'root'
){
    console.log('component builder', components)
	var componentNodes = components.map( function(component, index) {

        console.log('drop_zone: ', component.drop_zone)
		var len = componentLibrary.length
		var i
		for(i=0; i<len; i++){
            var componentItem = componentLibrary[i]
            // use lodash for cloning if data object has deep nested properties
            // var data = _.cloneDeep(componentItem.data)
            
            var data = Object.assign({}, componentItem.data, component.data)
            // var componentProps
            // if(component.data){
            //     console.log('component has data: ', component.data)
            //     componentProps = {
            //         key: index, 
            //         id: component.id,
            //         authoring: authoring,
            //         editing: component.editing,
            //         data: component.data,
            //         onEditComponent: onEditComponent,
            //         onUpdateComponent: onUpdateComponent,
            //         onEditComponentSettings: onEditComponentSettings
            //     }
            // } else {
            //     console.log('component has no data: ', component.data)
            //     componentProps = {
            //         key: index, 
            //         id: component.id,
            //         authoring: authoring,
            //         editing: component.editing,
            //         onEditComponent: onEditComponent,
            //         onUpdateComponent: onUpdateComponent,
            //         onEditComponentSettings: onEditComponentSettings
            //     }
            // }
            
            const componentProps = {
                key: index, 
                id: component.id,
                authoring: authoring,
                editing: component.editing,
                data: component.data,
                onEditComponent: onEditComponent,
                onUpdateComponent: onUpdateComponent,
                onEditComponentSettings: onEditComponentSettings,
                onOpenComponentSettings: onOpenComponentSettings
            }
            // if the component exists
            if (component.type === componentItem.type) {
                
                // create a React component as defined by component.type
                var Component = componentItem.component
                if(component.components) {
                    var childNodes = buildComponentNodes(
                        component.components, 
                        authoring, 
                        onEditComponent, 
                        onUpdateComponent, 
                        onAddComponent, 
                        onEditComponentSettings, 
                        onOpenComponentSettings, 
                        component.id
                    )
                    console.log('component data: ', component.data)
                    return (
                        <Component {...componentProps}>
                            {childNodes}
                        </Component>
                    )
                } else if(component.type === 'DropZone'){
                    return(
                        <Component
                            key={index} 
                            id={component.id}
                            parentId={parentId}
                            onAddComponent={onAddComponent}
                        />
                    )
                } else {
                    return (
                        <Component  {...componentProps}/>
                    )
                }
                break
            }
        }
	})
	return componentNodes
}

export default buildComponentNodes
