import axios from 'axios';

const url = axios.create({
    baseURL: 'http://localhost:3002/',
    timeout: 1000,
    headers: { 'Authorization': 'token' }
})

// LOAD START
export const loadContactSuccess = (data, page, pages) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    data,
    page,
    pages
})
export const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await url.get('users', { params: getState().users.params })

            dispatch(loadContactSuccess(data.data.users, data.data.page, data.data.pages))
        } catch (error) {
            dispatch(loadContactFailure())
        }
    }
}
// LOAD END

// LOADMORE START
export const loadMoreSuccess = (data) => ({
    type: 'LOAD_MORE_SUCCESS',
    data
})

export const loadMoreFailure = (error) => ({
    type: 'LOAD_MORE_FAILURE',
    error
})

export const loadMore = () => {
    return async (dispatch, getState) => {
        try {
            let state = getState()
            if (state.users.params.page <= state.users.params.pages) {
                let params = {
                    ...state.users.params,
                    page: state.users.params.page + 1
                }
                const { data } = await url.get('users', { params })
                params = {
                    ...params,
                    pages: data.data.pages
                }
                dispatch(loadMoreSuccess({ val: data.data.users, params }))
            }
        } catch (error) {
            dispatch(loadMoreFailure(error))
        }
    }
}
// LOADMORE END

// ADD START
export const addContactSuccess = (id, users) => ({
    type: 'ADD_CONTACT_SUCCESS',
    id,
    users
})

export const addContactFailure = (id) => ({
    type: 'ADD_CONTACT_FAILURE',
    id
})

export const addContactRedux = (id, name, phone) => ({
    type: 'ADD_CONTACT',
    id,
    name,
    phone
})

export const addContact = (name, phone) => {
    const id = Date.now()
    return async (dispatch, getState) => {
        if (!getState().users.params.searchName && !getState().users.params.searchPhone) {
            dispatch(addContactRedux(id, name, phone))
        }
        try {
            const { data } = await url.post('users', { name, phone })

            if (!getState().users.params.searchName && !getState().users.params.searchPhone) {
                dispatch(addContactSuccess(id, data.data))
            }
        } catch (error) {
            dispatch(addContactFailure(id))
        }


    }
}
// ADD END

// RESEND START
export const resendContactSuccess = (id, users) => ({
    type: 'RESEND_CONTACT_SUCCESS',
    id,
    users
})

export const resendContactFailure = () => ({
    type: 'RESEND_CONTACT_FAILURE'
})

export const resendContact = (id, name, phone) => {
    return async dispatch => {
        try {
            const { data } = await url.post('users', { name, phone })

            return dispatch(resendContactSuccess(id, data.data))
        } catch (error) {
            return dispatch(resendContactFailure())
        }
    }
}
// RESEND END

// UPDATE START
export const updateContactSuccess = (id, users) => ({
    type: 'UPDATE_CONTACT_SUCCESS',
    id,
    users
})

export const updateContactFailure = () => ({
    type: 'UPDATE_CONTACT_FAILURE',
})

export const updateContact = (id, name, phone) => {
    return async dispatch => {
        try {
            const { data } = await url.put(`users/${id}`, { name, phone })

            return dispatch(updateContactSuccess(id, data.data))
        } catch (error) {
            return dispatch(updateContactFailure())
        }
    }
}
// UPDATE END

// REMOVE START
export const removeContactSuccess = (id) => ({
    type: 'REMOVE_CONTACT_SUCCESS',
    id
})

export const removeContactFailure = (id) => ({
    type: 'REMOVE_CONTACT_FAILURE',
    id
})

export const removeContact = (id) => {
    return async dispatch => {
        try {
            await url.delete(`users/${id}`)

            dispatch(removeContactSuccess(id))
        } catch (error) {
            dispatch(removeContactFailure())
        }
    }
}
// REMOVE END

// SEARCH START
export const searchContactSuccess = (data) => ({
    type: 'SEARCH_CONTACT_SUCCESS',
    data
})

export const searchContactFailure = () => ({
    type: 'SEARCH_CONTACT_FAILURE'
})

export const searchContact = (searchName, searchPhone) => {
    return async (dispatch, getState) => {
        let state = getState()
        let params = {
            ...state.users.params,
            searchName,
            searchPhone,
            page: 1
        }
        try {
            const { data } = await url.get('users', { params })
            params = {
                ...params,
                pages: data.data.pages
            }
            dispatch(searchContactSuccess({ val: data.data.users, params }))
        } catch (error) {
            dispatch(searchContactFailure())
        }
    }
}
// SEARCH END