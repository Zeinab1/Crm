import React , {useEffect, useState} from 'react';
import {fetchClients} from '../../actions/ClientsActions';
import {connect} from 'react-redux';
import './clients.css'

 const Clients = ({clients,dispatch}) => {
    //const [clients , setClients] = useState([]);
    // const getClients = async() => {
    //     let res = await Axios.get('https://jsonplaceholder.typicode.com/users');
    //     setClients(res.data);
    //     console.log(clients)
    // }

    useEffect(() =>{
        dispatch(fetchClients())
    } , [dispatch]);
    console.log(clients)

    const renderClients = () => {
        return (
            <tbody>
            {
                clients.map(client=> (
                    <tr>
                        <td>{client.name}</td>
                        <td>{client.username}</td>
                        <td>{client.email}</td>
                    </tr>
                 ))
            }
        </tbody>
        )
    };
    return (
        <div >
            <table id='clients'>
                <thead>
                <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                </tr>
                </thead>
            {renderClients()}
            </table>
        </div>
    )
};

const mapStateToProps = (state) => ({
    clients: state.clients.clients,
  });
export default connect (mapStateToProps) (Clients);