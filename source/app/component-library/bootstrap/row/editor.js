
export default ({
    activeComponentId,
    activeComponentData,
    onUpdateComponent
}) => { 
    let classInput
    return (
        <form 
            id="bs_container_settings"
            onSubmit={e => {
                e.preventDefault()

                const data = {
                    src: srcInput.value, 
                    alt: altInput.value, 
                    class: classInput.value
                }
                onUpdateComponent(activeComponentId, data)
            }}
        >
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
            <button type="submit" className="btn btn-default">Save</button>
        </form>
    )
}
