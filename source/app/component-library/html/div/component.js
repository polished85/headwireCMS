
const Div = ({
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
        <div className={`${data.class} div`}>
        	<div className="edit-btn-wrap text-right">
            <button 
        			className="btn btn-dark btn-xs"
        			onClick={ () => {
                onOpenComponentSettings()
                onEditComponentSettings(id, 'Div', data)
              }}>
        			div <i className="fa fa-pencil" />
        		</button>
        	</div>
        	{children}
        </div>
    )
   } else {
   	return(
   		<div className={data.class}>
   			{children}
   		</div>
   	)
   }
}

export default Div
