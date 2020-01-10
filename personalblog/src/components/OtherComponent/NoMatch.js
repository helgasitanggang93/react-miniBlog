import React from 'react';
import {useLocation} from 'react-router-dom';
const NoMatch = () => {
    let location = useLocation()
    return(
        <div>
            <h1> NO MATCH FOR <code> {location.pathname} </code> </h1>
        </div>
    );
}

export default NoMatch;