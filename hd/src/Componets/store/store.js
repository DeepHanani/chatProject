import {createStore} from 'redux'
import PostReducer from '../reducer/PostReducer';


const store = createStore(
    PostReducer
)

export default store;