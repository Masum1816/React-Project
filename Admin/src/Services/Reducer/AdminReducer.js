
const initialState = {
    
    Datas: [],
    Data: null

}

const AdminReducer = (state = initialState, action) => {

    switch(action.type){

        case "GETDATA":
            return{
                ...state,
                Datas: action.payload,
                Data: null
            }
                        
        case "UPDATEDATA":
            return{
                ...state,
                Data: action.payload
            }

        case "DELETEDATA":
            return{
                ...state,
                Datas: state.Datas.filter(data => data.id != action.payload),
                Data: null
            }

        default:
            return state

    }

}

export default AdminReducer;








