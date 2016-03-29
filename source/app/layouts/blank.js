
import shortid from 'shortid'

var blank = [
    {
        id: shortid.generate(),
        type: 'Section',
        drop_zone: true,
        components: [
            {
                type: 'DropZone'
            }
        ]
    }
]

export default blank
