
const Section = ({
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
        <section className={data.class}>
        	<div className="edit-btn-wrap text-right">
            <button 
        			className="btn btn-dark btn-xs"
        			onClick={ () => {
                onOpenComponentSettings()
                onEditComponentSettings(id, 'Section', data)
              }}>
        			section <i className="fa fa-pencil" />
        		</button>
        	</div>
        	{children}
        </section>
    )
   } else {
   	return(
   		<section className={data.class}>
   			{children}
   		</section>
   	)
   }
}

export default Section
