import { createStore } from 'redux';

const states = {
    users: [{ firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com' }]
}

function userReducer(state = states, action) {
    switch (action.type) {
      case 'addUser':
        return { users: [...state.users, action.data] }
      case 'emptyUsers':
        return { users: [] }
      default:
        return state
    }
}

export let store = createStore(userReducer);