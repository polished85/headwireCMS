
const Editor = ({
    activeComponentId,
    activeComponentData,
    onUpdateComponent,
    onClearComponentSettings,
    onCloseComponentSettings
}) => { 
    let textInput
    let classInput
    return (
        <form 
            className="update-settings"
            onSubmit={e => {
                e.preventDefault()

                const data = {
                    text: textInput.value,
                    class: classInput.value
                }
                onUpdateComponent(activeComponentId, data)
                onCloseComponentSettings()
                onClearComponentSettings()
            }}
        >
            <div className="form-group">
                <label>Text</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter h4 text"
                    defaultValue={activeComponentData.text}
                    ref={node => {
                        textInput = node
                    }}/>
            </div>
                   
            <div className="form-group">
                <label>Classes</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter one or more classes"
                    defaultValue={activeComponentData.class}
                    ref={node => {
                        classInput = node
                    }}/>
            </div>
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default Editor
