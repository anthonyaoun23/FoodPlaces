import { ToastAndroid } from 'react-native'
const cartItems = (state = [], action) => {
    switch(action.type){

        case "ADD_TO_CART":
            ToastAndroid.show('Added '+ action.payload.name + ' to cart', ToastAndroid.SHORT);
            return [...state, action.payload]


        case "REMOVE_FROM_CART":
            let found = false
            let newState = []
            state.map(item => {
                if(item.id === action.payload.id && !found){
                    found = true;
                } else {
                    newState.push(item)
                }
            })
            return newState

    }
    return state

}

export default cartItems;