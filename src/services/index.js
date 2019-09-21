// Create your services here

export const getProfile = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/api/users/${id}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(e => reject(e))
    })
};

export const updateProfile = (id, newValues) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/api/users/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({user : newValues}),
                headers: {'Content-Type': 'application/json'}
                }
            )
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(e => reject(e))
    })
};

