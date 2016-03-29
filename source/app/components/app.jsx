
import LayoutContainer from '../containers/layout.js'
import ComponentMenuContainer from '../containers/component_menu.js'
import ComponentSettingsContainer from '../containers/component_settings.js'

const App = () => {
    return(
        <div>
            <LayoutContainer /> 
            <ComponentMenuContainer />
            <ComponentSettingsContainer />
        </div>
    )
}

export default App
