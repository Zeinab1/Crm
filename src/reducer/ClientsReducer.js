import { GET_CLIENTS, ADD_CLIENT } from '../actions/ClientsActions';


const intialState = {
    clients:[]
};

 const ClientsReducer = (state = intialState , actions) => {
    switch(actions.type){
        case GET_CLIENTS:
            return {
                ...state,
                clients : actions.payload
            }
        case ADD_CLIENT:
            return {
                  ...state,
                  clients: [...state.clients, actions.payload],
            };
        default:
        return state;
    }

}

export default ClientsReducer;