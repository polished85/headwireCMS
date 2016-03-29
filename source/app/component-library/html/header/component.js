
const Header = ({
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
        <header className={data.class}>
        	<div className="edit-btn-wrap text-right">
            <button 
        			className="btn btn-dark btn-xs"
        			onClick={ () => {
                onOpenComponentSettings()
                onEditComponentSettings(id, 'Header', data)
              }}>
        			header <i className="fa fa-pencil" />
        		</button>
        	</div>
        	{children}
        </header>
    )
   } else {
   	return(
   		<header className={data.class}>
   			{children}
   		</header>
   	)
   }
}

export default Header
