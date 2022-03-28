import React from 'react'

import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();

    const createStreamRoom = () => {
        let id = uuidv4();
        console.log(id);
        navigate(`/stream/${id}`);
    }
  
    return (
        <button id="create-btn" onClick={createStreamRoom}>Create Stream</button>
    );
}

export default Home