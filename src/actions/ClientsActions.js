import Axios from 'axios';
export const GET_CLIENTS = 'GET_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';

// export const fetchClients = async (dispatch) => {

//     try {
//         const res = await Axios.get(
//             'https://jsonplaceholder.typicode.com/users'
//         );
//         const data = res.data
//         dispatch({
//             type: GET_CLIENTS,
//             payload: data,
//           });
//     }catch{
//         console.log('error')
//     }
// };
export const fetchClients = () => async (dispatch) => {
    try {
        const res = await Axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
    
        const data = res.data;
    
        dispatch({
          type: GET_CLIENTS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
};
export const addClient = (newClient) => async (dispatch)=>{
    dispatch({
        type: ADD_CLIENT,
        payload: newClient,
      });

}