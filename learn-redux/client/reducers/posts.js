// a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of the current state

function posts(state = [], action) {
    console.log('the state', state)
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const index = action.index;
            return [
                ...state.slice(0, index), // before the one we are updating
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1)// after the one we are updating
            ]
        default:
            return state;
    }
}

export default posts;
