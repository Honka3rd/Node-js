import { combineReducers } from 'redux';
const fetchRes = (data=null, action) => {
    if(action.type === "POST"){
        data = action.payload;
        return { posts: data };
    }

    return data;
};

export default combineReducers({fetchRes});

