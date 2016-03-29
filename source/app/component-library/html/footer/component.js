
const Footer = ({
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
        <footer className={data.class}>
        	<div className="edit-btn-wrap text-right">
            <button 
        			className="btn btn-dark btn-xs"
        			onClick={ () => {
                onOpenComponentSettings()
                onEditComponentSettings(id, 'Footer', data)
              }}>
        			footer <i className="fa fa-pencil" />
        		</button>
        	</div>
        	{children}
        </footer>
    )
   } else {
   	return(
   		<footer className={data.class}>
   			{children}
   		</footer>
   	)
   }
}

export default Footer
