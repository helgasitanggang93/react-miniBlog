import React from 'react';
import PhotoProfil from '../../images/foto.png'
const PersonalProfile = () => {
    return (
        <div>
            <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img className="mx-auto d-block p-2 card-img-top rounded-circle" src={PhotoProfil} alt="Card image cap" style={{ width: '200px', height: '200px' }} />
                <div className="card-body">
                    <p className="card-text">Name: Willybroddus Helga Alphandito Sitanggang.</p>
                    <p className="card-text">Date of Birth: 30th April 1993</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalProfile