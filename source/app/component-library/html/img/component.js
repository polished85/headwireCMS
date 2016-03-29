
export default ({
	id, 
    authoring,
    editing,
    data,
    onEditComponent,
    onEditComponentSettings,
    onOpenComponentSettings
}) => { 
    if(authoring){
        if(editing){
            return(
                <div className="authoring-active editing">
                    <img 
                        className={data.class} 
                        src={data.src} 
                        alt={data.alt} 
                    />
                    <i className="fa fa-spinner fa-spin pos-top-right"></i>
                </div>
            )
        } else {
            return(
                <div className="authoring-active">
                    <img 
                        className={data.class} 
                        src={data.src} 
                        alt={data.alt}
                    />
                    <button 
                        type="button" 
                        className="btn btn-dark btn-xs pos-top-right"
                        onClick={ () => {
                            onOpenComponentSettings()
                            onEditComponent(id)
                            onEditComponentSettings(id, 'Img', data) 
                        }}>
                        img <i className="fa fa-pencil" />
                    </button>
                </div>
            )
        } 
    }
    else {
        return(
            <img 
                className={data.class} 
                src={data.src} 
                alt={data.alt}
            />
        )
    } 
}
