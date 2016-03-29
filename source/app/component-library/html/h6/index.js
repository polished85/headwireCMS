
import Component from './component.js'
import Editor from './editor.js'
import schema from './schema.js'
import data from './data.js'

Component.propTypes = schema
Component.defaultProps = data

export default {
    type: 'H6',
    component: Component,
    editor: Editor
}
