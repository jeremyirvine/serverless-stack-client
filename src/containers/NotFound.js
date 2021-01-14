import React from 'react';
import './NotFound.css'

const NotFound = ({location}) => {


    return ( 
        <div className="NotFound text-center">
            <h3>Sorry, page <b>not</b> found...</h3>
            <p>Error 404: Could not find '{location.pathname}'</p>
        </div>
     );
}
 
export default NotFound; 