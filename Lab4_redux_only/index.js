const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
console.log("vending machine lab for redux!")

// action ==> intension, the act will be performed
const BUY_COKE = 'BUY_COKE'
const BUY_FANTA = 'BUY_FANTA'
const action1 = {
    type: BUY_COKE,
    info: 'my first redux action'
}
// action creator
function buyCoke() {
    return action1
}
const action2 = {
    type: BUY_FANTA,
    info: 'my second redux action'
}
function buyFanta() {
    return action2
}
// reducer ==> connect sotre & action, receive action, 
const initialCokeState = {
    numOfCokes: 100

}

const cokeReducer = (state = initialCokeState, action) => {
    switch (action.type) {
        case BUY_COKE:
            return {
                ...state,
                numOfCokes: state.numOfCokes - 1
            }
        default: // very important!!!
            return state
    }
}
const initialFantaState = {
    numOfFantas: 50
}
const fantaReducer = (state = initialFantaState, action) => {
    switch (action.type) {
        case BUY_FANTA:
            return {
                ...state,
                numOfFantas: state.numOfFantas - 1
            }
        default: // very important!!!
            return state
    }
}
// store ==> state management
const rootReducer = combineReducers({
    coke:cokeReducer,
    fanta:fantaReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial state, coke=", store.getState()) // active get state by getState()
//unsubscribeDB = store.subscribe(() => { console.log('log something to db::', store.getState()) })
//unsubscribe1 = store.subscribe(() => { console.log('moniter change, state=', store.getState()) })
console.log("David buy a coke:")
store.dispatch(buyCoke())
console.log("John buy 2 cokes, 2 fanta:")
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
//unsubscribe1()
//unsubscribe2 = store.subscribe(() => { console.log('** change, state=', store.getState()) })
console.log("Mary buy 3 cokes, 3 fanta:")
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyCoke())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
store.dispatch(buyFanta())
console.log(`curret in stock, coke=${store.getState().coke.numOfCokes}, fanta=${store.getState().fanta.numOfFantas} `)
//unsubscribe2()
//unsubscribeDB()