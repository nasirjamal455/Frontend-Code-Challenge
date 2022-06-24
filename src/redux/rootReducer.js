import { combineReducers } from 'redux';
import shopReducer from './reducers/shopReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';    


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shop']
}

const rootReducer = combineReducers({
    shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer);