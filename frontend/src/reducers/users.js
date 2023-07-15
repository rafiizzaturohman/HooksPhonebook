const users = (state = {
    data: [],
    params: {
        page: 1,
        pages: 0
    }
}, action) => {
    switch (action.type) {
        case 'LOAD_CONTACT_SUCCESS':
            return {
                data: action.data.map(item => {
                    item.sent = true
                    return item
                }),
                params: {
                    page: action.page,
                    pages: action.pages
                }
            }

        case 'LOAD_MORE_SUCCESS':
            return {
                data: [...state.data, ...action.data.val.map(item => {
                    item.sent = true
                    return item
                })],
                params: action.data.params
            }
        case 'LOAD_MORE_FAILURE':
            return state

        case 'SEARCH_CONTACT_SUCCESS':
            return {
                data: action.data.val.map(item => {
                    item.sent = true
                    return item
                }),
                params: action.data.params
            }

        case 'ADD_CONTACT':
            return {
                ...state,
                data: [...state.data, {
                    id: action.id,
                    name: action.name,
                    phone: action.phone,
                    sent: true
                }]
            }
        case 'ADD_CONTACT_SUCCESS':
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.users.id,
                            name: action.users.name,
                            phone: action.users.phone,
                            sent: true
                        }
                    }
                    return item
                })
            }
        case 'ADD_CONTACT_FAILURE':
            return {
                ...state,
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            sent: false
                        }
                    }
                    return item
                })]
            }

        case 'RESEND_CONTACT_SUCCESS':
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.users.id,
                            name: action.users.name,
                            phone: action.users.phone,
                            sent: true
                        }
                    }
                    return item
                })
            }

        case 'UPDATE_CONTACT_SUCCESS':
            return {
                ...state,
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.data.id,
                            name: action.data.name,
                            phone: action.data.phone,
                            sent: true
                        }
                    }
                    return item
                })]
            }

        case 'REMOVE_CONTACT_SUCCESS':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id)
            }
        case 'REMOVE_CONTACT_FAILURE':
        case 'LOAD_CONTACT_FAILURE':
        default:
            return state
    }
}

export default users