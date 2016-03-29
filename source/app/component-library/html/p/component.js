
 const P = ({
    id, 
    authoring,
    editing,
    data,
    onEditComponent,
    onUpdateComponent
}) => { 
  /* if authoring mode is active */
  if(authoring){
    if(editing){
      return(
        <div className="authoring-active editing">
          <p 
            className={data.class} 
            contentEditable="true"
            onBlur={ 
              e => onUpdateComponent(id, {text: e.target.textContent}) 
            }
          >
            {data.text}
          </p>
          <i className="fa fa-spinner fa-spin" />
        </div>
      )      
    } else {
      return(
      <div className="authoring-active">
        <p 
          className={data.class}
        >
          {data.text}
        </p>
        <button 
          className="btn btn-dark btn-xs btn-inline"
          onClick={ () => onEditComponent(id) }
        >
          edit <i className="fa fa-pencil" /> 
        </button>
      </div>
      )
    }
  } else {
    return(
      <p className={data.class}>
          {data.text}
      </p>
    )
  }
}

export default P
