
import componentLibrary from '../component-library'
import _ from 'lodash'
import shortid from 'shortid'

function editActiveComponent(
    activeComponent, 
    activeComponentId, 
    activeComponentData, 
    onUpdateComponent, 
    onClearComponentSettings, 
    onCloseComponentSettings
){
    console.log('active component: ', activeComponent)
    var len = componentLibrary.length
    var i
	for(i=0; i<len; i++){
        const componentItem = componentLibrary[i]            
        console.log(componentItem.type)
        if (activeComponent === componentItem.type) {
            const EditComponent = componentItem.editor
            return (
                <EditComponent 
                    activeComponent={activeComponent}
                    activeComponentId={activeComponentId}
                    activeComponentData={activeComponentData}
                    onUpdateComponent={onUpdateComponent}
                    onClearComponentSettings={onClearComponentSettings}
                    onCloseComponentSettings={onCloseComponentSettings}
                />
            )
            break
        }
	}
}

export default editActiveComponent
