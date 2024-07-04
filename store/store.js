import { userService } from "../todo-starter-proj/services/user.service.js"

const { createStore } = Redux

//* Count
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
// export const CHANGE_BY = 'CHANGE_BY'

//* Todos
export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_IS_LOADING = 'SET_IS_LOADING'

//* Shopping cart
// export const TOGGLE_CART_IS_SHOWN = 'TOGGLE_CART_IS_SHOWN'
// export const ADD_CAR_TO_CART = 'ADD_CAR_TO_CART'
// export const REMOVE_CAR_FROM_CART = 'REMOVE_CAR_FROM_CART'
// export const CLEAR_CART = 'CLEAR_CART'


//* User
export const SET_USER = 'SET_USER'
export const SET_USER_SCORE = 'SET_USER_SCORE'


const initialState = {
    // count: 101,
    todos: [],
    isLoading: false,
    loggedInUser: userService.getLoggedinUser(),
    // isCartShown: false,
    // shoppingCart: []
}

function appReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        //* Count
        // case INCREMENT:
        //     return { ...state, count: state.count + 1 }
        // case DECREMENT:
        //     return { ...state, count: state.count - 1 }
        // case CHANGE_BY:
        //     return { ...state, count: state.count + cmd.diff }

        //* Todos
        case SET_TODOS:
            return {
                ...state,
                todos: cmd.todos
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== cmd.todoId)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, cmd.todo]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === cmd.todo._id ? cmd.todo : todo)
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: cmd.isLoading
            }

        //* Shopping cart
        // case TOGGLE_CART_IS_SHOWN:
        //     return {
        //         ...state,
        //         isCartShown: !state.isCartShown
        //     }
        // case ADD_CAR_TO_CART:
        //     return {
        //         ...state,
        //         shoppingCart: [...state.shoppingCart, cmd.car]
        //     }

        // case REMOVE_CAR_FROM_CART:
        //     const shoppingCart = state.shoppingCart.filter(car => car._id !== cmd.carId)
        //     return { ...state, shoppingCart }


        // case CLEAR_CART:
        //     return { ...state, shoppingCart: [] }

        //* User
        case SET_USER:
            return {
                ...state,
                loggedInUser: cmd.user
            }

        case SET_USER_SCORE:
            const loggedInUser = { ...state.loggedInUser, score: cmd.score }
            return { ...state, loggedInUser }

        default:
            return state
    }
}


export const store = createStore(appReducer)


// for DEBUGGING
window.gStore = store

// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })

