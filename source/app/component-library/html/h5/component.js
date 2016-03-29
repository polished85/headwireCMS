
 const H5 = ({
    id, 
    authoring,
    editing,
    data,
    onEditComponent,
    onUpdateComponent
}) => { 
  /* if layout editor is active */
  if(authoring){
    if(editing){
      return(
        <div className="authoring-active editing">
          <h5 
            className={data.class} 
            contentEditable="true"
            onBlur={ 
              e => onUpdateComponent(id, {text: e.target.textContent}) 
            }
          >
            {data.text}
          </h5>
          <i className="fa fa-spinner fa-spin" />
        </div>
      )      
    } else {
      return(
      <div className="authoring-active">
        <h5 
          className={data.class}
        >
          {data.text}
        </h5>
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
      <h5 className={data.class}>
          {data.text}
      </h5>
    )
  }
}

export default H5
