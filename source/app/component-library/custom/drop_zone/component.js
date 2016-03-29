
const DropZone = ({
    onAddComponent,
    parentId
}) => { 
    console.log('parentId', parentId)
    return (
        <div 
            onDragEnter={e => console.log('entering zone')}
            onDragOver={e => e.preventDefault()}
            onDragLeave={e => console.log('leaving zone')}
            onDrop={(e) => {
                onAddComponent(e.dataTransfer.getData('componentType'), parentId)
            }}
            className="drop-zone">
            drag components here <i className="fa fa-dot-circle-o"></i>
        </div>
    )
}

export default DropZone
