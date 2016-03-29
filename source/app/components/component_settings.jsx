
import editActiveComponent from '../utils/editActiveComponent.jsx'

const ComponentSettings = ({
	componentSettings,
    authoring,
	onToggleComponentSettings,
    onClearComponentSettings,
    onCloseComponentSettings,
    onUpdateComponent
}) => {
    
    var iconType
    componentSettings.isOpen ? iconType = 'cog' : iconType = 'cog'
    const iconClasses = `fa fa-${iconType} `
    console.log('active component', componentSettings.activeComponent)
    return (
	    <menu id="component_settings" className={componentSettings.isOpen ? 'open' : 'closed'}>
            <button 
                onClick={onToggleComponentSettings} 
                className="btn-toggle-menu"
                type="button">
                <i className={iconClasses}></i>
            </button>
            
            <div className="container-fluid">
                {
                    componentSettings.activeComponent === 'none' ? <h3>No Active Component&hellip;</h3> : editActiveComponent(componentSettings.activeComponent, componentSettings.activeComponentId, componentSettings.activeComponentData, onUpdateComponent, onClearComponentSettings, onCloseComponentSettings)
                }
            </div>
        </menu>
    )
}

export default ComponentSettings
