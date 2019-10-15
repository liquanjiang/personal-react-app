import { createStore } from 'redux'

const tiger = 10000;

const increase = {
    type: 'ADD'
}

const decrease = {
    type: 'MINUS'
}

const reducer =(state=tiger,action) => {
    switch(action.type){
        case 'ADD':
            return state += 1000;
        case 'MINUS':
            return state -= 1000;
        default:
            return state;

    }
}

// 创建store
const store = createStore(reducer)

export default store
