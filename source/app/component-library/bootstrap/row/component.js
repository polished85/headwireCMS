
const Row = ({
    id, 
    authoring,
    data,
    children
}) => { 
		if(authoring){
    return(
        <div className={data.class}>
          <div className="edit-btn-wrap text-right">
  	        <button className="btn btn-default btn-xs">row</button>
          </div>
        	{children}
        </div>
    )
  } else {
  	return(
      <div className={data.class}>{children}</div>
    )
  }
}

export default Row
