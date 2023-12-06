export const initialState = {
    basket: [],
};

//Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state, //return whatever the state looklike previously
                basket: [...state.basket, action.item], //but chnage the basket 
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(                   //get state get basket use findIndex. What findIndex does is it goes through each item in basketItem and returns the first index where basketItem.id === action.id.
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket];  // copy the current state into newBasket

            if(index>=0){
                newBasket.splice(index, 1)     // it takes the pointer at index position and cut it by one thus removing the required element from array.
            }
            else{
                console.log('cant remove product as it is not in the basket')
            }

            return{
                ...state,
                basket: newBasket
            }

            default:
                return state;
    }
};

export default reducer;