
import componentBuilder from '../utils/componentBuilder.jsx'

/* stateless component */
const Layout = ({
	layout, 
    onEditComponent, 
    onUpdateComponent,
    onAddComponent,
    onEditComponentSettings,
    onOpenComponentSettings
    
}) => {
    console.log('Layout: ', layout)
    var authoringClass
    layout.authoring ? authoringClass = 'layout authoring' : authoringClass = 'layout'
    // componentBuilder is a recursive function that builds the markup from components array
    return (
      <section id={layout.name} className={authoringClass}>
        {componentBuilder(
            layout.components, 
            layout.authoring,  
            onEditComponent, 
            onUpdateComponent, 
            onAddComponent, 
            onEditComponentSettings,
            onOpenComponentSettings
        )}
      </section>
    )
}

export default Layout
