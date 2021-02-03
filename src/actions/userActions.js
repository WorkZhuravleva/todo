export const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE';
export const LOGOUT = 'LOGOUT';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';

export const request = (status) => ({
    type: REQUEST,
    payload: status
});

export const error = (status) => ({
    type: ERROR,
    payload: status
});

export const successResponse = (profile) => ({
    type: SUCCESS_RESPONSE,
    payload: profile
});

export const logout = () => ({
    type: LOGOUT
});


export const register = (user) => {
    return (dispatch) => {
        dispatch(request('pending...'));
        fetch('http://localhost:8080/todo/registration', {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(profile => {
                dispatch(request(null));
                dispatch(successResponse(profile))
            })
            .catch(e => {
                dispatch(request(null));
                console.log(e.message)
            });
    }
};

export const login = (token) => {
    return (dispatch) => {
        dispatch(request('pending...'));
        fetch('http://localhost:8080/todo/user/login', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(profile => {
                dispatch(request(null));
                dispatch(successResponse(profile));

            })
            .catch(e => {
                dispatch(request(null));
                console.log(e.message)
            });
    }
};