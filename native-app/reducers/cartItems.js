import { ToastAndroid } from 'react-native'
const cartItems = (state = [], action) => {
    switch(action.type){

        case "ADD_TO_CART":
            console.log(action.payload)
            ToastAndroid.show('Added '+ action.payload.name + ' to cart', ToastAndroid.SHORT);
            return [...state, action.payload]


        case "REMOVE_FROM_CART":
            let found = false
            let newState = []
            state.map(item => {
                if(item.id === action.payload.id && !found){
                    found = true;
                    console.log("deleted");
                } else {
                    newState.push(item)
                    console.log(action.payload);

                }
            })
            return newState

    }
    return state

}

export default cartItems;