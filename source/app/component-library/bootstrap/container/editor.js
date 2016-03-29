
export default ({
    activeComponent,
    activeComponentId,
    activeComponentData,
    onUpdateComponent,
    onClearComponentSettings,
    onCloseComponentSettings
}) => { 
    let classInput
    return (
        <form 
            id="update_settings"
            onSubmit={e => {
                e.preventDefault()

                const data = {
                    class: classInput.value
                }
                onUpdateComponent(activeComponentId, data)
                onCloseComponentSettings()
                onClearComponentSettings()
            }}
        >
            <h2>{`${activeComponent} Settings`}</h2>
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
            <button type="submit" className="btn btn-success pull-right">Save</button>
        </form>
    )
}
