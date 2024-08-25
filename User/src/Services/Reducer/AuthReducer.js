
const initialState = {

    Data: [],
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
    firebaseData: [],
    ViewOrder: [],
    isAuthenticated: false

}

const AuthReducer = (state = initialState, action) => {

    switch(action.type){

        case "SIGNUPDATA":
            return{
                ...state,
                Data: action.payload,
                isAuthenticated: true
            }

        case "SETFIREBASEDATA":
            return{
                ...state,
                firebaseData: action.payload
            }

        case "ADDTOCART":
            console.log("Item added to cart:", action.payload);
            const CartData = [...state.cartData, action.payload];
            localStorage.setItem('cartData', JSON.stringify(CartData));
            return{
                ...state,
                cartData: CartData
            }

        case "VIEWORDER":
            return{
                ...state,
                ViewOrder: action.payload
            }

        default:
            return state

    }

}

export default AuthReducer;








