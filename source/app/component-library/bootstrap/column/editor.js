
export default ({
    activeComponent,
    activeComponentId,
    activeComponentData,
    onUpdateComponent,
    onClearComponentSettings,
    onCloseComponentSettings
}) => { 
    let xsInput
    let smInput
    let mdInput
    let lgInput
    console.log('activeComponent: ', activeComponent)
    return (
        <form 
            className="update-settings"
            onSubmit={e => {
                e.preventDefault()
                const data = {
                    xs: xsInput.value, 
                    sm: smInput.value, 
                    md: mdInput.value, 
                    lg: lgInput.value
                }
                onUpdateComponent(activeComponentId, data)
                onCloseComponentSettings()
                onClearComponentSettings()
            }}
        >
            <h2>{`${activeComponent} Settings`}</h2>
            <div className="form-group">
                <label>XS</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter a column span (0-12)"
                    defaultValue={activeComponentData.xs}
                    ref={node => {
                        xsInput = node
                    }}/>
            </div>
            <div className="form-group">
                <label>SM</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter a column span (0-12)"
                    defaultValue={activeComponentData.sm}
                    ref={node => {
                        smInput = node
                    }}/>
            </div>
            <div className="form-group">
                <label>MD</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter a column span (0-12)"
                    defaultValue={activeComponentData.md}
                    ref={node => {
                        mdInput = node
                    }}/>
            </div>
            <div className="form-group">
                <label>LG</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter a column span (0-12)"
                    defaultValue={activeComponentData.lg}
                    ref={node => {
                        lgInput = node
                    }}/>
            </div>
            <button type="submit" className="btn btn-success pull-right">Save</button>
        </form>
    )
}
