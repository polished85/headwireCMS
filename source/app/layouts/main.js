
import shortid from 'shortid'

const main = [
    {
        id: shortid.generate(),
        type: 'Container',
        drop_zone: true,
        components: [
            {
                id: shortid.generate(),
                type: 'Row',
                components: [
                    {
                        id: shortid.generate(),
                        type: 'Column',
                        drop_zone: true,
                        data: {
                            sm: 4,
                            md: 3,
                            lg: 3
                        },
                        components: [
                            {
                                id: shortid.generate(),
                                type: 'Img'
                            }
                        ]
                    },
                    {
                        id: shortid.generate(),
                        type: 'Column',
                        drop_zone: true,
                        data: {
                            sm: 8,
                            md: 9,
                            lg: 9
                        },
                        components: [
                            {
                                id: shortid.generate(),
                                type: 'H3'
                            },
                            {
                                id: shortid.generate(),
                                type: 'P'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var blank = [
    {
        id: shortid.generate(),
        type: 'Container',
        drop_zone: true,
        components: [

        ]
    }
]

export default blank
