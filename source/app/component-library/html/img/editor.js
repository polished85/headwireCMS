
export default ({
    activeComponent,
    activeComponentId,
    activeComponentData,
    onUpdateComponent,
    onClearComponentSettings,
    onCloseComponentSettings
}) => { 
    let srcInput
    let altInput
    let classInput
    return (
        <form 
            className="update-settings"
            onSubmit={e => {
                e.preventDefault()

                const data = {
                    src: srcInput.value, 
                    alt: altInput.value, 
                    class: classInput.value
                }
                onUpdateComponent(activeComponentId, data)
                onCloseComponentSettings()
                onClearComponentSettings()
            }}
        >
            <h2>{`${activeComponent} Settings`}</h2>
            <div className="form-group">
                <label>Img Src</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="image path"
                    defaultValue={activeComponentData.src}
                    ref={node => {
                        srcInput = node
                    }}/>
            </div>
            <div className="form-group">
                <label>Alt Tag</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="descriptive seo text"
                    defaultValue={activeComponentData.alt}
                    ref={node => {
                        altInput = node
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
