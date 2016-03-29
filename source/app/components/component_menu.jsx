
import componentLibrary from '../component-library'

const Button = ({
	onClick,
	componentType
}) => {
	return(
		<button 
			type="button" 
			className="btn btn-default component"
            draggable="true"
            onMouseDown={
                e => e.stopPropagation()
            }
            onDragStart={
                (e) => {
                    console.log('dragging started')
                    e.dataTransfer.setData('componentType', componentType)
                }
            }>
			{componentType}
		</button>
	)
}

const DragCanvas = ({
    componentMenu,
    onSetMenuPosition,
    onToggleDragCanvas
}) => {
    return (
        <div 
            id="drag_canvas"
            className={componentMenu.drag_canvas ? 'canvas-active' : 'canvas-disabled'}
            onMouseUp={onToggleDragCanvas}
            onMouseMove={
                (e) => {
                    const posX = e.clientX
                    const posY = e.clientY
                    const menuX = posX - componentMenu.diff_left
                    const menuY = posY - componentMenu.diff_top
                    onSetMenuPosition(menuX, menuY)
                }
            }
        />
    )    
}

const ComponentMenu = ({
	componentMenu,
    authoring,
    onSetMenuPosition,
    onSetMenuDiff,
    onToggleDragCanvas,
	onToggleComponentMenu,
    onToggleAuthoring,
	onAddComponent
}) => {
	const componentNodes = componentLibrary.map( function(componentItem , index) {
		const componentType = componentItem.type
		console.log(componentType)

        if(componentType !== 'DropZone'){
    		return (
                <Button 
                    key={index} 
                    componentType={componentType}
                />
            )
        }
	})
    
    var toggleIconDirection;
    componentMenu.isOpen ? toggleIconDirection = 'right' : toggleIconDirection = 'left'
    const toggleButtonClasses = `fa fa-angle-${toggleIconDirection} btn-toggle-menu`
    return (
        <div>
            {componentMenu.drag_canvas ? <DragCanvas componentMenu={componentMenu} onSetMenuPosition={onSetMenuPosition} onToggleDragCanvas={onToggleDragCanvas} /> : ''}
            <menu 
                id="component_menu" 
                className={componentMenu.isOpen ? 'open' : 'closed'}
                style={{top: componentMenu.top + 'px', left: componentMenu.left + 'px'}}
                onMouseDown={
                    (e) => {
                        onToggleDragCanvas()
                        const posX = e.clientX
                        const posY = e.clientY
                        const divTop = componentMenu.top
                        const divLeft = componentMenu.left
                        const diffX = posX - divLeft
                        const diffY = posY - divTop
                        console.log('diffX: ', diffX)
                        console.log('diffY: ', diffY)
                        onSetMenuDiff(diffX, diffY)
                    }
                }
                onMouseUp={onToggleDragCanvas}
            >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Component Library <i className="fa fa-arrows-alt pull-right"></i></h3>
                    </div>
                    <div 
                        className="panel-body"
                        onMouseDown={
                            e => e.stopPropagation()
                        }
                        onMouseUp={
                            e => e.stopPropagation()
                        }>
                        <div className="btn-group-vertical editor-actions" role="group">
                            { componentNodes }
                        </div>
                    </div>  
                    <button 
                        type="button" 
                        className="btn btn-block panel-footer"
                        onMouseUp={e => e.stopPropagation()}
                        onMouseDown={e => e.stopPropagation()}
                        onClick={onToggleAuthoring}>
                        {authoring ? 'preview ' : 'author '} 
                        <i className={authoring ? 'fa fa-eye' : 'fa fa-edit'}></i>
                    </button>
                </div>
            </menu>
        </div>
    )
}

export default ComponentMenu
