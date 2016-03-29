
const Column = ({
    id, 
    authoring,
    editing,
    data,
    onEditComponentSettings,
    onOpenComponentSettings,
    children
}) => { 
	if(authoring){
    return(
    	<div className={`col-xs-${data.xs} col-sm-${data.sm} col-md-${data.md} col-lg-${data.lg}`}>
    		<div className="edit-btn-wrap text-right">
                <button 
        			className="btn btn-dark btn-xs"
        			onClick={ () => {
                        onOpenComponentSettings()
                        onEditComponentSettings(id, 'Column', data)
                    }}
        		>
                    column <i className="fa fa-pencil" />
        		</button>
            </div>
    		{children}
    	</div>
    )
  } else {
  	return(
    	<div className={`col-xs-${data.xs} col-sm-${data.sm} col-md-${data.md} col-lg-${data.lg}`}>
    		{children}
    	</div>
    )
  }
}

export default Column
