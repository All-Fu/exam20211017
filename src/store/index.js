//Store 的创建
import { createStore ,combineReducers} from 'redux';
import reducer from '../store/reducer'

//把reducer数据传入store
const store = createStore(reducer);

export default store;
