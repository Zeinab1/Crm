import React , {useState} from 'react'
import { connect } from 'react-redux';
import {addClient} from '../../actions/ClientsActions';
import './clients.css'

export const ClientsForm = ({dispatch}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            name,
            username,
            email
        };
        dispatch(addClient(newBook));
            setName('');
            setUsername('');
            setEmail('');

        };

    return (
        <div class="wrapped">
            <form onSubmit= {handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input type="submit" value="Add" />

            </form>
            
        </div>
    )
}
export default connect(null)(ClientsForm)
